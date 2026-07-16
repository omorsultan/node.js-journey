const express = require("express");

const app = express();

const checkUser = (req, res, next) => {
    console.log("Checking User...");
    next();
};

app.get("/profile", checkUser, (req, res) => {
    res.send("Profile Page");
});
app.use(checkUser);
app.get("/dashboard", (req, res) => {
    res.send("Dashboard Page");
});
app.listen(3200, () => {
    console.log("Server is running on http://localhost:3200");
});


