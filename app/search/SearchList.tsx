'use client';

import { Container, Flex, Paper, SimpleGrid, Text } from "@mantine/core";
import { SearchCard, SearchCardProps } from "./SearchCard";

function NoSearchResult() {
  return (
    <Container size="xs">
      <Paper shadow="xs" style={{ textAlign: 'center' }}>
        <Text size="xl" color="red">
          No Results Found
        </Text>
        <Text size="sm" mt="xs">
          We couldn't find any results matching your search criteria.
        </Text>
      </Paper>
    </Container>
  );
}

export function SearchList({ data }: { data: SearchCardProps[] }) {
  return (<SimpleGrid cols={5}>
    {data.length > 0 ? data?.map((props) => <SearchCard key={props.id} {...props} />) : <NoSearchResult />}
  </SimpleGrid>)
}
