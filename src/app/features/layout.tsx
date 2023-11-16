"use client";

import { BiHomeAlt } from "react-icons/bi";
import { Button, Group, AppShell, Burger } from "@mantine/core";

export default function FeaturePage({ children }: { children: any }) {
  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" gap={0}>
          <Group justify="center" pb="xl" px="md">
            <Burger hiddenFrom="sm" size="sm" />
            <Button variant="outline" size="lg" component="a" href="/features">
              <BiHomeAlt />
            </Button>
            <Button
              variant="outline"
              size="lg"
              component="a"
              href="/features/search"
            >
              View Listings
            </Button>
            <Button variant="outline" size="lg" component="a" href="/features/dashboard">
              Dashboard
            </Button>
            <Button
              variant="outline"
              size="lg"
              component="a"
              href="/features/broker"
            >
              Properties
            </Button>
            <Button
              variant="outline"
              size="lg"
              component="a"
              href="/features/broker_search"
            >
              System Admin Page
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
