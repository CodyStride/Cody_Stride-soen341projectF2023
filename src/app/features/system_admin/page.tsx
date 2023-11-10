import { CreateBrokerModal } from './CreateBrokerButton';
import { BrokerTable } from './BrokerTable';
import { IBrokerData } from '@/types/broker';
import db from '@/lib/dbServer';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries() {
  const { items } = await db.client.collection('broker_info').getList(1, 25)

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