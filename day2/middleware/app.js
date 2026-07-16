const express = require("express");

const app = express();

app.use(express.json());

app.post("/user", (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});