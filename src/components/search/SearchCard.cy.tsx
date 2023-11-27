// cypress/integration/searchCard.spec.js
import React from "react";
import { SearchCard } from "./SearchCard";

const { mount } = cy;

describe("SearchCard Component", () => {
  it("should render SearchCard with correct information", () => {
    // Assuming you have sample data
    const testData = {
      id: "1",
      owner: "John Doe",
      price: 1000000,
      description: "Beautiful house for sale",
      image:
        "https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg",
      bedrooms: 3,
      bathrooms: 2,
      location: "Cityville",
      type: "House",
      expand: {
        owner: {
          id: '12345678',
          username: 'john_doe',
          email: 'john.doe@example.com',
          name: 'John Doe',
          avatar: 'https://example.com/avatar/john_doe.png',
          type: 'user',
          created: '2022-01-15T12:30:00.000Z',
          updated: '2022-11-30T08:45:00.000Z',
          token: 'abc123def456',
        }
      }
    };

    // Mount the component
    mount(<SearchCard data={testData} />);

    // Verify that the component renders with the correct information
    cy.get("[data-cy=search-card]").as("searchCard");
    cy.get("@searchCard").should("exist");
    cy.get("@searchCard").contains(testData.description);
    cy.get("@searchCard").contains(
      testData.price.toLocaleString("en-US", {
        style: "currency",
        currency: "CAD",
        maximumFractionDigits: 0,
      }),
    );
    cy.get("@searchCard").contains(`${testData.bedrooms}`);
    cy.get("@searchCard").contains(`${testData.bathrooms}`);
    cy.get("@searchCard").contains(testData.location);
    cy.get("@searchCard")
      .find("img")
      .should("have.attr", "src", testData.image);

    // Trigger the request visit button and check if modal is opened
    cy.get("@searchCard").contains("Request Visit").click();
    cy.get("[data-cy=request-visit-modal]").should("exist");
  });
});
