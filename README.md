

## Summary

This project was built using React in the frontend and Rails in the backend. I decided to decouple the two and so both the frontend and backend are two separate apps.

### Challenges

#### User Session

I found the greatest challenge was deciding how to divide the session between two different users on the app. Since authentication wasn't mentioned I decided to try and tackle this without having a user. After great deliberation, I chose to go the route of initializing a `Session.new instance model` by clicking a button which instantiates a `Session.new` and stores the `@session.id` in Local Storage. I chose this since I'm not very versed in JWT tokens and sessions between Rails ans React, and while running out of time I decided to go the route of localStorage.

#### Bot Replies

It took me a while to wrap my head around how to design the replies. I think I overcomplicated this section quite a bit. In the end, create a `Reply` that will respond to each `Message` given by the User. The 1st `Message` receives two `Replies`, A salutation and available language. Every `Message` thereafter will receive a **coming soon** `Reply`



### Technology

As mentioned before, this was done in a decoupled Rails and React project. I am familiar with doing it with `rails new --webpack=react` as a monolithic project, and so I wanted to also learn and grow comfortable with doing it in a decoupled manner. I believe the technologies work well together as it allows for a more dynamic frontend with a secure backend API (although I struggled with this and sessions). managing state I found quite useful this time around, so I'm happy I built in React. I decided to write everything in Hooks as it is a good app to practice it wit, so that was quite fun to dive into hooks and learn their lifecycles :)

For the Language detection I used [WhatLanguage](https://github.com/peterc/whatlanguage) ruby gem. I decided to handle this server side as it seemed the most easy solution at the time. After more testing, I noticed that it is fairly finnicky if you only type in one word for the language dection.


## 1.Getting Started

  Since this is a decoupled app, you will need to run 2 servers. One for Rails and one for React.

### Local

  **backend**

1. To run the Rails server, you can jump into the
`/backend` directory:

```bash
  cd code-challenge-lyttco/backend/
```

2. Bundle install to retrieve gems

 ```bash
  bundle install
```

3. start the rails server in the console:

```bash
  rails server
```

2. you can view some of the routes by copy/pasting into the browser
  Example: `localhost:3000/api/v1/sessions/:id/replies`


**frontend**

1. To run the React frontend, jump into the `/frontend` directory

```bash
cd code-challenge-lyttco/frontend/
```


2. yarn install to download all yarn dependencies

```bash
  yarn install
```

3. start the frontend server

```bash
  yarn start
```

4.  The port made available for the frontend is `7000`. To interact with the API and project, open up in the browser:

`localhost:7000`


5. You should See a `Join Chat` button.

## 2. How it Works


1. Click on the `Join Chat` button

2. Type in a message (More than 1 word) to send to the API (chatbot) in the Input given
    * If the message is not in **German, English, or Spanish**, the API will respond with an alert notifying you that the bot doesn't handle other languages.
    * If the message is correct, the bot should reply with a salutation and a confirmation of which languages it can speak.

3. With each Reply from the bot, a `unique identifier` number will be present just below the reply. This number is used to find the corresponding metadata of the user's message sent to the bot.
    * Click the number, and the message details should append into the panel on the right hand side.

    * The metadata for the message should have present:

        `Identifier Number, Detected language, and TimeStamp`

4. If you exit out of the browser and come back, the messages should still appear, and your session should be persisted.


## 3. Testing

Rspec was the testing framework used for Rails. Tests are located under `app/spec/`


1. To Run tests go to the `/backend` directory.

```bash
cd code-challenge-lyttco/backend/
```

2. Run this command in the console:

```bash
rspec spec
```




