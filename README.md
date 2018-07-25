# Custom-Publishing-System-React-app  
**Version 1.0.0**\
Publish blogs and view them
Requests are cached in session storage to limit the use of the API
## What is this ?
A personal project and assignment given by hiring company, built with React and Google 0-Auth API, to publish and view blog post.
### [Live Demo](https://customblogsys-anit.firebaseapp.com/)
---
## Assignment Problem Statement
Design and develop a custom publishing system that comprises of the following features:
1. Login and authentication system
2. Dashboard view that lists all published posts and allows writing of posts
3. Blog view that displays content

Login System
-------------
This enables a user to login to a dashboard. The login is enforced using Fb or Google OAuth APIs. On login, the user is redirected to the main list view of the dashboard.

Dashboard
----------
The main view is a list of all published posts with Title, time of creation and URL as columns.

Blog View
----------
This shows all the written content in a chronological order. On clicking each link, it opens full article.

---

![](Screenshots/Screenshot_2018-07-15%20React%20App.png)
![](Screenshots/Screenshot_2018-07-15%20React%20App(1).png)
![](Screenshots/Screenshot_2018-07-15%20React%20App(2).png)
![](Screenshots/Screenshot_2018-07-15%20React%20App.jpg)
## Libraries and tools
- React
- React Router
- SweetAlert
- Google o-Auth API
- Axios
- And many more..
## Install
Install all required depencencies by following command \
**npm i** \
Add Google Client ID \
you can generate one in [Google API Console](https://console.developers.google.com/apis/credentials)\
Add your Google Client ID in Welcome.js file
## Available Scripts
In the project directory, you can run **npm start** \
Run the app in the development mode.\
Open [Localhost](http://localhost:3000) to view it in the browser.

---
#### @ Anit Kumar, 2018  :blush:
