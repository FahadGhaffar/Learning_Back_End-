

const express = require("express");
const { getAllTasks, createtask, gettask, updatetask, deletetask } = require("../controllers/tasks")
const router = express.Router();


router.route("/").get(getAllTasks).post(createtask);
router.route("/:id").get(gettask).patch(updatetask).delete(deletetask);



module.exports = router;