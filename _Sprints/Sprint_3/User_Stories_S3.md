<!-- Search for Brokers -->

## User story 1

### User Description

As a user, I want to be able to search for specific brokers to find information about them, while also being able to view what properties these brokers have sold.

### User Acceptance Flow

1. User opens the brokers page
2. User searches for the broker based on criteria
3. User is shown a list of brokers that correspond to his search
4. User clicks on a specific broker
5. User is able to see the different listings that this broker has posted

### Acceptance Criteria

- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown

- [ ] Create broker search property page
- [ ] Implement an advanced search functionality
- [ ] Create page displaying specific brokers' posted listings
- [ ] Apply database components for brokers' listings

<!-- Brokers submitting offers to properties: -->

## User story 2

### User Description

As a user, specifically a broker, I want to be able to submit an offer for buying a property on behalf of my client.

### User Acceptance Flow

1. User searches for a property
2. User selects the property to submit the offer to from search result list
3. User is shown the description of the property
4. User presses the "Submit offer" button
5. User fills in the information of the offer form
6. User submits offer form
7. User gets a confirmation that the offer was submitted

### Acceptance Criteria

- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown

- [ ] Create offer form page
- [ ] Implement offer submission functionality that creates an offer record in the database
- [ ] Implement a notification confirmation that the offer was submitted
- [ ] Implement a database that stores the offers on the properties

<!-- Offers Management (View, accept, reject -->

## User story 3

### User Description

As a user, specifically a broker, I want to be able to see different offers to my properties on sale, while being able to accept and reject these offers.

### User Acceptance Flow

1. User enters their dashboard
2. User selects his property
3. User is shown the offers to that property from both the buyers and other brokers
4. User presses the "Accept offer" or "Reject Offer" button based on what he wants
5. User gets a confirmation that the offer was accepted/rejected

### Acceptance Criteria

- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown

- [ ] Create offer viewing page
- [ ] Create accept and reject functionalities
- [ ] Implement a database that stores the offers on the properties
- [ ] Implement a notification confirmation from accepting/rejecting offer
