<!-- ![Build Status](https://github.com/pextech/DutyGenerator/workflows/Node.js%20CI/badge.svg) -->
<!-- [![Maintainability](https://api.codeclimate.com/v1/badges/914387c533a83662f9ad/maintainability)](https://codeclimate.com/github/pextech/DutyGenerator/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/pextech/DutyGenerator/badge.svg?branch=ft-api-duties)](https://coveralls.io/github/pextech/DutyGenerator?branch=ft-api-duties) -->
# Salbum-app (keep track of your songs)

<!-- ![Design preview for the Todo app coding challenge](desktop-preview.jpg) -->

# API Endpoints included

### User

- **POST /signUp:** Create an account
- **POST /login:** Log into your account

### Albums

- **POST /Album:** Create a new Album
- **GET /Album/:ID:** Fetch a single Album 
- **GET /Album:** Fetch all Albums and tracks
- **PATCH /Album:ID:** Update a single Album
- **DELETE /Album:ID:** Delete an Album

### Tracks

- **POST /Album/:ID/songs:** Create a new track
- **GET /Album/:ID/songs:** Fetch all tracks in an Album
- **PATCH /Album/:ID/songs/:ID:** Update a single track
- **DELETE /Album/:ID/songs/:ID:** Delete a track

# Installation and Environment Setup

**Clone the repository from [Github](https://github.com/pextech/DutyGenerator.git).**

( You will need **Git** for this if you are running a Windows PC, Get it [HERE](https://git-scm.com/) )

```
git clone https://github.com/pextech/salbum-app.git
```

**To Install all dependencies:**

```
npm install
```

**To Run migrate through the database:**

```
sequelize db:migrate
```
**To undo migration in the database:**

```
sequelize db:migrate:undo:all
```

**Now to start the app:**

```
npm run start
```

**To start the app in development mode:**

( You need **nodemon** installed for this, run `npm i -g nodemon` to install it )

```
npm run dev-start
```

# Tools used

- Server-Side Framework: **Node/Express**
- code management: **eslint and prettier**
- documentation tool: **Swagger documentation**
- database: **sequelize, postgres**

# More Tools

- Continuous integration: **[Travis-Ci](travis-ci.org)**
- ES6 Transpiler: **[Babel](babeljs.io)**
- Deployment: **[Heroku](https://www.heroku.com)**
