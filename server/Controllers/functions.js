const express = require('express');
const usr = require('../Models/userSchema');

const register_product_func = async (req, res) => {
    console.log("inside main controllers, radhe govind");
    console.log(req.body);
    let ID18 = toString(Math.floor(Math.random() * 8700));
    if (req.body.id18) {
        console.log("yess id is here jai jagannath: " + req.body.id18);
        ID18 = req.body.id18;
    }
    const FN = req.body.firstName;
    const EL = req.body.email;
    const price = req.body.price;
    const phone = req.body.phone;
    const reqgender = req.body.reqgender;
    const user11 = new usr({ id18: `${ID18}`, firstName: `${FN}`, email: `${EL}`, price: `${price}`, phone: `${phone}`, reqgender: `${reqgender}` });
    try {
        await user11.save();
        res.status(200).send(req.body);
    }
    catch (e) { console.log("error: " + e); res.status(500).send("Some error occurred"); }
    // res.json({ result: `${{ er1, er2 }}` });
}


const find_delivery_savers_func = async (req, res) => {
    console.log("Inside get req, hare krishna");
    console.log(req.body);
    // const FN = req.body.firstName;

    const price = req.body.prodprice;
    //const EL = req.body.email;
    // { price: { $lte: 500 } }
    var res_array = [];
    //const dt1 = await usr.find({ age: { $gte: `${price}` } });
    await usr.find({ price: { $gte: `${price}` } }).then(
        (dwt) => { console.log(dwt); res_array = dwt }
    )
    console.log(res_array);
    //const rs = usr.find({ "price": "500" });
    //rs.map(entry => console.log(entry));
    //console.log(rs);
    //if (dt1) { console.log(dt1); }
    res.status(200).send(res_array);

}

const close_order_func = async (req, res) => {
    console.log("Inside close_order_func, Jai Jagannath!!!");
    console.log(req.body);
    // const FN = req.body.firstName;

    try {
        const orderId = req.body.orderId; // Assuming you pass the orderId from the frontend
        //await usr.findByIdAndDelete(orderId);
        res.status(200).json({ success: true, message: 'Order closed successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Failed to close order' });
    }

}


module.exports = { register_product_func, find_delivery_savers_func, close_order_func };