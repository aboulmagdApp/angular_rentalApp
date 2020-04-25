const express = require('express');
const bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rental');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);


app.listen(PORT, () =>{
    console.log('Sererv is listening on port', PORT);
})