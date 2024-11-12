const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
const { client, connectDB } = require('./config/db')
dotenv.config();
// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../src")));

const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Serve static files from React's build folder
app.use(express.static(path.join(__dirname, "src/build")));

// Catch-all route to send all requests to index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "src/build", "index.html"));
});

// Définir la route des utilisateurs en utilisant le router importé

app.get("/passwordcrypto", (req, res, next) => {
    res.send(SHA256.AES.encrypt("mdp", "hash").toString());
});

// Start the server
app.listen(port, async () => {
    await connectDB();
    console.log(`Server is running on http://localhost:${port}`);
});