import { IBrokerData } from '@/types/property';
import db from '@/lib/dbServer';
import { BrokerTable, CreateBrokerModal } from '@/components/system_admin';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries() {
  const { items } = await db.client.collection('broker_search').getList(1, 25)

  return items as unknown
}

export default async function BrokerPage({ }: { searchParams?: any }) {
  const data = await getEntries()

  return (
    <>
      <CreateBrokerModal />
      <BrokerTable data={data as IBrokerData[]} />
    </>
  )
}