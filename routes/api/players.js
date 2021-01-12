const router = require("express").Router();

const playersController = require("../../controllers/playerscontroller");

router.route("/:player")
    .get(playersController.getPlayerGames);

module.exports = router;