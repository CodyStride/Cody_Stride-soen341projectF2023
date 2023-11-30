"use client";


import { AppShell } from "@mantine/core";
import { HeaderLayout } from "./HeaderLayout";
import { UserAuthModel } from "@/types/property";

export interface AppLayoutProps {
  children: JSX.Element;
  user?: UserAuthModel;
}

export function AppLayout({ children, user }: AppLayoutProps) {
  return (
    <AppShell
      header={{ height: { base: 60, md: 113, lg: 113 } }}
      // navbar={{ width: 300, breakpoint: 'sm' }}
      // padding="md"
    >
      <HeaderLayout user={user} />
      {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

