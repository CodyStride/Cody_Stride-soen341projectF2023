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


1. <ins>Login Page:</ins> On our site, you'll be able to create an account and connect to it, so we'll have a login system. The login page format will be the same for the users, and they'll also have the choice to register to the site, therefore creating an account.
2. <ins>Main Pages:</ins> For each type of account, the site's design/format will be relatively similar, however the functionality will be different. For brokers, buyers and renters, the houses will be displayed in the same way in the home page, but the commands that'll let the user will be able to do will differ by account. Here's a general idea of what each user will be able to do. Note that this is a summarized description:

- Buyers/renters will be able to view a house or request a visit. Buyers will also be able to use a mortgage calculator
- Brokers will be able to view the houses they're selling or the ones other brokers are selling. For the ones they're selling, they can add or remove them whenever, thus removing them from the database. But, they could also throw in some offers to the other broker's positngs.
- System administrators will have a main screen with the list of brokers. They could go to their account page and see the postings they've put online.  
  Furthermore, they'll be able to remove their accounts or even add new accounts if desired. That'd be removing the account from the database completely.



Here's a description of every technology that we will eventually be using and why we've chosen it for the sake of our project.

### NextJS
NextJS is a full-stack React framework and that was the language we’d mainly used in the code for our project. Fortunately, it’s way simpler to use than many of the other tools that we could’ve used to build this website. In particular, the framework facilitates routing and even handles server side rendering. Furthermore, the developer experience for whoever works with NextJS is usually positive. In fact, with such a big community, it is easy to find helpful discussions online about issues we’d face. Additionally, the documentation provided is more than enough to keep you in control and to always help understand what you’re doing when coding with this tool. Earlier in our programming journey, some of us on the team had worked with React and NextJS, so we managed to help out the rest of the team who were relatively inexperienced.
Now, we could’ve simply stuck to React, or we could’ve used another React framework such as Gatsby, but ultimately, we didn’t. We stuck to NextJS because our project’s focus was meant to be on delivering proper and functional features rather than focusing on learning how to code. NextJS was simpler than React while also being more efficient, which makes for faster results. As for Gatsby, we’d initially considered the option, but with how large NextJs is, we didn’t feel like using it would be a great idea. Considering none of us had ever looked into it before, and that NextJS was better suited for our project, it was clearly the better choice. In fact, both server side rendering and static site generation are handled in NextJS, which was more useful in our case as Gatsby didn’t really support the former.

### PocketBase
PocketBase is a relatively new technology. In fact, it was established in 2023. Although it is relatively risky to use those types of tools, it’s definitely helpful when it works well. PocketBase is a real-time database, so it quickly receives and modifies data that it takes in. It additionally offers great tools which were greatly useful for the scope of our project. For example, we used the built in authentication tool to give users different types of accounts, a process which would’ve been otherwise very complicated to implement.
When compared to traditional databases such as SQL (MySQL, PostgreSQL, etc.), PocketBase is way more simple to integrate into the project and eventually use. As mentioned earlier, the goal of our project is to deliver the best results at the right time, so whatever tool there is which helps us provide our customers with what they want, we’ll use. Furthermore, the team had overall minimal experience with databases, and specifically on integration of data from these databases into a web application. By learning PocketBase, the process is heavily simplified. In fact, there isn’t even any setup involved with APIs.
 
### Mantine UI
Mantine UI is a React components library. As PocketBase, it is relatively modern, but absolutely efficient. Many times in the project, instead of coding complicated areas of our site by ourselves and allocating much time to rather mundane tasks involving design for example, we utilized Mantine’s available components. Another great thing about these components is that they’re very well designed. Using them added charming touches to our website’s overall look, thus improving the user interface and even experience. Lastly, this library even ensures that our site remains responsive, another responsibility which would have otherwise been unnecessarily time consuming.
There are many other React component libraries out there, and they’re all really efficient and convenient to use. We were planning on using Chakra UI, but Mantine simply topped it every time we were looking for a certain component. We found the designs to be cleaner and fit our website’s design better, while we’d also read from many users that Mantine UI was more simple to integrate into your project. As our primary aim is simplicity, efficiency and ease of use, we utilized Mantine rather than all the other tools available

