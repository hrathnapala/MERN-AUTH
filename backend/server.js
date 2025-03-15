import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// middleware
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

import connectDB from './config/db.js';

import userRoutes from './routes/userRoutes.js';


dotenv.config();

const PORT = process.env.PORT || 9500;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/', (req,res) => {
    res.send('Server is ready')
})

app.use("/api/users/",userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
});

