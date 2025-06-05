# task-manager-restapi

A simple RESTful API for managing tasks using Node.js, Express, and MongoDB.

## Features
- Create, retrieve, update (mark as completed), and delete tasks
- MongoDB database integration
- Environment variable support

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm
- MongoDB (local or Atlas)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/shaloms4/Task-Manager-restapi
   cd Task-Manager-restapi
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB URI:
   ```env
   URI=mongodb://localhost:27017/task-manager
   ```
   Or for MongoDB Atlas:
   ```env
   URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/task-manager
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   The server will run on `http://localhost:3000` by default.

## API Endpoints

### Create a Task
- **POST** `/api/tasks`
- **Body:**
  ```json
  {
    "text": "Complete project documentation",
    "priority": "high",
    "deadline": "2024-03-20"
  }
  ```
- **Response:** Created task object

### Get All Tasks
- **GET** `/api/tasks`
- **Response:** Array of all tasks

### Mark Task as Completed
- **PUT** `/api/tasks/:id`
- **Response:** Updated task object with `completed: true`

### Delete a Task
- **DELETE** `/api/tasks/:id`
- **Response:** Success message
