import PocketBase from 'pocketbase'
import { CreatePropertyModal } from './CreatePropertyButton';
import { PropertyTable } from './PropertyTable';
import { IPropertyData } from '@/types/property';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries() {
  const db = new PocketBase('http://127.0.0.1:8090')

  const { items } = await db.collection('properties').getList(1, 25)

  return items as unknown
}

export default async function BrokerPage({ }: { searchParams?: any }) {
  const data = await getEntries()

  return (
    <>
      <CreatePropertyModal />
      <PropertyTable data={data as IPropertyData[]} />
    </>
  )
}
