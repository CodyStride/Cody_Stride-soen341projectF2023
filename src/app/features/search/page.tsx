import { Space } from "@mantine/core";
import db from "@/lib/dbServer";
import { SearchInput, SearchList } from "@/components/search";
import { IPropertyData, IPropertyDataExp, ISearchPropertyParams } from "@/types/property";
import { Suspense } from "react";
import Loading from "./loading";
import { APP_DATABASE } from "@/lib/dbNames";
import { cookies } from "next/headers";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getEntries({
  type,
  min_price,
  max_price,
  bedrooms,
  bathrooms,
}: ISearchPropertyParams) {
  let filter = "";

  if (type) {
    if (type != "Any") {
      filter += `type = "${type}"`;
    }
  }

  if (min_price) {
    if (filter) {
      filter += " && ";
    }
    filter += `price >= ${min_price}`;
  }

  if (max_price) {
    if (filter) {
      filter += " && ";
    }
    filter += `price <= ${max_price}`;
  }

  if (bedrooms) {
    if (filter) {
      filter += " && ";
    }
    filter += `bedrooms >= ${bedrooms}`;
  }

  if (bathrooms) {
    if (filter) {
      filter += " && ";
    }
    filter += `bathrooms >= ${bathrooms}`;
  }

  const data = await db.client
    .collection(APP_DATABASE.PROPERTIES)
    .getList<IPropertyDataExp>(1, 50, {
      filter,
      expand: 'owner'
    });

  return data.items;
}

function markFavorites(properties: IPropertyDataExp[], favoriteList: string[]): IPropertyDataExp[] {
  return properties.map(property => ({
    ...property,
    isFavorite: favoriteList.some(favorite => favorite === property.id)
  }));
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: ISearchPropertyParams;
}) {
  const cookieStore = cookies();
  const user = await db.getUser(cookieStore);
  var data: IPropertyDataExp[];

  if (user) {
    const favoriteReq = db.client
      .collection(APP_DATABASE.FAVORITES)
      .getFirstListItem<{ properties: string[] }>(`user = "${user.id}"`);
    const requests: any = [getEntries(searchParams), favoriteReq];
    const results = await Promise.allSettled(requests);
    
    if (results[0].status !== 'fulfilled')
      throw "Could not get properties"
    console.log("RESULTS", results[0].value);

    if (results[1].status !== 'fulfilled')
      throw "Could not get favorites of user"

    data = results[0].value;
    data = markFavorites(data, results[1].value.properties);
  } else {
    data = await getEntries(searchParams);
  }

  return (
    <>
      <SearchInput searchParams={searchParams} />
      <Space h="md" />
      <Suspense fallback={<Loading />}>
        {data ? <SearchList data={data} user={user} /> : <></>}
      </Suspense>
    </>
  );
}
