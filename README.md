# ITPM Task 1 - Express Student API

![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-v10-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

This project is a simple Node.js and Express.js backend implementation that serves student information in a formatted JSON structure. This was developed as part of the ITPM course tasks.

## 🚀 Features
*   **Express.js Routing**: Custom `/student` route.
*   **JSON Response**: Returns structured student data including ID, Name, Major, and GPA.
*   **API Testing**: Fully verified using Postman.

## 🛠️ Tech Stack
*   **Backend**: Node.js, Express.js
*   **Tools**: VS Code, Postman
*   **Version Control**: Git/GitHub

## 📸 API Verification (Postman)
Below is the screenshot of the successful API request made to `http://localhost:3000/student`:

![Postman Verification](./postman_screenshot.png) 

## 🏃‍♂️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Zishan-125/itpm_task1.git](https://github.com/Zishan-125/itpm_task1.git)
   cd itpm_task1
   ```
Install dependencies:

```bash
npm install
```
Start the server:

```bash
node response.js
```

4. **Access the API:**
   Open your browser or Postman and navigate to: `http://localhost:3000/student`

# Todo List API - Assignment_2
**Developer ID:** 232031009

## 🚀 API Endpoints
*   **GET** `/todos` - Retrieve all tasks
*   **GET** `/todos/:id` - Retrieve a specific task by ID
*   **POST** `/todos` - Create a new task
*   **PUT** `/todos/:id` - Update an existing task
*   **DELETE** `/todos/:id` - Remove a task from the list

## 📸 Postman Testing Results
| Action | Screenshot |
| :--- | :--- |
| Create Todo | ![Create](post.png) |
| Get All | ![Get All](get.png) |
| Update | ![Update](put.png) |
| Delete | ![Delete](delete.png) |

## 🛠️ Instructions
1. Run `npm install`
2. Run `node todo.js`
3. Test using `http://localhost:3000/todos`

## 👤 Author
**Abdullah Al Mamun Zishan**

**ID:232031009**
