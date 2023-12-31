import { Space } from "@mantine/core"
import { SearchInputBrokers, SearchListBrokers } from "@/components/search_broker"
import db from "@/lib/dbServer"
import { APP_DATABASE } from "@/lib/dbNames"

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

async function getEntries({ name, license, agency }: BSearchParams) {
  let filter = ''
  if (name) {
    filter += `name ?~ "${name}"`;
  }

  if (license) {
    if (filter) {
        filter += ' && ';
      }
    filter += `license ?~ "${license}"`;
  }

  if (agency) {
    if (filter) {
      filter += ' && ';
    }
    filter += `agency >= "${agency}"`;
  }

  console.log(filter);

  const broker_data = await db.client.collection(APP_DATABASE.BROKER_SEARCH).getList(1, 50, {
    filter
  })

  return broker_data.items
}

export default async function BrokerSearchPage({ searchParams }: { searchParams: BSearchParams }) {
  const data = await getEntries(searchParams)

  return (<>
    <SearchInputBrokers />
    <Space h="md" />
    {data ? <SearchListBrokers data={data as any} /> : <></>}
  </>)
}