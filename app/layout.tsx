'use client'

import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript, Button, Group } from "@mantine/core";
import { AppShell, Burger } from '@mantine/core';
import { theme } from "../theme";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            // navbar={{ width: 300, breakpoint: 'sm' }}
            padding="md"
          >
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger hiddenFrom="sm" size="sm" />
                <Button variant="outline" size="lg" component="a" href="/">
                  Home
                </Button>
                <Button variant="outline" size="lg" component="a" href="/search">
                  View Listings
                </Button>
              </Group>
            </AppShell.Header>

            {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}

            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
