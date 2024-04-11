# Express-user-management-api
express-user-management-api is a simple REST API built with Express.js for managing user data. It provides endpoints to perform CRUD operations on user records stored in a JSON file. This project includes implementations for all HTTP request methods (GET, POST, PATCH, DELETE) to facilitate seamless interaction with user data.


## Simple User Management REST API

This project is a simple REST API for managing users. It provides endpoints to perform CRUD (Create, Read, Update, Delete) operations on user data stored in a JSON file.

## Features

- Retrieve all users
- Retrieve a specific user by ID
- Add a new user
- Update an existing user
- Delete a user

## Technologies Used

- Node.js
- Express.js
- fs (File System) module

## Getting Started

### Prerequisites

- Node.js installed on your local machine

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-user-management-rest-api
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will start at `http://localhost:8000`.

### Endpoints

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:id**: Retrieve a specific user by ID.
- **POST /api/users**: Add a new user.
- **PATCH /api/users/:id**: Update an existing user by ID.
- **DELETE /api/users/:id**: Delete a user by ID.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

--- 
