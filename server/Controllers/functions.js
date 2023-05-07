const express = require('express');
const usr = require('../Models/userSchema');

const rkfunc = async (req, res) => {
    console.log("inside main controllers, radhe govind");
    console.log(req.body);
    const FN = req.body.firstName;
    const LN = req.body.lastName;
    const EL = req.body.email;
    const user11 = new usr({ firstName: `${FN}`, lastName: `${LN}`, email: `${EL}` });
    try {
        await user11.save();
        res.status(200).send(req.body);
    }
    catch (e) { console.log("error: " + e); }
    res.status(500).send("Some error occurred");
    // res.json({ result: `${{ er1, er2 }}` });
}


module.exports = { rkfunc };