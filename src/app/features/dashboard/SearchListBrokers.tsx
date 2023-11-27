'use client';

import { Flex, SimpleGrid } from "@mantine/core";
import { SearchCardBrokers, SearchCardProps } from "./SearchCardBrokers";

export function SearchListBrokers({ data }: { data: SearchCardProps[] }) {
  return (<SimpleGrid cols={5}>
    {data?.map((props) => <SearchCardBrokers key={props.id} {...props} />)}
  </SimpleGrid>)
}
