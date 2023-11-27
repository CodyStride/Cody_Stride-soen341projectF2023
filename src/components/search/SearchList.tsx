"use client";

import { Container, Paper, SimpleGrid, Text } from "@mantine/core";
import { SearchCard } from "./SearchCard";
import { IPropertyData, UserAuthModel } from "@/types/property";

function NoSearchResult() {
  return (
    <Container size="xs">
      <Paper shadow="xs" style={{ textAlign: "center" }}>
        <Text size="xl" c="red">
          No Results Found
        </Text>
        <Text size="sm" mt="xs">
          We couldn't find any results matching your search criteria.
        </Text>
      </Paper>
    </Container>
  );
}

export function SearchList({
  data: dataList,
  user,
}: {
  data: IPropertyData[];
  user?: UserAuthModel;
}) {
  console.log(dataList)
  return (
    <SimpleGrid cols={5}>
      {dataList.length > 0 ? (
        dataList?.map((data) => (
          <SearchCard key={data.id} data={data} user={user} />
        ))
      ) : (
        <NoSearchResult />
      )}
    </SimpleGrid>
  );
}
