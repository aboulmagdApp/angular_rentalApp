const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');

// routes
const rentalRoutes = require('./routes/rental');

// models
const Rental = require('./models/rental');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
},() =>{
        console.log('Connect to DB!');
    });
app.use(bodyParser.json());

// Api Routes
app.use('/api/v1/rentals', rentalRoutes);


app.listen(PORT, () =>{
     console.log('Sererv is listening on port', PORT);
})