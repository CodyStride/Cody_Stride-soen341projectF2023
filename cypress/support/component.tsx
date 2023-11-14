// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import { theme } from "@/theme";
import "./commands";

import { mount } from "cypress/react18";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import '@mantine/dates/styles.css';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

// Example use:
// cy.mount(<MyComponent />)
Cypress.Commands.add("mount", (component, options) => {
  const wrappedComp = (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications />
        {component}
      </ModalsProvider>
    </MantineProvider>
  )
  return mount(wrappedComp);
});
