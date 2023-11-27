"use client";

import cx from "clsx";
import { useState } from "react";
import { deleteCookie } from "cookies-next";
import {
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
  rem,
  useMantineTheme,
  AppShell,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconLogout,
  IconHome,
  IconHeart,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderLayout.module.css";
import { useRouter, usePathname } from "next/navigation";
import { UserAuthModel } from "@/types/property";


const tabs: { label: string; page: string }[] = [
  { label: "Home", page: "" },
  { label: "Dashboard", page: "dashboard" },
  { label: "Listings", page: "search" }
];

export function HeaderLayout({user}:{user?:UserAuthModel}) {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);

  const items = tabs.map(({ label, page }) => {
    console.log(label, page);
    return (
      <Tabs.Tab value={`/features/${page}`} key={page}>
        {label}
      </Tabs.Tab>
    );
  });

  // Get user initials
  var userInit: string | undefined;
  if (user) {
    const words: string[] = user.name.split(" ");

    // Get the first letter of each word and concatenate them
    words[0].charAt(0).toUpperCase();
    words[words.length - 1].charAt(0).toUpperCase();
    userInit = words
      .map((word: string) => word.charAt(0).toUpperCase())
      .join("");
  }

  const onLogout = async () => {
    try {
      deleteCookie('pb_auth');
      localStorage.clear();
      router.push('/auth/login');
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <AppShell.Header className={classes.header}>
      <Container className={classes.mainSection} size="md">
        <Group justify="space-between">
          <IconHome size={28} />

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transitionProps={{ transition: "pop-top-right" }}
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
            withinPortal
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, {
                  [classes.userActive]: userMenuOpened,
                })}
              >
                <Group gap={7}>
                <Avatar color="cyan" size="30">{userInit}</Avatar>
                  <Text fw={500} size="sm" lh={1} mr={3}>
                    {user?.name}
                  </Text>
                  <IconChevronDown
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={() => router.push('/features/dashboard')}
                leftSection={
                  <IconHeart
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.red[6]}
                    stroke={1.5}
                  />
                }
              >
                Favorites
              </Menu.Item>

              <Menu.Label>Settings</Menu.Label>

              <Menu.Item
                onClick={onLogout}
                leftSection={
                  <IconLogout
                    style={{ width: rem(16), height: rem(16) }}
                    stroke={1.5}
                  />
                }
              >
                Logout
              </Menu.Item>

            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
      <Container size="md">
        <Tabs
          defaultValue="Home"
          variant="outline"
          visibleFrom="sm"
          classNames={{
            root: classes.tabs,
            list: classes.tabsList,
            tab: classes.tab,
          }}
          value={pathname}
          onChange={(page) => {
            router.push(page as string);
          }}
        >
          <Tabs.List>{items}</Tabs.List>
        </Tabs>
      </Container>
    </AppShell.Header>
  );
}
