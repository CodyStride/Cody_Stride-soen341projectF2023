'use client';

import { Container, Paper, Text } from "@mantine/core";

export function NoResult() {
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
