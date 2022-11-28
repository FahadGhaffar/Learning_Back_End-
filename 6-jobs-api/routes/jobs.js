const express = require("express")

const router = express.Router()

const { getAllJobs, getJob, createJob, updateJob, deleteJob, filterAllJobs } = require("../controllers/jobs");


router.get("/filter", filterAllJobs)
router.route("/").get(getAllJobs).post(createJob)
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJob);


module.exports = router