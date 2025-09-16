***

# Oasis Infobyte Internship Task  

### Simple Login Authentication System

***

## Project Overview

## [![Click Here](https://img.shields.io/badge/Click_Here-Live_App-00bfa6)](https://sachinpcd.github.io/OIBSIP_Web_Development_and_Designing_Level2_Task4/)
This project demonstrates a **login authentication system** created as part of the Oasis Infobyte "Web Development and Designing" internship task.  
Users can securely **register**, **login**, and access a protected dashboard section. The system is entirely client-side, leveraging HTML, CSS, and JavaScript for data validation, flow management, and secure local credential storage. It provides practical experience in user authentication methodologies and workflow.

***

## Technologies Used

- **HTML5**  
  Structural markup for all authentication, registration, and dashboard UI components.
- **CSS3**  
  Custom styles implemented for responsive layout, accessibility, input feedback, and clear form segmentation.
- **JavaScript (ES6+)**  
  Functional logic for user registration, login validation, credential management, session persistence, error handling, and page rendering.

***

## Key Features

- **User Registration**
  - Create new user accounts with client-side validation for name, email, and secure password.
  - Password matching confirmation.
- **User Login**
  - Sign in with validated credentials.
  - Proper feedback for invalid login attempts and missing account scenarios.
- **Secured Dashboard**
  - Only accessible upon successful login.
  - Personalized display of user details and analytics cards.
- **Session and State Management**
  - Persist login state and user info using browser local storage.
  - Seamless navigation between login, register, and dashboard screens.
- **Form Validation**
  - Real-time input checks for email format, password length and composition, and confirmation matching.
- **Logout Functionality**
  - Secure session termination and UI reset.

***

## Implementation Details

1. **HTML Structure**
   - Organized content into logical sections for login, registration, and secured dashboard views, making transitions clear and maintainable.

2. **JavaScript Workflow**
   - Comprehensive validation and state checks for user input.
   - Credential storage and session flag managed via localStorage for persistence.
   - Modular event handlers to handle registration, login, logout, and error UX, providing secure, predictable navigation.
   - Helper functions for email validation, initials extraction, and session checks.

3. **Page Access Control**
   - Ensured only authenticated users can view the secured page, with session enforcement and informative error messages for invalid access.

***

## What Was Learned

- **User Authentication Patterns**
  - Built seamless registration and login flows with clear form validation and error notices.
- **Session Persistence**
  - Utilized localStorage to manage user credentials, session flag, and session recovery.
- **Frontend Security Practices**
  - Implemented client-side validation techniques and best practices for handling sensitive data.
- **User Experience Improvements**
  - Created a coherent navigation flow and conditional rendering based on authentication state.
- **Practical JavaScript Development**
  - Developed modular components and utility functions, exercised DOM manipulation skills, and managed page events for a realistic use-case.

***

## Usage

- Open `index.html` in any browser to interact with the registration and login workflow.
- Successfully registered users can login and access a personalized and protected dashboard.
- All data remains client-side, and session persists until logout or browser refresh.

***

##  Author

**Internship Task by Sachin Gandu**  
Oasis Infobyte Web Development & Designing  
_Created to demonstrate core concepts of authentication, validation, state management, and frontend security for real-world applications._

***
