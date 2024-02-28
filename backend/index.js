const express = require('express');
const mongodb = require('./Database/mongodb');
const dotenv = require('dotenv');
const cors = require('cors')
const userRoute = require('./Routers/UserRoute')

const app = express();
app.use(cors())

const Port = 4000;

dotenv.config()
mongodb();

app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}));


app.use('/api/configurations', userRoute);


app.listen(process.env.PORT || Port , () => console.log(`web app is running on ${process.env.PORT}`))