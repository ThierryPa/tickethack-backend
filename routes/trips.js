var express = require('express');
var router = express.Router();

const Trip = require('../models/trips');

// GET => Chercher une liste de trips avec departure et arrival
// TODO Ajouter le parametre Date aussi
router.get('/:departure/:arrival/:date', (req, res) => {
    const myDate = new Date(req.params.date);
    Trip.find({ departure: req.params.departure, arrival: req.params.arrival, date: myDate }).then(trips => {
        // Si la requête n'est pas null ou vide
        if (trips != null && trips != "") {
            console.log(trips);
            res.json(trips);
        } else {
            console.log('Error in Get Trips');
            res.json({error: "Error Get Trips are not found"});
        }
    })
});


module.exports = router;