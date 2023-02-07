# Full-stack MERN Quiz Application

## Authors

[Steffy Johnson](https://github.com/Steff4evr)

[Thi Nguyen](https://github.com/Thi-Tracey-Nguyen)

[Sian Steel](https://github.com/Essteel)

---

## Application and Project Repositories

- [Deployed site - Netlify](https://the-mern-quiz-app.netlify.app)
- [Planning Documentation](https://github.com/MERN-Quiz-App/Quiz-App-Docs)
- [Client repository - React App](https://github.com/MERN-Quiz-App/Quiz-App-Client)
- [Server repository - Express App](https://github.com/MERN-Quiz-App/Quiz-App-Server)

---

## How to Use the App

To use the App head to the deployed site to take quizzes, make quizzes and have fun!

To run the app locally please follow these steps:

### Requirements

- NodeJS version >19

- A [MongoDB](https://www.mongodb.com/cloud/atlas/register) Atlas account to host the database.

### Setup Instructions

1. Clone both the client and server repositories to separate folders on your computer using the clone button in GitHub or the installation codes below.
   
    Server:

   ```git clone https://github.com/MERN-Quiz-App/Quiz-App-Server.git ```

    Client:

   ```git clone https://github.com/MERN-Quiz-App/Quiz-App-Client.git```

2. Either in the terminal within the quiz-app and quiz-app-api folders of the client and server projects respectively, run the code ```npm install``` to add dependant libraries to the project.
3. In the server project add the link to your MongoDB Atlas server to a .env folder, following the format of the .env.sample file.
4. In the client project replace any urls within fetch requests to whichever local port you will run that project on e.g. ```http://localhost:5173/quizzes```.
5. Seed the database by running ```npm run seed``` within the server project.
6. Ensure both apps are running by using the command ```npm start```.
7. Go to your local host address within a browser and have fun!

---

## API Endpoints

### Category

<u>GET</u>

/  
Gets all categories

/:id  
Gets one category by its id

<u>POST</u>

/  
Posts a newly created category to the DB

<u>DELETE</u>

/:id  
Deletes one category by its id

<u>PUT</u>

/:id  
Updates one category by its id

#

### Question

<u>GET</u>

/  
Gets all questions

/:id  
Gets one question by its id

<u>POST</u>

/  
Post a new question to the DB

<u>DELETE</u>

/:id  
Deletes a question by its id

<u>PUT</u>

/:id  
Deletes one question by its id

#

### Quiz

<u>GET</u>

/  
Gets all quizzes

/:id  
Gets one quiz by its id

<u>POST</u>

/  
Post a new quiz to the DB

<u>DELETE</u>

/:id  
Deletes a quiz by its id

<u>PUT</u>

/:id  
Deletes one quiz by its id

---

## Resources

- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [Unsplash](https://unsplash.com/)

#

### Libraries

<u>CLIENT</u>

- <strong>install:</strong> version 0.13.0
- <strong>npm:</strong> 9.4.1
- <strong>react:</strong> version 18.2.0
- <strong>react-bootstrap:</strong> version 2.7.0
- <strong>react-dom:</strong> version 18.2.0
- <strong>react-external-link:</strong> version 2.0.1
- <strong>react-router-dom:</strong> version 6.7.0

Development dependencies:

- <strong>@testing-library/jest-dom:</strong> ^5.16.5
- <strong>@testing-library/react:</strong> 13.4.0
- <strong>@testing-library/react-hooks:</strong> 8.0.1
- <strong>@testing-library/user-event:</strong> 14.4.3
- <strong>@types/react:</strong> version 18.0.26
- <strong>@types/react-dom:</strong> version 18.0.9
- <strong>@vitejs/plugin-react:</strong> version 3.0.0
- <strong>vite:</strong> 4.0.0

#

<u>SERVER</u>

- <strong>cors:</strong> version 2.8.5
- <strong>dotenv:</strong> version 16.0.3
- <strong>express:</strong> version 4.18.2
- <strong>mongoose:</strong> version 6.8.4

Development dependencies:

- <strong>jest:</strong> 29.3.1
- <strong>supertest:</strong> 6.3.3

---

## Project Management

We worked using the principles of Agile methodology, setting goals within short sprint cycles and regularly reviewing our progress and any blockers. Code was managed using a style similar to trunk-based development, with each member working on a feature within a branch separate to the main branch, then merging to main once the feature was working, or at least not causing a big error. This kept the main branch relatively bug free, whilst allowing us to make regular commits to pull down and help with features the other team members were working on.

Each day via Discord we would check in about our progress with our task from the previous day, provide details of any blockers so that the rest of the team may offer insight and update the team on our tasks for the current day. We held regular calls via Discord to discuss issues and provide more detailed updates and assistance to each other. We always had a call at the start of each new sprint to review whether we had made the progress we expected and to plan which tasks were to be undertaken during the next sprint.

Decisions and notes from the meetings were recorded within Trello and Google Docs which were stored within a Trello card for each sprint. Tasks established in meetings were recorded within a Trello card, assigned to at least one team member, given a difficulty level, completion data and checklist of to do items. When changes were made to the code relating to the task, the GIT commit details were recorded in a comment.

Tasks were delegated according to preference, skill set and capacity, taking into account individuals current home and health situation. We also ensured that everyone had the opportunity to work on both the front and back end to get experience with both. This also allowed us to further establish where our strengths and preferences lay. Sian is interested in design and user experience, and therefore suited to the creation of components and managing control flow within the front end. Thi is an all-rounder, able to pivot quickly to solve problems and create features within both the front and back end. Steffy has a passion for styling, using CSS and Bootstrap to make the application look just like the wireframes.

The Trello board can be viewed [here](https://trello.com/b/8A98I9sW/mern-quiz-app).

<details>

<summary><strong>Trello screenshots</strong></summary>

![23-01-23-Initial-App-Setup-SPRINT3](https://user-images.githubusercontent.com/110761232/217202601-75700fdf-eb0a-450f-8569-5904e3d3f166.png)
![24-01-23-Beginning-SPRINT3](https://user-images.githubusercontent.com/110761232/217202653-8c21313d-e068-430e-8e50-d9fa35fa3e23.png)
![26-01-23-Midway-through-SPRINT3](https://user-images.githubusercontent.com/110761232/217202692-556de5b6-555a-4e9e-9c9b-ca5cc185277a.png)
![27-01-23-End-of-SPRINT3](https://user-images.githubusercontent.com/110761232/217202715-3aef8343-dd57-4ecb-beb3-e99d1a711b33.png)
![29-01-23-Partway-through-SPRINT4](https://user-images.githubusercontent.com/110761232/217202741-d9aa2b21-d77e-4d3b-bb23-65995c1d2a2c.png)
![01-02-23-End-of-SPRINT4](https://user-images.githubusercontent.com/110761232/217202766-455df5ff-9b21-4c5c-bd07-77b6fe1183dc.png)
![03-02-23-Start-of-SPRINT5](https://user-images.githubusercontent.com/110761232/217202793-be5b1fbc-f646-4b91-bead-9fec6b0b3897.png)
![04-02-23-Partway-through-SPRINT5](https://user-images.githubusercontent.com/110761232/217202821-102eac71-add1-4b4c-ad83-c9bb5002aeb4.png)
![06-02-23-Start-SPRINT6](https://user-images.githubusercontent.com/110761232/217202840-651f66d0-b313-43df-add5-9082b8a25415.png)
![07-02-23-Card-example-SPRINT6](https://user-images.githubusercontent.com/110761232/217202861-47575de9-8bd6-48ec-8495-c86680aa37b5.png)


</details>

---

## The final application

We were able to implement all MVP features and functionalities listed in the planning documentation. Although we had to make some changes to the way certain features were implemented due to complexity.

On the results page after a user has completed a quiz, laying out the questions and answers as planned was difficult due to way the data was captured and stored. Therefore rather than having the question and correct answers listed together, they are listed separately, with the user able to reference which ones were incorrect by question number.

The decision to not allow users to upload their own images was made when we realised images could not be stored within MongoDB Atlas without badly affecting the performance of the application. Therefore this issue was solved by having 12 images users could choose between to represent their quiz, and changing questions to just be text based.

---

## Testing

Testing was conducted both during development and once the application was completed to ensure that problems were caught and fixed throughout development. Both manual and automated testing were performed.

### Client

Manual testing of the sites functionality were checked by using the site and checking the features worked as expected.

<details>

<summary><strong>Website screenshots</strong></summary>

</details>
<br/>

Automated unit tests were created to test individual functions and features were working as expected. They were written and run using vitest.

<details>

<summary><strong>Unit test log screenshots</strong></summary>

</details>
<br/>

Automated integration tests were created to check the application was functioning as a whole. These were also written and run using vitest.

<details>

<summary><strong>Integration test log screenshots</strong></summary>

</details>
<br/>

### Server

Manual testing of routes and CRUD operations were checked via Postman.

<details>

<summary><strong>Postman screenshots</strong></summary>

</details>
<br/>

Automated unit tests were created to check the routes and CRUD operations were functioning as expected. These were written and run using jest and supertest.

<details>

<summary><strong>Unit test log screenshots</strong></summary>

</details>
<br/>

Automated integration tests were created to check the application was functioning as a whole. These were also written and run using jest and supertest.

<details>

<summary><strong>Integration test log screenshots</strong></summary>

</details>
