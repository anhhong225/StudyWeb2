const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name:{
        type:String,
        require: 'Kindly enter the name of task'
    },
    Create_date:{
        type: Date,
        default: Date.now
    },
    status:{
        type: [{
            type: String,
            enum:['pending','ongoinf','completed']
        }],
        default: ['pending']
    }
});
module.exports = mongoose.model('Tasks', TaskSchema);