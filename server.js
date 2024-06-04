const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.status(200).send({
        message:"server running",
    });
});

const port = process.env.PORT || 8080;

app.listen(port,() => {
    console.log(`Server is running in ${process.env.dev_mode} on port ${process.env.PORT}`.bgCyan.white);
});
