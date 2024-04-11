const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route to get all users
app.get('/api/users', (req, res) => {
    return res.json(users);
});

// Route to get a specific user by ID
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
});

// Route to add a new user
app.post('/api/users', (req, res) => {
    const body = req.body;
    // Validate input data
    if (!body.first_name || !body.last_name || !body.email) {
        return res.status(400).json({ error: "Missing required fields" });
    }
    const newUser = { id: users.length + 1, ...body };
    users.push(newUser);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(201).json({ status: "Success", id: newUser.id });
    });
});

// Route to update a user by ID
app.patch('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ status: "Success", user: updatedUser });
    });
});

// Route to delete a user by ID
app.delete('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ error: "User not found" });
    }
    users.splice(userIndex, 1);
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.json({ status: "Success", message: "User deleted successfully" });
    });
});

// Start the server
app.listen(port, () => console.log(`Server started at ${port}`));

module.exports = app; // Export the Express app for testing or reuse
