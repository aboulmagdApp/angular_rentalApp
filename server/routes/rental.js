const express = require('express');
const router = express.Router();

const rentalController = require('../controllers/rentals')

router.get('', rentalController.getRentals);

router.get('/:rentalId', rentalController.getRentalById);

router.post('', rentalController.createRental);

module.exports = router;