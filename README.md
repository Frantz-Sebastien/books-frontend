# Book Tracking App

Welcome to the Book Tracking App, your digital library management system that not only helps you keep track of books you've read, want to read, or are currently reading, but also offers a treasure trove of literary insights, reviews, and recommendations. This guide will walk you through all the features of both the frontend and backend, giving you the tools you need to make the most of your reading journey.

## Project Overview

The Book Tracking App is the ultimate solution for bibliophiles, casual readers, and everyone in between. Designed with the modern reader in mind, this application serves as your personal bookshelf in the cloud. It allows you to catalog your reading history, leave book review, and discover new books in an intuitive and visually appealing interface.

## Features

- Browse books.
- View book information.
- View book prices 
- Leave a comment on books.
- Update book details
- Add new books
- Rate the book

## Repositories

- **Backend**: [Book Tracking App Backend](https://github.com/Frantz-Sebastien/books-frontend)

- **Frontend**: [Book Tracking App Frontend](https://github.com/Frantz-Sebastien/books-backend)

## Setting Up the Development Environment

### Frontend Setup

Clone the repository:

git clone [https://github.com/Frantz-Sebastien/books-frontend]

# Packages to install for Cities Frontend app
npm install react-router-dom
npm install axios
npm install bootstrap

### Backend Setup

Clone the repository:

git clone [https://github.com/Frantz-Sebastien/books-backend]

# Packages to install for Cities backend  app
npm install express 
npm install dotenv 
npm install cors 
npm install pg-promise

# Resetting and/or updating the database
psql -U postgres -f db/schema.sql
psql -U postgres -f db/seed.sql

## Development Commands

Once you're set up, here are some commands you can use:

# Running the App : 

In the project directory, use the following command to run the app in development mode:

```npm start```

Visit http://localhost:3000 in your browser to view the app. The page will reload automatically when you make changes, and you'll be able to see lint errors in the console.

# Deployment
[Provide details on how to deploy your app. Any platforms you recommend? Steps?]

# Contributor
[Frantz-Sebastien Mathias(https://github.com/Frantz-Sebastien)], 

# Feedback
Feel free to file an issue or send pull requests for improvements. Your feedback is much appreciated!

