const express = require("express");

const app = express();

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

app.use(logger);

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3200, () => {
    console.log("Server is running on http://localhost:3200");
});


