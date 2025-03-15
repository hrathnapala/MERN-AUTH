import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';


// @DESC auth user/set token
// @ROUTE POST api/users/auth
// @ACCESS public
const authUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Auth User"});
})

// @DESC Register a new user
// @ROUTE POST api/users
// @ACCESS public
const registerUser = asyncHandler(async (req,res) => {
    const {name, email, password} = req.body;

    const userExists = await User.findOne({email});
     
    if(userExists) {
        res.status(400);
        throw new Error(`User already exists`);
    }

    const user = await User.create({name,email,password});

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error(`Invalid user data`);
    }
    
})

// @DESC Logout user
// @ROUTE POST api/users/logout
// @ACCESS public
const logoutUser = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Logout User"});
})

// @DESC Get user profile
// @ROUTE POST api/users/profile
// @ACCESS private
const getUserProfile = asyncHandler(async (req,res) => {
    res.status(200).json({message: "User Profile"});
})

// @DESC Update user profile
// @ROUTE PUT api/users/profile
// @ACCESS private
const updateUserProfile = asyncHandler(async (req,res) => {
    res.status(200).json({message: "Update User Profile"});
})

export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile}