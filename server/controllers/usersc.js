const { JWT_SECRET, database1 } = require("../config/db");
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { usersCollection } = require("../models/usersm");

const User = usersCollection;

const userspost=async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}
const usersget=async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

const usersputid=async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!user) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
}

const usersdeleteid=async (req, res) => {
    try {
        const user = await User.findByldAndDelete(req.params.id);
        if (luser) {
            return res.status(404).send();
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
}

const userlogin= async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user
        const user = await usersCollection.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Invalid password." });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
            expiresIn: "2h",
        });
        res.status(200).json({ message: "Login successful.", token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in.", error });
    }
}
// Middleware to verify JWT token
function authenticateToken(req, res, next) {
    const token =
        req.headers["authorization"] && req.headers["authorization"].split(" ")[1];
    console.log(token);
    if (!token) return res.sendStatus(401);

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

const signupuser=async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Check if the user already exists
        const existingUser = await usersCollection.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        // Create a new user instance
         const newUser = new User({ username: name, email, password: hashedPassword, });
          // Save the new user to the database 
          const result = await newUser.save();

        res
            .status(201)
            .json({ message: "User created.", userId: result.insertedId });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating user.", error });
    }
}
module.exports={
    userspost,
    usersget,
    usersputid,
    usersdeleteid,
    userlogin,
    authenticateToken,
    signupuser
}