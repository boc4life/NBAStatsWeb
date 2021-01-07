const router = require("express").Router();

const gamesController = require("../../controllers/gamescontroller");

router.route("/tonight")
    .get(gamesController.tonight);

module.exports = router;