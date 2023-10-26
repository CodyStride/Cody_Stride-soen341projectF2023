import { Space } from "@mantine/core"
import { SearchInput } from "./SearchInput"
import PocketBase from 'pocketbase'
import { SearchList } from "./SearchList"
import { useRouter } from "next/router"

export interface ISearchParams {
  type?: string
  min_price?: number
  max_price?: number
  bedrooms?: number
  bathrooms?: number
}

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries({ type, min_price, max_price, bedrooms, bathrooms }: ISearchParams) {
  const db = new PocketBase('http://127.0.0.1:8090')
  let filter = ''

  if (type) {
    filter += `type = "${type}"`;
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

  const data = await db.collection('properties').getList(1, 50, {
    filter
  })

  return data.items
}

export default async function SearchPage({ searchParams }: { searchParams: ISearchParams }) {
  const data = await getEntries(searchParams)

  return (<>
    <SearchInput />
    <Space h="md" />
    {data ? <SearchList data={data as any} /> : <></>}
  </>)
}
