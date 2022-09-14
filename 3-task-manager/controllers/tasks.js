
const Task = require("../models/Task")

const getAllTasks = (req, res) => {


    res.send("Get All Task")

}

const createtask = async (req, res) => {

    const task = await Task.create(req.body);
    res.status(201).json({ task })

}


const gettask = (req, res) => {


    res.json({ id: req.params.id })

}

const updatetask = (req, res) => {


    res.send("Update Task")

}

const deletetask = (req, res) => {


    res.send("Delete Task")

}


module.exports = {


    getAllTasks,
    createtask,
    gettask,
    updatetask,
    deletetask,
}