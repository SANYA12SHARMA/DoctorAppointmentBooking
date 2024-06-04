const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDB = require('./config/db');
dotenv.config();

const app = express();

//mongodb connection
connectDB();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/user',require('./routes/userRoutes'));

app.get('/',(req,res)=>{
    res.status(200).send({
        message:"server running",
    });
});

const port = process.env.PORT || 8080;

app.listen(port,() => {
    console.log(`Server is running in ${process.env.dev_mode} on port ${process.env.PORT}`.bgCyan.white);
});
