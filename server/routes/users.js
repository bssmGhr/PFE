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
router.put("/profile", userController.authenticateToken, userController.profileuser);

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
