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

