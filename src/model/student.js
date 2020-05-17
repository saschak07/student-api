const mongoose = require('mongoose')

const Student = mongoose.model('student',{
    name: {
        type: String,
        unique: true,
        required: true,
        maxlength: 10
    },
    age: {
        type: Number,
        default: 0,
        min: 0
    },
    address: {
        type: String,
        required: true,
        maxlength: 100
    },
    favourite: {
        type: String

    }

})

module.exports = Student