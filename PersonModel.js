const mongoose = require('mongoose');

const personSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
        lowercase: true,
    },
    username:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: [true, 'Username is already taken.'],
        
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100,
    },
    
});

module.exports = mongoose.model('Person', personSchema);