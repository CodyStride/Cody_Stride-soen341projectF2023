'use client';

import { SimpleGrid } from "@mantine/core";
import { SearchCard } from "./SearchCard";
import { IPropertyData } from "@/types/property";
import { NoResult } from "./NoResult";

export function SearchList({ data }: { data: IPropertyData[] }) {
  return (<SimpleGrid cols={5}>
    {data.length > 0 ? data?.map((props) => <SearchCard key={props.id} {...props} />) : <NoResult />}
  </SimpleGrid>)
}
