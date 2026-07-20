
const express = require("express");
const app = express();



const userRoutes = require('./routes/user.routes');


app.use(express.json()); // Middleware to parse JSON request bodies

app.use("/users", userRoutes);



app.get("/", (req, res) => {
    res.status(201).send("Home Page");
});





module.exports = app;


