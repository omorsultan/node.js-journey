const logger = require("./middleware/logger");
const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log("Request received");
    next();
});
app.use(logger);


app.get("/", (req, res) => {
    res.status(201).send("Home Page");
});

app.get("/student", (req, res) => {
    res.json({
        name: "Omor",
        department: "Software Engineering"
    });
});

app.listen(3200, () => {
    console.log("Server is running on http://localhost:3200");
});



