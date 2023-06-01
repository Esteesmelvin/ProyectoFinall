const express = require('express')
require('dotenv').config()
const connectDB = require ('./database/db.js')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

connectDB();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(express.static('public'))

app.use('/api/auth', require('./routes/authRoutes'))

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
})
