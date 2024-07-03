var express = require('express');
var router = express.Router();

const Cart = require('../models/carts');
const Trip = require('../models/trips');

// POST un trip => Cart
router.post('/:id', (req, res) => {
    Trip.findById(req.params.id).then(trip => {
        console.log({trip});
        if (trip != null && trip != "") {
            // Creates new document with trip data
            const newCart = new Cart({
            departure: trip.departure,
            arrival: trip.arrival,
            date: trip.date,
            price: trip.price,
        });

        // Finally save in database
        newCart.save().then(addedCart => {
            res.json({ addedCart });
        });
        } else {
            // Else Trip doesn't found any trip with the id
            console.log("Error in POST un trip au cart NOT FOUND");
            res.json({ error: "Error in POST un trip au Cart NOT FOUND" });
        }
    })
});

// DELETE un Cart
router.delete('/:id', (req, res) => {
    Cart.deleteOne({ id: req.params.id }).then(cart => {
        if(cart != null && cart != "") {
            console.log({cart});
            res.json({ cart });
        } else {
            console.log("Error in DELETE un trip au cart NOT FOUND");
            res.json({ error: "Error in DELETE un trip au Cart NOT FOUND" });
        }
    })
});

// GET all Carts
router.get('/', (req, res) => {
    Cart.find().then(cart => {
        if(cart != null && cart != "") {
            console.log(cart);
            res.json(cart);
        } else {
            console.log("Get All Cart is empty");
            res.json({ error: "Get All Cart is empty" });
        }
    })
});

module.exports = router;