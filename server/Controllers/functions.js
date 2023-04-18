const express = require('express');
const usr = require('../Models/userSchema');

const rkfunc = async (req, res) => {
    console.log("inside main controllers, radhe govind");
    console.log(req.body);
    const Naam = req.body.Naam;
    const Price = req.body.Price;
    const user11 = new usr({ Naam: `${Naam}`, Price: `${Price}` });
    try {
        await user11.save();
    }
    catch (e) { console.log("error: " + e); }


    res.send("hare krishna")
    // res.json({ result: `${{ er1, er2 }}` });
}


module.exports = { rkfunc };