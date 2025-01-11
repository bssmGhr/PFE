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
module.exports={
    userspost,
    usersget,
    usersputid,
    usersdeleteid,
    userlogin
}