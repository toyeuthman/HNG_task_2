const mongoose = require('mongoose');

const personSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
        lowercase: true,
    }

    
});

module.exports = mongoose.model('Person', personSchema);