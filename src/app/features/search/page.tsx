import { Space } from "@mantine/core"
import db from "@/lib/dbServer"
import { SearchInput, SearchList } from "@/components/search"
import { ISearchPropertyParams } from "@/types/property"

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries({ type, min_price, max_price, bedrooms, bathrooms }: ISearchPropertyParams) {
  let filter = ''

  if (type) {
    if (type != 'Any') {
      filter += `type = "${type}"`;
    }
  }

  if (min_price) {
    if (filter) {
      filter += ' && ';
    }
    filter += `price >= ${min_price}`;
  }

  if (max_price) {
    if (filter) {
      filter += ' && ';
    }
    filter += `price <= ${max_price}`;
  }

  if (bedrooms) {
    if (filter) {
      filter += ' && ';
    }
    filter += `bedrooms >= ${bedrooms}`;
  }

  if (bathrooms) {
    if (filter) {
      filter += ' && ';
    }
    filter += `bathrooms >= ${bathrooms}`;
  }

  const data = await db.client.collection('properties').getList(1, 50, {
    filter
  })

  return data.items
}

export default async function SearchPage({ searchParams }: { searchParams: ISearchPropertyParams }) {
  const data = await getEntries(searchParams)

  return (<>
    <SearchInput searchParams={searchParams}/>
    <Space h="md" />
    {data ? <SearchList data={data as any} /> : <></>}
  </>)
}
