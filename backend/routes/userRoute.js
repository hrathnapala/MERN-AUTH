import asyncHandler from 'express-async-handler';


// @DESC auth user/set token
// @ROUTE POST api/users/auth
// @ACCESS public
const authUser = asyncHandler(async (req,res) => {
    res.status(401);
    throw new Error('Something went wrong');
    res.status(200).json({message: "Auth User"});
})

export {authUser}