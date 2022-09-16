
const Task = require("../models/Task")

const getAllTasks = async (req, res) => {

    try {
        const tasks = await Task.find({});
        res.status(200).json({ tasks })

    } catch (error) {
        res.status(500).json({ msg: error })
    }


}

const createtask = async (req, res) => {


    try {
        const task = await Task.create(req.body);
        // const task = new Task({ "name": "ABC", 'completed': true });
        // await task.save()
        res.status(201).json({ task })

    } catch (error) {


        res.status(500).json({ msg: error })

    }

    // const task = req.body;
    // res.status(201).json({ task })
}


const gettask = async (req, res) => {

    try {

        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {

            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }

        // res.json({ id: req.params.id })
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}

const updatetask = (req, res) => {


    res.send("Update Task")

}

const deletetask = async (req, res) => {

    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID });
        if (!task) {

            return res.status(404).json({ msg: `No task with id : ${taskID}` })
        }

        // res.json({ id: req.params.id })
        res.status(200).json({ task })




    } catch (error) {
        res.status(500).json({ msg: error })
    }

    // res.send("Delete Task")

}


module.exports = {


    getAllTasks,
    createtask,
    gettask,
    updatetask,
    deletetask,
}