# Nostra e-commerce store

Nostra an under development e-commerce Full-Stack web application Built with React/Nextjs for the client and server side logic, Mongodb for the database and styled with Scss.

## Description

This is my first project to work on independently and is meant to put everything i have learnt so far to a good use and challenge my problem solving, creativity and looking up information skills to their limits. I picked up a random design on dribble and decided to animate it. [Design link](https://dribbble.com/shots/20743352-Fashion-E-commerce-Landing-Page)

## Features

- Responsive & Attractive on all screen sizes.

- Implemented smooth subtle animations & effects to enhance user experience.

- Followed SEO best practices by defining meta data through Nextjs metadata API & applying accurate alt attributes to every image.

- Used high quality images applied best Nextjs practices using next image component.

- Used react hooks for state manipulation.

- Built customized image swipers with React swiper, scss & vanilla js.

- Implemented authentication server side logic using next auth covering both providers and credentials methods.

- Designed mongoose schema model for users and deployed the database to a Mongodb Atlas cluster.

- Implemented client side form validations using Formik & Yup covering most edge cases with custom pop-up messages showing on the client side to guide users.

- Implemented loading spinners between client requests to server response with custom & informational messages on server response for enhanced user experience.

- Implemented server side data validation covering most edge cases, error handling and informational response messages which are displayed to the user on the client side.

- Implemented email verification functionality using Oauth2, nodemailer, and JWT Additionally walked the extra mile and used customized attractive looking email templates for better user experience.

- Implemented reset password functionality Oauth 2, nodemailer, and JWT and applied server side validation to ensure the user doesn't insert wrong credentials.

- Hosted default user image on amazon S3 cloud storage.

## What i learned

### Development wise

- Styling tricks such as creating custom animated elements with css before and after pseudo classes, also learnt how to manipulate their properties with javaScript, since pseudo classes are not part of the DOM we have to assign their properties dynamic css `--var()` values which are available to be manipulated by JavaScript.

- Professionally style React swiper carousels to perfectly match the design, additionally how to use more complex event listeners to create custom swiper that works on both desktop and mobile devices.

- Creating complex forms with strict client side validation using Formik and Yup libraries, also learned what are regexs and how to use them to validate user input.

- How to switch between server and client rendering in Nextjs depending on the component's purpose.

- How to use Nextjs api endpoints.

- Error handling and sending accurate error responses dependent on the met edge case.

- How to implement next auth providers and credentials authentication.

- How to create jwts and how to use them to create and validate verification links on the server.

- Using Oauth 2, nodemailer, free email templates services to send customized verification emails.

### Production wise

- In development cycle React is not case sensitive when it comes to environment variables. example: if you have an env var like this one `NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID  = foobar` and it was used like this `clientId: process.env.NEXT_PUBLIC_Google_AUTH_CLIENT_ID` notice how **bold**GOOGLE casing is obviously different in both snippets, this works completely fine in dev mode but it can make you question your life in production.

- Always use async await when calling functions that communicates with an external api, even if it is not needed and works fine on your local host, it is another story in production. example: this function located in the utils directory `const mail = sendEmail(args)` will once called in the server dev mode it worked alright bit in prod `await` must be used.

- `scale()` CSS property is not reliable on older browser versions, `Transform: scale()` is more safe and has better support.

## Live preview.

https://nostra-shop.netlify.app/

## Installation

Clone this repository

$ git clone

### Install dependencies

$ npm install

### Run the app

$ npx next dev
