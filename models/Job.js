const mongoose = require('mongoose')
const { getMaxListeners } = require('./User')
const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        required:[true, 'Please give company name'],
        maxlength : 50,
    },
    position:{
        type:String,
        require:[true, 'Please give position name'],
        maxlength : 100,
    },
    status:{
        type:String,
        enum: ['interview', 'declined','pending'],
        default:'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'Please provide creator']
    }
},
    {timestamps:true})

module.exports = mongoose.model('Job', JobSchema)
