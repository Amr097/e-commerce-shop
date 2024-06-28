<h3 align="center">
   Nostra e-commerce store
</h3>

<p align="center"></p>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Amr097/e-commerce-shop">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Amr097/e-commerce-shop">

  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Amr097/e-commerce-shop">

  <img alt="GitHub issues" src="https://img.shields.io/github/issues/Amr097/e-commerce-shop">

  <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/52a12327-6ea4-4a38-ba1c-7befa180c1cb/deploy-status">
</p>

<p align="center">
  <a href="#-about-the-project">About The Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#-features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;
   <a href="#-what-i-learned">What I Leanred</a>&nbsp;&nbsp;&nbsp;|&nbsp;
  <a href="#-getting-started">Getting Started</a>
  
</p>

## 👨🏻‍💻 About the project

<p align="center">
  <button><a href="https://nostra-shop.netlify.app/"><img alt="Demo" src="https://amr-blogging-app.s3.eu-central-1.amazonaws.com/demo.webp" target="_blank"></img></a></button>
    
Nostra an under development e-commerce Full-Stack web application Built with React/Nextjs for the client and server side logic, Mongodb for the database and styled with Scss, This project is meant to put everything i have learnt so far to a good use and challenge my problem solving, creativity and looking up information skills to their limits. I picked up a random design on dribble and decided to animate it. [Design link](https://dribbble.com/shots/20743352-Fashion-E-commerce-Landing-Page).

## 🚀 Technologies

- [ [Next.js](), [NextAuth](), [MetaData API]() ]
- [ [React Hooks](), [React-Icons](), [React-Swiper](), [React-Spinners]() ]
- [Scss]()
- [[Formik](), [Yup]()]
- [[MongoDB](), [Mongoose](), [MongoDB Atlas]()]
- [Amazon S3]()
- [Stripo]()
- [Nodemailer]()
- [JWT]()
- [Postman]()

## 📜 Features

- Responsive & Attractive on all screen sizes.

- Implemented smooth subtle animations & effects to enhance user experience.

- Followed SEO best practices by defining meta data through Nextjs metadata API & applying accurate alt attributes to every image.

- Used high quality images applied best Nextjs practices using next/image component.

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

## ✍🏻 What I Learned

### Development wise

- Styling tricks such as creating custom animated elements with CSS ::before and ::after pseudo classes, also learnt how to manipulate their properties with javaScript, since pseudo classes are not part of the DOM we have to use CSS variables `--var()` as values for the poperty we wish to change and change it with JavaScript using `setProperty()` method.

- Styling React swiper carousels to match the design, additionally how to use the more complex event listeners to create custom swiper which listens and respond to drag and touch events.

- Creating more complex forms with strict client side validation using Formik and Yup libraries, also learned how to implement JavaScript RegExs to validate user input.

- How to switch between server and client rendering in Nextjs depending on the component's purpose.

- How to use Nextjs api endpoints.

- Error handling and sending accurate server side error responses determined by which edge case has been met by the request body data.

- How to implement next auth providers and credentials authentication.

- How to create jwts and how to use them to create and validate verification links on the server.

- Using Oauth 2, nodemailer, free email templates services to send customized verification emails.

- Unsupported CSS properties doesn't override supported CSS properties. example: `.foobar{height: 100vh; height:100dvh;}` if `height:100dvh;` is not supported the browser will ignore it and apply `height: 100vh;` normally.

### Production wise

- In development cycle Next.js applications does not complain about case senstivity when it comes to environment variables. example: if you have an env var like this one `NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID  = foobar` and it was used like this `clientId: process.env.NEXT_PUBLIC_Google_AUTH_CLIENT_ID` notice how **GOOGLE** casing is obviously different in both snippets, this works completely fine in dev mode but it can make you question your life in production.

- Always use async await when calling functions that communicates with an external api, even if it is not needed and works fine on your local host, it is another story in production. example: this function located in the utils directory `const mail = sendEmail(args)` will once called in the server dev mode it worked alright bit in prod `await` must be used.

## 🐢 Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/Amr097/e-commerce-shop.git

$ cd e-commerce-shop

```

**Follow the steps below**

```bash
# Install the dependencies
$ npm install

# Run the web app
$ npx next dev
```
