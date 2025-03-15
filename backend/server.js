import express from 'express';
import dotenv from 'dotenv';
import { authUser } from './routes/userRoute.js';

dotenv.config();

const PORT = process.env.PORT || 9500;

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready')
})

app.use("/api/users/",authUser);

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
});

