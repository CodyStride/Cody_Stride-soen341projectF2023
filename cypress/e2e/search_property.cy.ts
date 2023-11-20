describe("Real Estate Search Functionality", () => {
  it("should search for properties based on user input", () => {
    // Visit the search page
    cy.visit("/features/search");

    cy.get("[data-cy=loading-overlay]").should("not.exist");
    cy.get("[data-cy=property-type]").click();
    cy.get("[data-cy=property-type]").focus().type("Ho");
    cy.get('.mantine-Autocomplete-dropdown').contains('House').click();

    // Type minimum listing price
    cy.get("[data-cy=min-price]").type("500000");

    // Type maximum listing price
    cy.get("[data-cy=max-price]").type("1000000");

    // Type number of bedrooms
    cy.get("[data-cy=num-bedrooms]").type("3");

    // Type number of bathrooms
    cy.get("[data-cy=num-bathrooms]").type("2");

    // Click the search button
    cy.get("[data-cy=search-button]").click();

    // Validate search results
    cy.get("[data-cy=search-card]").should("have.length.greaterThan", 2);
  });

  it("should not have any results", () => {
    // Visit the search page
    cy.visit("/features/search");

    cy.get("[data-cy=loading-overlay]").should("not.exist");
    cy.get("[data-cy=property-type]").click();
    cy.get("[data-cy=property-type]").focus().type("Ho");
    cy.get('.mantine-Autocomplete-dropdown').contains('House').click();

    // Type minimum listing price
    cy.get("[data-cy=min-price]").type("500000");

    // Type maximum listing price
    cy.get("[data-cy=max-price]").type("1000000");

    // Type number of bedrooms
    cy.get("[data-cy=num-bedrooms]").type("10");

    // Type number of bathrooms
    cy.get("[data-cy=num-bathrooms]").type("2");

    // Click the reset button
    cy.get("[data-cy=search-button]").click();

    cy.get("[data-cy=search-card]").should("not.exist");
  });
});
