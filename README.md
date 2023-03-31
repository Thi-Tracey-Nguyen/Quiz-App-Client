# Overview
This app is an updated version of a group project which I was a part of during my study at Coder Academy.  

Version 2 deployed site: [Version 2](https://mern-quiz-app-v2.netlify.app/). 

Link to the group project: [Version 1](https://github.com/MERN-Quiz-App/Quiz-App-Client).

# Server
[Server](https://github.com/Thi-Tracey-Nguyen/Quiz-App-Server)

# Improvements
1. Better implement of CSS to create a more aesthetically pleasing appearance, including:
   * Card display with animation for each quiz in Home and All Quizzes page
   * Card display and 'next' button for each question in Taking A Quiz page
   * Question reviews are displayed as carousel in Result page
   
2. Implementation of authentication and role-based authorisation (JWT)
   * Ultilised useContext to manage user state across all app's component
   * Conditional rendering of nav bar to show username when the user is logged in
   * Non-admin users can only edit/delete quizzes that they created, admin user can edit/delete all quizzes
   
# Screenshots

Quiz Card  
![Quiz card](https://user-images.githubusercontent.com/103707253/223289670-8e12cd2a-1c9b-42a2-aaec-9bb067596aeb.png)

All Quizzes page
![All Quizzes page](https://user-images.githubusercontent.com/103707253/223290187-3ccd11fb-f9d1-4d12-beb7-ff08fcbcd5ff.png)

Take A Quiz page  
![Screen Shot 2023-03-07 at 11 50 54 am](https://user-images.githubusercontent.com/103707253/223290593-a5eca8d9-538e-42e0-aebc-b8c12dea62ac.png)

Result page with carousel
![Screen Shot 2023-03-07 at 11 51 56 am](https://user-images.githubusercontent.com/103707253/223290742-aa412351-2623-4993-992e-7d1d97d68067.png)

Login page  
![Screen Shot 2023-03-31 at 10 57 02 pm](https://user-images.githubusercontent.com/103707253/229113999-6ddcf82f-2301-47c9-9797-aa939f32d4a6.png)

Register page  
![Screen Shot 2023-03-31 at 10 58 32 pm](https://user-images.githubusercontent.com/103707253/229114151-0c2edbc9-86bd-42e9-89cf-c849764c1f2f.png)


Navbar view for guest users  
![Screen Shot 2023-03-31 at 10 50 54 pm](https://user-images.githubusercontent.com/103707253/229113033-dc2dffcc-f08c-499e-a3bb-710784777e41.png)

Navbar view for valid users  
![Screen Shot 2023-03-31 at 10 51 13 pm](https://user-images.githubusercontent.com/103707253/229113137-5fb3976a-7641-4467-8d87-55f4f4766467.png)

User portal  
![Screen Shot 2023-03-31 at 10 54 41 pm](https://user-images.githubusercontent.com/103707253/229113717-6479f491-ba74-4d54-8caf-c1a35effa83c.png)

