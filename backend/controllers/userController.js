import asyncHandler from 'express-async-handler';


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
    res.status(200).json({message: "Register User"});
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