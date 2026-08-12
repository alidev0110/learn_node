import express from 'express';

const app = express();

app.use(express.json());
app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
})
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});