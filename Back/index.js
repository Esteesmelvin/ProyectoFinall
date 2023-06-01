const express = require('express')
require('dotenv').config()
const connectDB = require ('./database/db.js')

const app = express();

connectDB();

app.use(express.static('public'))

app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'))

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto', process.env.PORT)
})
