const express = require('express');
const router = express.Router();

const rentalController = require('../controllers/rentals')

router.get('', rentalController.getRentals);

router.get('/:rentalId', rentalController.getRentalById);

router.post('', rentalController.createRental);

router.delete('/:id', rentalController.deleteRental);

router.patch('/:id', rentalController.updateRental);


module.exports = router;