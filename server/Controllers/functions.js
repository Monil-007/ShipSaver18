const express = require('express');
const usr = require('../Models/userSchema');

const rkfunc = async (req, res) => {
    console.log("inside main controllers, radhe govind");
    console.log(req.body);
    const FN = req.body.firstName;
    const LN = req.body.lastName;
    const EL = req.body.email;
    const price = req.body.price;
    const user11 = new usr({ firstName: `${FN}`, lastName: `${LN}`, email: `${EL}`, price: `${price}` });
    try {
        await user11.save();
        res.status(200).send(req.body);
    }
    catch (e) { console.log("error: " + e); res.status(500).send("Some error occurred"); }

    // res.json({ result: `${{ er1, er2 }}` });
}


const rkGetfunc = async (req, res) => {
    console.log("Inside get req, hare krishna");
    console.log(req.body);
    const FN = req.body.firstName;
    const LN = req.body.lastName;
    const price = req.body.price;
    const EL = req.body.email;
    usr.find({ price: { $gte: 500, $lte: 500 - price } }).toArray(function (err, docs) {
        if (err) {
            console.error('Error querying the database:', err);
        } else {
            console.log('Documents within the price range:', docs);
        }
    }
}

module.exports = { rkfunc, rkGetfunc };