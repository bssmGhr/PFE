const { JWT_SECRET, database1 } = require("../config/db");
const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { usersCollection } = require("../models/usersm");

const User = usersCollection;
const userController = require('../controllers/usersc');

//Creer

router.post("/users", userController.userspost);
//Lire

router.get("/users", userController.usersget);

//Mise a jour

router.put("/users/:id", userController.usersputid);

//Supprimer

router.delete("/users/:id", userController.usersdeleteid);

// Login route
router.post("/login",userController.userlogin);


// Sign up route
router.post("/signup",userController.signupuser );

const { ObjectId } = require("mongodb");
// Update user profile route
router.put("/profile", userController.authenticateToken, async (req, res) => {
    const { name, email, oldPassword, newPassword, userId } = req.body; // Assuming the request may include one or more of these fields

    try {
        const user = await usersCollection.findOne({
            _id: ObjectId.createFromHexString(userId),
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // If newPassword is provided, verify old password before updating
        if (newPassword) {
            if (oldPassword !== user.password) {
                return res.status(401).json({ message: "Invalid old password" });
            }
        }

        // Construct the update query based on the fields provided in the request
        let updateQuery = {};
        if (name) {
            updateQuery.name = name;
        }
        if (email) {
            updateQuery.email = email;
        }
        if (newPassword) {
            updateQuery.password = newPassword;
        }

        // Update the user's profile based on the provided fields
        const result = await usersCollection.findOneAndUpdate(
            { _id: ObjectId.createFromHexString(userId) },
            { $set: updateQuery },
            { returnOriginal: false }
        );

        if (result) {
            res.status(200).json({
                message: "User profile updated successfully",
                user: result,
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res
            .status(500)
            .json({ message: "Error updating user profile", error: error.message });
    }
});

router.put("/resetpassword", async (req, res) => {
    const { email, password } = req.body; // Assuming the request may include one or more of these fields
    const newPassword=password;
    console.log('ok')
    
    
    try {
        
        const user = await usersCollection.findOne({
            email:email
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        

        // Construct the update query based on the fields provided in the request
        let updateQuery = {};
        
        
        if (newPassword) {
            updateQuery.password = newPassword;
        }

        // Update the user's profile based on the provided fields
        console.log(user);
        const result = await usersCollection.findOneAndUpdate(
            { _id: user._id },
            { $set: updateQuery },
            { returnOriginal: false }
        );
        console.log(result);
        if (result) {
            res.status(200).json({
                message: "User profile updated successfully",
                user: result,
            });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res
            .status(200)
            .json({ message: "Error updating user password", error: error.message });
    }
});




module.exports = router;
