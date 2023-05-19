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
    // { price: { $lte: 500 } }
    //const dt1 = await usr.find({ age: { $gte: `${price}` } });
    await usr.find({ price: { $gte: `${price}` } }).then(
        (dwt) => { console.log(dwt); }
    )
    //const rs = usr.find({ "price": "500" });
    //rs.map(entry => console.log(entry));
    //console.log(rs);
    //if (dt1) { console.log(dt1); }
    res.status(200).send("done!!!");
    // db.articles.find({
    //     "stock.country" : "01",
    //     "stock.warehouse.code" : "02"
    // }).pretty();
}



module.exports = { rkfunc, rkGetfunc };