const router = require("express").Router();
const gameRoutes = require("./games");
const teamRoutes = require("./teams");
const playerRoutes = require("./players");

router.use("/games", gameRoutes);
router.use("/teams", teamRoutes);
router.use("/players", playerRoutes);

module.exports = router;