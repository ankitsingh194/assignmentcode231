const mongoose = require('mongoose');
const dotenv = require('dotenv');

// to connect with mongoose database
const mongodb = async() => {
    try {
        await mongoose.connect(process.env.MONOGO_DB_KEY).then(
            () => console.log('mongodb connected')
        ).catch(()=> console.log('mongodb not connected'));

        
    } catch (error) {
        console.log(error)
        
    }
}


module.exports = mongodb;