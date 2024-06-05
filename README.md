# Little Lemon Restaurant Website

## Project Description

This project is a React-based website for a fictional restaurant called "Little Lemon." The website allows users to view the restaurant's menu, get information about the restaurant, and reserve a table.

## Project Structure

The project is structured as follows:
```
project-root
├── src
│   ├── assets
│   │   ├── Logo.svg
│   │   ├── footer-logo.png
│   │   └── ... (other images)
│   ├── components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── Home.js
│   │   ├── Menu.js
│   │   └── Reservation.js
│   ├── pages
│   │   └── Reservation.js
│   ├── App.js
│   ├── index.js
│   ├── App.css
│   └── ...
├── public
│   ├── index.html
│   └── ...
├── jest.config.js
├── jest.setup.js
├── package.json
└── README.md
```

- **`src/assets`**: Contains images used throughout the application.
- **`src/components`**: Contains reusable UI components like Navbar, Footer, and Menu.
- **`src/pages`**: Contains page components like Home and Reservation.
- **`src/App.js`**: Main component rendering routes and application structure.
- **`src/index.js`**: Entry point for React rendering.
- **`public`**: Contains static files and `index.html`.

## Technologies Used

- **React**: Used as the frontend library to build the user interface.
- **Chakra UI**: Used for styling and layout components.
- **React Router**: Used for routing between different pages.
- **Formik**: Used for managing form state and validation.
- **Jest and React Testing Library**: Used for testing components and functionality.

## Features

1. **Home Page**:
 - Displays restaurant information and popular dishes.
 - Allows navigation to the menu and reservation pages.

2. **Menu Page**:
 - Displays various categories of dishes: main dishes, appetizers, and desserts.
 - Each dish includes an image, description, and price.

3. **Reservation Page**:
 - Allows users to reserve a table by filling out a form.
 - Includes form validation for required fields and email format.
 - Displays a success message upon successful reservation.

4. **Navbar and Footer**:
 - **Navbar**: Includes links to navigate between home, menu, and reservation pages.
 - **Footer**: Includes restaurant image, contact information, and social media links.

## How to Run

1. **Clone the repository**:
    
    `git clone https://github.com/Marssepan/Little-Lemon-Exam.git`

    `cd <repository-folder>`


1.  **Install dependencies**:

    `npm install`

2.  **Run the application**:

    `npm start`

3.  **Run tests**:

    `npm test`

Additional Notes
----------------

-   **Deployment**: This project is designed for learning and development purposes. Deployment platforms like Netlify or Vercel can be used for hosting.
-   **Local Development**: It runs on `localhost` for development (`http://localhost:3000` by default).

 Feel free to adjust the descriptions, paths, and other details based on your specific project setup and requirements. This Markdown file provides a structured overview of your project, its structure, features, technologies used, and how to run it.
