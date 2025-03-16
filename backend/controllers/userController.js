import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';


// @DESC auth user/set token
// @ROUTE POST api/users/auth
// @ACCESS public
const authUser = asyncHandler(async (req,res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(user && (await user.matchPasswords(password))) {
        generateToken(res,user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
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
        generateToken(res,user._id);
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

    res.cookie('jwt','',{
        httpOnly: true,
        expires: new Date(0)
    })
    
    res.status(200).json({message: "User logged out"});
})

// @DESC Get user profile
// @ROUTE POST api/users/profile
// @ACCESS private
const getUserProfile = asyncHandler(async (req,res) => {
    console.log(req.user);
    
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    
    res.status(200).json(user);
})

// @DESC Update user profile
// @ROUTE PUT api/users/profile
// @ACCESS private
const updateUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id);

    if(user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password) {
            user.password = req.body.password;
        }

        const updateUser = await user.save();
        res.status(200).json({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email
        });
    } else {
        res.status(404);
        throw new Error('User not found');
    }
})

export {authUser, registerUser, logoutUser, getUserProfile, updateUserProfile}