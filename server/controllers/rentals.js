

const rentals = [
    {
        _id: 'dfsafdfdfrtr',
        city: 'New Yourk',
        title: 'very nice place'
    },
    {
        _id: 'opiiopopoi',
        city: 'Berline',
        title: 'very nice place as well'
    }
]

exports.getRentals = (req,res) =>{
    return res.json(rentals);
}
exports.getRentalById = (req,res) =>{
    const rentalId = req.params.rentalId;
    const rental = rentals.find(r => r._id === rentalId);
    return res.json(rental);
}
exports.createRental = (req, res) =>{
    const rentalData = req.body;
    rentals.push(rentalData);
    return res.json({message: `Rental with id:${rentalData._id} was added!`});
 }
exports.deleteRental = (req, res) =>{
    const id   = req.params.id;
    const rIndex = rentals.findIndex(r => r._id === id);
    rentals.splice(rIndex, 1);
    return res.json({message: `Rental with id:${id} was removed!`});
}
exports.updateRental = (req, res) =>{
    const { id }  = req.params;
    const rentalToUpdate = req.body;
    const rIndex = rentals.findIndex(r => r._id === id);
    rentals[rIndex].city = rentalToUpdate.city;
    rentals[rIndex].title = rentalToUpdate.title;
    return res.json({message: `Rental with id:${id} was updated!`});
}