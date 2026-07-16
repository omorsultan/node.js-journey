const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Request received");
    next();
});

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.listen(3200, () => {
    console.log("Server is running on http://localhost:3200");
});