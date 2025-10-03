# 🗣️ Express Yourself API

This project implements a **RESTful API** in **Node.js** with **Express.js** to handle CRUD operations (Create, Read, Update, Delete) for **Expressions** and **Animals**.  
It powers the **Express Yourself Machine**, allowing users to interact with objects containing an `id`, `name`, and `emoji`.

---

## 📌 Features

### Expressions
- `GET /expressions` → Get all expressions.
- `GET /expressions/:id` → Get a single expression by ID.
- `POST /expressions` → Create a new expression (requires `emoji` and `name`).
- `PUT /expressions/:id` → Update an existing expression.
- `DELETE /expressions/:id` → Delete an expression by ID.

### Animals
- `GET /animals` → Get all animals.
- `GET /animals/:id` → Get a single animal by ID.
- `POST /animals` → Create a new animal.
- `PUT /animals/:id` → Update an existing animal.
- `DELETE /animals/:id` → Delete an animal by ID.

---

## ⚙️ Installation & Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/express-yourself.git
   cd express-yourself
   ```
2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node app.js
```

4. Open the Express Yourself Machine in your browser.
By default, the server runs on:
```bash
http://localhost:4001

```
(or the port defined in the PORT variable).

## 🛠️ Dependencies

- Node.js
- Express.js

## 📂 Project Structure
📦 express-yourself
 ┣ 📂 public          # Static files (UI for the Express Yourself machine)
 ┣ 📂 utils           # Helper functions (getElementById, createElement, updateElement, etc.)
 ┣ app.js             # Main server code
 ┣ package.json
 ┗ README.md

## ✅ Helper Functions (utils.js)

- `getElementById(id, array)` → Finds an element by ID.
- `getIndexById(id, array)` → Gets the index of an element by ID.
- `createElement(type, object)` → Creates a new valid object.
- `updateElement(id, queryArgs, array)` → Updates an existing object.

## 🧪 API Testing

You can test the API using:

- The Express Yourself Machine (UI in /public).
- API clients like Postman, Insomnia, or cURL.
- fetch() in your browser or Node.js.
