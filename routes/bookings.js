var express = require('express');
var router = express.Router();

const Booking = require('../models/bookings');
const Cart = require('../models/carts');

// POST un Cart => Booking
router.post('/:id', (req, res) => {
    Cart.findById(req.params.id).then(cart => {
        if (cart != null && cart != "") {
            // Creates new document with trip data
            const newBooking = new Booking({
            departure: cart.departure,
            arrival: cart.arrival,
            date: cart.date,
            price: cart.price,
        });
        // Finally save in database
        newBooking.save().then(addedBooking => {
            res.json({ addedBooking });
            // We delete our Cart after saved it to Booking
            Cart.deleteOne({ id: req.params.id }).then(cartDelete => {
                if(cartDelete != null && cartDelete != "") {
                    console.log({cartDelete});
                } else {
                    console.log("Error in Cart.deleteOne NOT FOUND in Booking");
                }
            })
        });
        } else {
            // Else Trip doesn't found any trip with the id
            console.log("Error in POST un cart NOT FOUND => Booking");
            res.json({ error: "Error in POST un cart NOT FOUND => Booking" });
        }
    })
});

module.exports = router;