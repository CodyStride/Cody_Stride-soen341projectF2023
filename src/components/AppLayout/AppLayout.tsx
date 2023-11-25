"use client";

import { Button, Group, AppShell, Burger, Avatar } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { LogoutButton } from "./LogoutButton";

export interface AppLayoutProps {
  children: JSX.Element;
  userInit?: string;
}

export function AppLayout({ children, userInit }: AppLayoutProps) {
  return (
    <AppShell
      header={{ height: 60 }}
      // navbar={{ width: 300, breakpoint: 'sm' }}
      padding="md" 
    >
      <AppShell.Header>
        <Group h="100%" gap={0}>
          <Group justify="center" px="md">
            <Burger hiddenFrom="sm" size="sm" />
            <Button variant="outline" size="lg" component="a" href="/features">
              <IconHome />
            </Button>
            <Button
              variant="outline"
              size="lg"
              component="a"
              href="/features/search"
            >
              View Listings
            </Button>

            {userInit && [
              <Button
                variant="outline"
                size="lg"
                component="a"
                href="/features/dashboard"
              >
                Dashboard
              </Button>,
              <Button
                variant="outline"
                size="lg"
                component="a"
                href="/features/broker"
              >
                Properties
              </Button>
            ]}

            {!userInit && <Button
              variant="outline"
              size="lg"
              component="a"
              href="/auth/login"
            >
              Login
            </Button>}

            {userInit && <LogoutButton />}
          </Group>
          {userInit && <Avatar color="blue">{userInit}</Avatar>}
        </Group>
      </AppShell.Header>

      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
