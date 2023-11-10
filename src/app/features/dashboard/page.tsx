import { Space } from "@mantine/core"
import { SearchListBrokers } from "./SearchListBrokers"
import { SearchInputBrokers } from "./SearchInputBrokers"
import db from "@/lib/dbServer"

export interface BSearchParams {
  name?: string
  license?: string
  agency?: string
  user?: string
}

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries({ name, license, agency, user }: BSearchParams) {
  let filter = ''
  if (name) {
    filter += `Name = "${name}"`;
  }
 
  if (license) {
    if (filter) {
        filter += ' && ';
      }
    filter += `License = "${license}"`;
  }

  if (agency) {
    if (filter) {
      filter += ' && ';
    }
    filter += `Agency >= ${agency}`;
  }

  if (user) {
    if (filter) {
      filter += ' && ';
    }
    filter += `User >= ${user}`;
  }

  const broker_data = await db.client.collection('broker_info').getList(1, 50, {
    filter
  })
  
  return broker_data.items
}

export default async function DashboardPagez({ searchParams }: { searchParams: BSearchParams }) {
  const data = await getEntries(searchParams)

  return (<>
    <SearchInputBrokers />
    <Space h="md" />
    {data ? <SearchListBrokers data={data as any} /> : <></>}
  </>)
}
