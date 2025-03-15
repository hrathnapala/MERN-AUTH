import express from 'express';
import dotenv from 'dotenv';

// middleware
import { notFound,errorHandler } from './middleware/errorMiddleware.js';

import { authUser } from './controllers/userController.js';

dotenv.config();

const PORT = process.env.PORT || 9500;

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready')
})

app.use("/api/users/",authUser);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
});

