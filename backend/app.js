const express = require('express');
const mongoose = require('mongoose');
const fundraiseRoute = require("./routes/fundraise-router")
const app = express();

// Middlewares

app.use(express.json());
app.use("/fundraise",fundraiseRoute)// localhost:5000/Donation

mongoose
.connect(
    "mongodb+srv://admin:9vzKFpTJsKWFKhlT@cluster3.0k804pm.mongodb.net/saveTurtle?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));