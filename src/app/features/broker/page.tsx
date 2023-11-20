import { CreatePropertyModal } from '@/components/broker';
import { PropertyTable } from '@/components/broker/PropertyTable';
import { IPropertyData } from '@/types/property';
import db from '@/lib/dbServer';
import { cookies } from 'next/headers';
import { APP_DATABASE } from '@/lib/dbNames';

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

async function getEntries() {
  const cookieStore = cookies();
  const user = await db.getUser(cookieStore);
  
  if (!user)
    throw 'User not authenticated';

  const { items } = await db.client.collection(APP_DATABASE.PROPERTIES).getList<IPropertyData>(1, 25, {
    filter: `owner = "${user.id}"`
  })

  return items
}

export default async function BrokerPage({ }: { searchParams?: any }) {
  const data = await getEntries()

  // Invalid state since user must be login
  return (
    <>
      <CreatePropertyModal />
      <PropertyTable data={data} />
    </>
  )
}
