


const getAllTasks = (req, res) => {


    res.send("Get All Task")

}

const createtask = (req, res) => {


    res.json(req.bodd)

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