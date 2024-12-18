# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img src="./screenshots/Newsletter Signup Mobile.jpeg" alt="Mobile Screenshot" title="Mobile Screenshot" height="400">
<img src="./screenshots/Newsletter Signup Desktop.jpeg" alt="Desktop Screenshot" title="Desktop Screenshot" height="400">
<img src="./screenshots/Newsletter Signup Confirmation.jpeg" alt="Confirmation Screenshot" title="Confirmation Screenshot" height="400">

### Links

- Solution URL: [https://github.com/tomwinskell/react-newsletter-signup](https://github.com/tomwinskell/react-newsletter-signup)
- Live Site URL: [https://tomwinskell.github.io/react-newsletter-signup](https://tomwinskell.github.io/react-newsletter-signup)

## My process

### Built with

- [Vite](https://vitejs.dev)
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles
- [https://www.typescriptlang.org](https://www.typescriptlang.org)
- Mobile-first workflow
- CSS Grid

### What I learned

- **React**: Practiced using `useState` and lifting state with callback functions to manage shared data between components.  
- **TypeScript**: Enhanced understanding by working with interfaces to define prop types and ensure type safety.  
- **Regex**: Used regular expressions to validate email inputs.  
- **Styled Components**: Explored CSS-in-JS by creating styled components, implementing global styles (CSS reset, color variables, fonts), and passing props for conditional styling.
- **Responsive Design**: Utilized a custom hook (not written by me) to handle media queries for rendering images based on screen size. Created a single source of truth for media query breakpoints in a separate file, shared across components.  

### Useful resources

- [Handle Media Query in React with Hooks](https://dev.to/salimzade/handle-media-query-in-react-with-hooks-3cp3) - This helped me with a custom hook for handling a media query in React to render different URLs based on screen size.

## Author

- Frontend Mentor - [@tomwinskell](https://www.frontendmentor.io/profile/tomwinskell)
- [LinkedIn](https://www.linkedin.com/in/tomwinskell) - Professional network and career connections.
- [Notion](https://tomwinskell.notion.site) - Personal workspace and knowledge management.
- [GitHub](https://github.com/tomwinskell) - Check out my projects and code repositories.
