const mongoose = require('mongoose');

//Schema of Remark in mongoose
const UserSchema = new mongoose.Schema({
    Remark:[
        [String]
    ]
    
});


const User = mongoose.model('UserRemark', UserSchema);

module.exports = User;