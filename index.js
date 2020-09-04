const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const course = require('./model/courseModel');
const courseRouter = require('./routers/course');
const userRouter = require('./routers/user')

const app = express();

//middlewares   
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use('/courses', courseRouter);
app.use('/users', userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
    console.log(`Server running http://localhost:${PORT}`));

app.get('/', (req, res) => {
    res.send(`<center><h1>Bienvenu dans la page d'accueil de notre Api !</h1></center>`)
});

