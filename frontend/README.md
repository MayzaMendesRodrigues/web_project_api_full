
<img width="907" height="557" alt="Capa" src="https://github.com/user-attachments/assets/461a0a86-fc57-469c-8178-1e251bb9a86c" />

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![Fetch API](https://img.shields.io/badge/Fetch_API-007ACC?style=for-the-badge&logo=fetch&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)



# Around US - Authentication and Authorization

---

## About the Project
**Around US** is a React application that implements **user registration and authentication**, allowing only logged-in users to access protected content. This project demonstrates best practices in authentication, JWT token management, and protected routes.

---

## Project Objectives
* Implement a complete authentication system.
* Create protected routes with automatic redirection.
* Develop registration and login components with user feedback.
* Integrate with an authentication API.
* Manage JWT tokens in `localStorage`.
* Implement automatic login verification upon page load.

---

## Features

### Authentication
* User Registration (`/signup`)
* User Login (`/signin`)
* Logout with data cleanup
* Automatic JWT token verification upon application start

### Protected Routes
* Automatic redirection to login if not authenticated
* Restricted access to the main route (`/`)
* Smart navigation after successful authentication

### User Interface
* Dynamic Header, adapting menus for logged-in and logged-out users
* Informative Tooltips for user action feedback
* Responsive Design (desktop and mobile)
* Reusable form popups for login and registration

---

## Technologies Used
* **React** (Hooks, Context API)
* **React Router** (navigation and protected routes)
* **JavaScript ES6+**
* **CSS3** (Flexbox, Grid, Media Queries)
* **JWT** (JSON Web Tokens)
* **Fetch API** (HTTP requests)
* **localStorage** (data persistence)

---

## Project Structure
The project follows a standard React application structure:

```

  - web\_project\_around\_auth/
      - public/
          - index.html
          - favicon.ico
      - src/
          - components/
              - App.js
              - Header.js
              - Main.js
              - Login.js
              - Register.js
              - ProtectedRoute.js
              - InfoTooltip.js
              - PopupWithForm.js
              - ImagePopup.js
              - Card.js
          - utils/
              - api.js
              - auth.js
          - contexts/
              - CurrentUserContext.js
          - images/
          - blocks/
              - header/
              - login/
              - register/
              - tooltip/
          - index.css
          - index.js
      - package.json
      - README.md

<!-- end list -->

````

---

## Installation and Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/seu-usuario/web_project_around_auth.git](https://github.com/seu-usuario/web_project_around_auth.git)
    cd web_project_around_auth
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the project**
    ```bash
    npm start
    ```

---

## How It Works

1.  A user **registers** with an email and password.
2.  Upon **login**, the server returns a **JWT token**, which is stored in `localStorage`.
3.  Protected routes check for the token's presence and validity before granting access.
4.  The user can **log out**, which clears the token and redirects them to the login screen.
5.  The application maintains an **active session** by automatically verifying the token upon page load.

---

## Future Improvements

Simple enhancements to evolve the project:

1.  **Password Encryption**
    * Use **bcrypt** in the backend to securely store passwords.

2.  **Migrate to TypeScript**
    * Convert the project from JavaScript to **TypeScript** for better type safety and scalability.

3.  **Automated Testing with Jest**
    * Implement **unit and integration tests** with Jest to ensure code stability and reliability.



