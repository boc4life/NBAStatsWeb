const router = require("express").Router();

const teamsController = require("../../controllers/teamscontroller");

router.route("/tonight/:team")
    .get(teamsController.tonight);

router.route("/filterStats")
    .post(teamsController.filterStats);

module.exports = router;