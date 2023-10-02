# User Stories

The user stories mentioned below were established during Sprint 1. We will be working on completing these throughout Sprint 2.

<!-- Search for properties: -->
## User story 1
### User Description
As a user, I want to be able to search for properties and be able to filter my search based on certain aspects such as the amount of rooms, location, etc.

### User Acceptance Flow
1. User clicks on the search bar and types the city of the house
2. User can click on the advanced search button where he could filter his search based on more specific aspects
3. User is shown autocompletion suggestions
4. User presses on the desired location
5. User is shown the different options of houses offered

### Acceptance Criteria
- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown
- [ ] Create a database of property characteristics
- [ ] Create search page
- [ ] Create advanced search option
- [ ] Implement database search for qualifying properties
- [ ] Create search result list component

<!-- Requests visits for properties: -->
## User story 2
### User Description
As a user, specifically a house-buyer, renter, or even broker willing to request a visit for his client, I want to be able to request a visit to a specific house posted on the site. I also need to be able to chose a specific and available time that is convenient for me.

### User Acceptance Flow
1. User clicks on the request a visit button under the posting
2. User will be prompted to chose between available time slots for the meeting
3. User clicks on a confirm request button
4. Request is sent to the broker who posted the listing by notifiation email

### Acceptance Criteria
- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown
- [ ] Implement database for current requests
- [ ] Implement database of availability of house visits
- [ ] Create page of visit request

<!-- Brokers submitting offers to properties: -->
## User story
### User Description
As a user, specifically a broker, I want to be able to submit an offer for buying a property on behalf of my client.

### User Acceptance Flow
1. User selects the property to submit the offer to from the search result of properties 
2. User is shown the description of the property
3. User presses the "Submit offer" button
4. User fills in the information of the offer form
5. User submits offer form
6. User gets a confirmation that the offer was submitted

### Acceptance Criteria
- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown
- [ ] Create offer form page
- [ ] Implement submitting offer to database

<!-- CRUD operations on properties: -->
## User story 3
### User Description
As a user, specifically a broker, I want to be able to add and remove properties that I wish to sell.

### User Acceptance Flow
1. User inputs the title of the property, where the price, location and type of property (e.g: house, triplex, etc.) are mentioned
2. User writes the description of the property
3. User adds images of the property
4. User presses the "Post Property" button
5. User should see the property listing when viewing his account
6. User selects the property from his list of properties
7. User clicks on the "Delete Property" button
8. User shouldn't be able to see the property on his account anymore

### Acceptance Criteria
- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

### Task Breakdown
- [ ] Implement properties on the main search page
- [ ] Create database for property status
- [ ] Create description of property page
- [ ] Implement adding/removing properties


<!-- CRUD operations on brokers -->
## User story 4
This type of user, the system administrators specifically, will be able to perform CRUD operations on brokers. They'll be able to manage broker accounts by deleting them, or 
even have the ability to create some brokers accounts. This user could also manage the information associated with the accounts of the different brokers. In order to do this, 
the user must have a page where he can view a full list of the broker's different accounts.

### User Description
As a user, specifically a system administrator, I should be able to add and remove broker accounts and manage information associated with the accounts.

### User Acceptance Flow
1. User selects the broker account he wishes to modify from the list of broker accounts
2. User is shown the profile of the broker
3. User clicks the "Edit Profile" button
4. User modify information associated with the selected broker's account
5. User clicks on "Delete Account" button to remove the account from the website
6. User clicks the confirm button
7. User shouldn't see the broker account on the list anymore

### Acceptance Criteria
- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function
