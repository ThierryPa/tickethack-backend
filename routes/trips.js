var express = require('express');
var router = express.Router();

const moment = require('moment');

const Trip = require('../models/trips');

// GET => Chercher une liste de trips avec departure, arrival et
// (date compris entre le debut et la fin de la journée)
router.get('/:departure/:arrival/:date', (req, res) => {
    const myDate = new Date(req.params.date);
    const minDate = moment(myDate).startOf('day');
    const maxDate = moment(myDate).endOf('day');

    Trip.find({ departure: req.params.departure, arrival: req.params.arrival, date: { $gte: minDate, $lte: maxDate } }).then(trips => {
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