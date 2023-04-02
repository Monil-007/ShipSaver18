const express = require('express');
const app = express();

app.listen(3000, function (req, res) {
    console.log("Jai shree krishna")
    res.send("Hare krishna!!");
});