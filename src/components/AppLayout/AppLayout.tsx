"use client";

import { Button, Group, AppShell, Burger, Avatar } from "@mantine/core";
import { IconHome } from "@tabler/icons-react";
import { LogoutButton } from "./LogoutButton";
import { USER_TYPES, UserAuthModel } from "@/types/property";

export interface AppLayoutProps {
  children: JSX.Element;
  user?: UserAuthModel;
}

export function AppLayout({ children, user }: AppLayoutProps) {
  var userInit: string | undefined;

  if (user) {
    console.log(user)
    const words: string[] = user.name.split(" ");

    // Get the first letter of each word and concatenate them
    words[0].charAt(0).toUpperCase();
    words[words.length - 1].charAt(0).toUpperCase();
    userInit = words
      .map((word: string) => word.charAt(0).toUpperCase())
      .join("");
  }

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

            {user && (
              <Button
                variant="outline"
                size="lg"
                component="a"
                href="/features/dashboard"
              >
                Dashboard
              </Button>
            )}
            {user && (user?.type == USER_TYPES.BROKER) && (
              <Button
                variant="outline"
                size="lg"
                component="a"
                href="/features/broker"
              >
                Properties
              </Button>
            )}

            {!userInit && (
              <Button
                variant="outline"
                size="lg"
                component="a"
                href="/auth/login"
              >
                Login
              </Button>
            )}

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
