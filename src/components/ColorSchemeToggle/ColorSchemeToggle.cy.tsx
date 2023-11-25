import React from "react";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

describe("<ColorSchemeToggle />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ColorSchemeToggle />);
    // Assert that the color scheme is initially set to "light"
    cy.get("[data-mantine-color-scheme]").should(
      "have.attr",
      "data-mantine-color-scheme",
      "light",
    );

    // Click the "Dark" button
    cy.get('button:contains("Dark")').click();

    // Assert that the color scheme is now set to "dark"
    cy.get("[data-mantine-color-scheme]").should(
      "have.attr",
      "data-mantine-color-scheme",
      "dark",
    );
  });
});
