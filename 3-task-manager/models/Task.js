const mangoose = require('mongoose');


const TaskSchema = new mangoose.Schema({
    name: String,
    completed: Boolean


})