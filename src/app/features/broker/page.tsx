import { CreatePropertyModal } from './CreatePropertyButton';
import { PropertyTable } from './PropertyTable';
import { IPropertyData } from '@/types/property';
import db from '@/lib/dbServer';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries() {
  const { items } = await db.client.collection('properties').getList(1, 25)

  return items as unknown
}

export default async function BrokerPage({ }: { searchParams?: any }) {
  const data = await getEntries()

  // Invalid state since user must be login
  return (
    <>
      <CreatePropertyModal />
      <PropertyTable data={data as IPropertyData[]} />
    </>
  )
}
