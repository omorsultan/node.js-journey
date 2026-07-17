
const express = require("express");
const app = express();




const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes');
const logger = require("./middleware/logger");


app.use("/users", userRoutes);
app.use("/products", productRoutes);


app.get("/", (req, res) => {
    res.status(201).send("Home Page");
});



module.exports = app;


