# Real Estate Website Application

Our goal is to create a real-estate web application which will potentially be used by people wishing to buy or rent houses and brokers. As a team, we aim to have a responsive and efficient website as a final result. In order to achieve this, we’re going to have to properly design our website using front-end technologies while also developing a back end to manage the data behind the scenes.
There are 4 different categories of people who will be using our product.

- House buyers that can search for houses based on filters, save houses as favorites, request to visit a house, search for brokers and use the mortgage calculator. Obviously, they will be able to send offers to brokers selling the houses. They can also have filters associated to their accounts.
- House renters that will be able to do the same as house buyers but not need the mortgage calculator
- Brokers can create new listings for houses they need to sell. They can also edit and delete those. Also, they can submit purchase offers to properties sold by other brokers, while alos being able to manage offers they receive. Furthermore, they can find homebuyers accounts which have matching preferences to their listings. Lastly, the brokers can also request to visit a house on behalf of their clients, while they can also reschedule or cancel visit offers they receive.
- System Admnis have the ability to manage broker accounts. They're able to create, remove or even change the info associated to the accounts.

## **Team Members, Roles and Background**

| Name                | Student ID | Role             |
| ------------------- | ---------- | ---------------- |
| Adam Chami          | 40248165   | Team Leader      |
| Adrian Nico Salvado | 40246591   | QA               |
| Mahmoud Mohamed     | 40163777   | Design Master    |
| Mickel Samuel       | 40246743   | Scrum Master     |
| Mustafa Aboabdullah | 40199998   | Database Manager |

Let's take a deeper look into each individual's role and background:

- **Adam Chami (Team Leader)**: Adam is a Software Engineering student and has a previous experince in managing projects in other courses such as COMP 249 and has experience in react and django which will help him ensure the proper development of the project. As the team leader, Adam's goal will be to decide the team's objectives and ensure that the development of the project is properly advancing. The project manager will collaborate with everyone on the team in order to help solve any arising issues and will assign user points to each user story based on the customer's requirements.
- **Adrian Nico Salvado (QA)**: Adrian is a Computer Engineering student with past experience in node, react and java script which will help in his role as a QA engineer. The QA engineer's job is to work on both the front end and back end as he has knowledge of how both parts of the site work. Adrian will ensure that both the front-end and back-end are well connected so that the complete website works properly. He will have to collaborate with the front-end and back-end developers in order to assist them in the aspects they're working on while also learning and applying new technologies that might come in play later on in the project.
- **Mahmoud Mohamed (Design Master)**: Mahmoud is a Software Engineering student with a past experice in front end designing websites. Mahmoud has done website design before for both personal and work projects. The job of the desgin master is to work on implementing the desired design for the site all the while taking care of the actions that occur when users interact with the many aspects of the site. The main technologies we plan on using to work on the front end for now are ReactJS and Bootstrap, which are frameworks for JavaScript and CSS. If need be, we will use Material UI, a React library, to enhance the site's functionality.
- **Mickel Samuel (Scrum Master)**: Mickel is a Computer Engineering student with background in C++ and Java. The Scrum master will be the one to organize all meetings that happen during the timeline of the project. He will ensure that the meetings happen whenever everyone is able, and he will also take care of writing down the information that is mentioned throughout the meeting, taking notes of future goals, potential adjustments, and more.
- **Mustafa Aboabdullah (Database Manager)**: Mustafa is a Computer Engineering student and has background in PHP, C++ and Java. Mustafa will be the one in charge of developing and maintaining the website's database. He will be in charge of storing all date such as user's accounts and listings as well as all other data on the website's front and back end.

## **Project Approach and Technology**

As of now, our team has agreed on an idea on how the application will be built in general. We've organized the main components that we wish to produce and that'll
ultimately form our complete site. Here's a list of the current functionalities or components that we have in mind:

1. <ins>Initial page:</ins> The first page that appears on the user's screen will be quite simple, as its objective will be to determine what the user wishes to use the site for. There'll be 3 different options for the user to click on: a) I am a buyer/renter b) I am a broker c) I am a system administrator.
2. <ins>Login Page:</ins> On our site, you'll be able to create an account and connect to it, so we'll have a login system. Once the user clicks on one of the three buttons, he'll be directed to a login page. Its format'll be the same for all types of accounts.
3. <ins>Main Pages:</ins> For each type of account, the site's design/format will be relatively similar, however the functionality will be different. For brokers, buyers and renters, the houses will be displayed in the same way in the home page, but the commands that'll let the user will be able to do will differ by account. Here's a general idea of what each user will be able to do. Note that this is a summarized description:

- Buyers/renters will be able to view a house or request a visit. Buyers will also be able to use a mortgage calculator
- Brokers will be able to view the houses they're selling or the ones other brokers are selling. For the ones they're selling, they can add or remove them whenever, thus removing them from the database. But, they could also throw in some offers to the other broker's positngs.
- System administrators will have a main screen with the list of brokers. They could go to their account page and see the postings they've put online.  
  Furthermore, they'll be able to remove their accounts or even add new accounts if desired. That'd be removing the account from the database completely.

1. <ins>Account pages:</ins> When clicking on a user, we'll be able to see his account. Buyers or renters won't have too much on theirs, only their name and a description if they wish. They could also choose an image for their profile. Same thing for system administrators. However, for brokers, they'll have the same aspects, but anyone'll be able to see what houses they've posted for selling.

Here's a description of every technology that we will eventually be using and why we've chosen it for the sake of our project.

### Frontend

- <ins>React:</ins> React is a widely used JavaScript framework. Many sites are built using React as it simplifies the process of creating user interfaces while it also helps in developing components which would usually be way harder to implement with JavaScript alone. Furthermore, the great thing about React is that it allows the programmer to easily reuse these previously created components. Overall, this frameworks enhances efficiency and simplifies development of websites. For example, React can be used for autocompletion in input fields.
  A lot of our members know JavaSript, and one of the temamates already had knowledge on React while two of us were currently learning about this framework, making
  it the perfect tool to use for the front-end of our website

- <ins>Bootstrap:</ins> Bootstrap is a CSS framework that heavily simplifies the design process of the website. In fact, Bootstrap provides us with many predefined CSS classes that can simply be applied to our site's elements which we don't have to code from beginning to end. This allows us to more easily style our website all the while keeping it responsive and efficient. As our goal in this team is to deliver the best possible product as fast as we're able, this framework will be of great help to us. As an example, with Bootstrap, we can easily make a navigation bar as compared to making it from start to finish with CSS.
  As all of us on the team know CSS, we agreed that we would learn about Bootstrap since it'd enhance the design all the while being easier to use than CSS.

### Backend

- <ins>NodeJS:</ins> This framework allows us to run JavaScript on the server side, which we don't usually do when we normally use JavaScript. This is very importnat as this makes it possible to create a full-stack application, since we can work on back-end aspects using it. NodeJS will ease the communication between the server and the client, so it's often used.
  Furthermore, a lot of us in the team were willing to learn this back-end JavaScript framework as we had previous experience with JavaScript and found it
  to be potentially useful to know.

- <ins>Django:</ins> Django is a web framework for Python, and it's very commonly used to make websites. Similarly to the others, it enhances efficiency as it provides many useful built-in components. Django, for example, simplifies the process of user authentification, which we will have in our site as each user will be able to create an account which they can connect to with a password and email. It can however also be used for frontend, but we won't in the context of our project as the front-end frameworks we currently have are good enough to complete it. The Django REST frameowrk is used to connect the back-end to the front-end React code for example using API endpoints, for which React will send HTTP requests in order to access.
  Many of us also have knowledge in Python, and two of the team's members were currently learning this framework, so we also found it to be a good tool to use.

<!--
## List of questions:
* How do we divide our files for the gitHub
* The meeting minutes, how many times should we ideally meet a week
* Is the info we put enough
-->
