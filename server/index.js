const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rental');

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = 'mongodb://aboulmagd:aqtkOcbhYbQD0biM@cluster0-shard-00-00-vjxvu.mongodb.net:27017,cluster0-shard-00-01-vjxvu.mongodb.net:27017,cluster0-shard-00-02-vjxvu.mongodb.net:27017/bwmNewDev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(MONGODB_URI, {
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