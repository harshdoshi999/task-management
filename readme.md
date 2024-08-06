# Task Management

## Setup steps

Step 1: Clone repo

```bash
  git clone https://github.com/harshdoshi999/task-management.git
```

Step 2: From root directory, cd into web and create env

```bash
  REACT_APP_BASE_URL=http://localhost:4000
```

Step 3: install dependencies and start server

```bash
  nvm use
  npm install
  npm run start
```

Step 4: From root directory, cd into api and create env

```bash
    MONGODB_URI=mongodb+srv://<username>:<password>@tasks.nvcyffb.mongodb.net/?retryWrites=true&w=majority&appName=tasks
    PORT=4000
    REACT_APP_URL=http://localhost:3000
    JWT_SECRET="<secret token>"
```

Step 5: install dependencies and start server

```bash
  nvm use
  npm install
  node server.js
```

You'll able to see the app running at http://localhost:3000/

## Tech Stack (MERN Stack)

Frontend - ReactJS
Backend - NodeJS (ExpressJS)
Database - MongoDB
CSS - Tailwind CSS
