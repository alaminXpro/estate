const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


app.get('/', (req, res) => {
    res.send('Hello world from the api server');
})






const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO)
.then(() => {
    console.log("Connected to database");
    app.listen(3000, ()=> {
        console.log("Server is running on http://localhost:3000");
    });
})
.catch((err) => {
    console.log("Connection failed with error: " + err);
});