const mangoose = require('mongoose');



const TaskSchema = new mangoose.Schema({
    name: {
        type: String,
        required: [true, "Must Provide name"],
        trim: true,
        maxlength: [20, "Name Can not be more than 20 character"],
    },
    completed: {
        type: Boolean,
        default: false,

    }


})


module.exports = mangoose.model('Task', TaskSchema)