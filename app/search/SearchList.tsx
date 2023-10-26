'use client';

import { Flex, SimpleGrid } from "@mantine/core";
import { SearchCard, SearchCardProps } from "./SearchCard";

export function SearchList({ data }: { data: SearchCardProps[] }) {
  return (<SimpleGrid cols={5}>
    {data?.map((props) => <SearchCard key={props.id} {...props} />)}
  </SimpleGrid>)
}
