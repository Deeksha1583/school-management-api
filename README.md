# School Management API

A RESTful API built with **Node.js**, **Express.js**, and **MySQL** to manage school data.  
This API allows users to add new schools and retrieve a list of schools sorted by proximity to a given location.

---

## Features

- Add new schools with `name`, `address`, `latitude`, and `longitude`.
- Retrieve a list of all schools sorted by distance from a user-specified location.
- Input validation to ensure data integrity.

---

## Technology Stack

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **MySQL** (Relational database)
- **dotenv** (Environment variables management)

---

## Getting Started

### Prerequisites

- Node.js and npm installed ([Download Node.js](https://nodejs.org/))
- MySQL installed and running
- Basic understanding of REST APIs

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/<your-username>/school-management-api.git
    cd school-management-api
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with your database credentials and server port:

    ```env
    DB_HOST=your_mysql_host
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_NAME=your_database_name
    PORT=3000
    ```

4. Run the server:

    ```bash
    node app.js
    ```

5. The server should now be running at `http://localhost:3000`.

---

## Database Setup

Create a MySQL database and a table named `schools` with the following schema:

```sql
CREATE TABLE schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);
# School Management API

---

## API Endpoints

### 1. Add School

- **URL:** `/addSchool`  
- **Method:** POST  
- **Content-Type:** `application/json`  

**Body Parameters:**

```json
{
  "name": "Green Valley School",
  "address": "123 Hilltop Road",
  "latitude": 28.6139,
  "longitude": 77.2090
}

**Success Response:**

- **Status:** `201 Created`
- **Body:**   

```json
{
  "message": "School added successfully",
}

**Validation:** 'Ensures all fields are present and valid'


### 2. List Schools by Proximity

- **URL:** `/listSchools`  
- **Method:** GET  

**Query Parameters:**

- **latitude (required)** `User's current latitude`
- **longitude (required)** `User's current longitude`

**Success Response:**

- **Status:** `200 OK`
- **Body:** 

```json
[
    {
    "name": "Green Valley School",
    "address": "123 Hilltop Road",
    "latitude": 28.6139,
    "longitude": 77.2090
    }
]

'Schools are sorted bu geographical distance from the user's location.'

---

## Testing

'Use Postman or similar API clients to test the endpoints:'
- 'Test **/addSchool** with a valid JSON body.'
- 'Test **/listSchools** with **latitude** and **longitude** query parameters.

---

## Project Structure

school-management-api/
│
├── app.js              # Entry point, server setup
├── controllers/        # API controller logic
│   └── schoolController.js
├── routes/             # API routes
│   └── schoolRoutes.js
├── config/             # Database configuration (db.js)
├── .env.example        # Example environment variables
├── package.json        # Dependencies and scripts
├── README.md           # This file
└── .gitignore          # Ignore node_modules, .env, etc.

---

## Skills Demonstrated

- 'REST API design with Express.js'
- 'MySQL database integration and query optimization.'
- 'Input validation and error handling.'
- 'Geographical distance calculations for sorting results.'
- 'Environment variable management for secure configs.'

---

## Author

* 👩‍💻 **Name:** DEEKSHA DEWANGAN
* 📧 **Email:** deekshadewangan2003@gmail.com

