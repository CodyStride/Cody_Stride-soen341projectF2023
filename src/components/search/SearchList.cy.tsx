// cypress/integration/searchList.spec.js

/// <reference types="cypress" />

import {SearchList} from './SearchList'

describe('SearchList Component', () => {
  it('displays "No Results Found" when no data is provided', () => {
    // Mount the SearchList component with empty data
    cy.mount(<SearchList data={[]} />);

    // Check if "No Results Found" message is displayed
    cy.contains('No Results Found').should('be.visible');
    cy.contains('We couldn\'t find any results matching your search criteria.').should('be.visible');
  });

  it('displays search cards when data is provided', () => {
    // Visit the page or component where the SearchList component is rendered
    // Mock data for testing
    const testData = [
      // Add your test data here
    ];

    // Mount the SearchList component with test data
    cy.mount(<SearchList data={testData} />);

    // Check if the search cards are displayed
    cy.get('[data-cy=search-card]').should('have.length', testData.length);
  });
});
