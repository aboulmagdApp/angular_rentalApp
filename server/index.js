const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

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

app.use(bodyParser.json());

app.get('/api/v1/rentals', (req,res) =>{
    return res.json(rentals);
})

app.get('/api/v1/rentals/:rentalId', (req,res) =>{
    const rentalId = req.params.rentalId;
    const rental = rentals.find(r => r._id === rentalId);
    return res.json(rental);
})

app.post('/api/v1/rentals', (req, res) =>{
   const rentalData = req.body;
   rentals.push(rentalData);
   return res.json({message: `Rental with id:${rentalData._id} was added!`});
})

app.listen(PORT, () =>{
    console.log('Sererv is listening on port', PORT);
})