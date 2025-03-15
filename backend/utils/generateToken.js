import jwt from 'jsonwebtoken';

const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Set token expiration
    });

    res.cookie('jwt', token, {
        httpOnly: true,  // Protect cookie from JavaScript access (XSS prevention)
        secure: process.env.NODE_ENV === 'production',  // Only set secure cookie in production (requires HTTPS)
        sameSite: 'strict',  // Protect against CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000,  // Expiry in milliseconds (30 days)
    });
}



export default generateToken;