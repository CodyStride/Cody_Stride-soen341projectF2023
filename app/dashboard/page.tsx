import { Space } from "@mantine/core"
import PocketBase from 'pocketbase'
import { SearchListBrokers } from "./SearchListBrokers"
import { SearchInputBrokers } from "./SearchInputBrokers"
import { useRouter } from "next/router"

export interface BSearchParams {
  name?: string
  email?: string
  listingsSold?: number
  age?: number
}

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries({ name, email, listingsSold, age }: BSearchParams) {
  const db = new PocketBase('http://127.0.0.1:8090')
  let filter = ''
  if (name) {
    filter += `Name = "${name}"`;
  }
  console.log("Filter after name is : " + filter)
  if (email) {
    if (filter) {
        filter += ' && ';
      }
    filter += `Email = "${email}"`;
  }
  console.log("Filter after email is : " + filter)
  if (listingsSold) {
    if (filter) {
      filter += ' && ';
    }
    filter += `Nbr_of_Listings >= ${listingsSold}`;
  }
  console.log("Filter after nbrListings is : " + filter)
  if (age) {
    if (filter) {
      filter += ' && ';
    }
    filter += `Age >= ${age}`;
  }
  console.log("Filter after age is : " + filter)
  const broker_data = await db.collection('brokers').getList(1, 50, {
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
