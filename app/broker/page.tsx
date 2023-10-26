import PocketBase from 'pocketbase'
import { generateRandomPropertyData } from './testdata';
import { CreateProperty } from './CreateProperty';
// import { GettingStartedExample } from './GettingStarted';

async function getEntries() {
  const db = new PocketBase('http://127.0.0.1:8090')
  let filter = ''

  const data = await db.collection('properties').getList(1, 10, {
    filter
  })

  return data.items
}

const data = generateRandomPropertyData(20); 

export default function BrokerPage() {

  // const data = getEntries()

  return (
    <>
      {/* <PropertyTable data={data} /> */}
      <CreateProperty />
    </>
  )
}
