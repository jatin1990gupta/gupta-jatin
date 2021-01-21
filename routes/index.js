const express = require("express");

const indexController = require("../controllers/indexController");

const router = express.Router();

router.post("/submit-data", indexController.responses);

module.exports = router;
