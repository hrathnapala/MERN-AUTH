import express from 'express';

const PORT = 9000;

const app = express();

app.get('/', (req,res) => {
    res.send('Server is ready')
})

app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`)
});

