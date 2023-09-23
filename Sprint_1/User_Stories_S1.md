# User Stories

<!-- Search for properties: -->
## User story 1
The user must be able to search for properties based on their preferences. As they'll have certain desired aspects in mind when it comes to their wanted house, the
user will have the ability to filter their search based on, for example, a number of rooms or the location of the house. When searching for properties, the search 
results will offer autocompletion.


<!-- Requests for visits for properties: -->
## User story 2
The user must be able to request visits for listed properties. When pressing "visit" under a listing a calendar will pop up with all the available timings for a visit
the user is then supposed to click on one of the available dates and select an available time slot to book it.  When booked a confirmation message should appear on the screen
and a notification email is sent to the broker.

<!-- CRUD operations on properties: -->
## User story 3
### User Description
As a user specifically a broker, I want to submit an offer for buying a property on behalf of my client

### User Acceptance Flow
1. User selects the property to submit the offer from the list of properties
2. User enters the description of the property
3. User presses the "Submit offer" button
4. User fills in the information of the offer form
5. User submits offer form
6. User gets a confirmation that the offer was submitted

### Acceptance Criteria
- [ ] User acceptance flow is respected
- [ ] Documentation is present for every new component
- [ ] Unit and UI tests are implemented for every component and function

<!-- CRUD operations on brokers -->
## User story 4
This type of user, the system administrators specifically, will be able to perform CRUD operations on brokers. They'll be able to manage broker accounts by deleting them, or 
even have the ability to create some brokers accounts. This user could also manage the information associated with the accounts of the different brokers. In order to do this, 
the user must have a page where he can view a full list of the broker's different accounts.
