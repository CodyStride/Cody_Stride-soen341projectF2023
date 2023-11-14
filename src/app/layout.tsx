'use client'

import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css'
import '@mantine/dates/styles.css';

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
          <ModalsProvider>
            <Notifications />
            {children}
          </ModalsProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
