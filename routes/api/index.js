const router = require("express").Router();
const gameRoutes = require("./games");
const teamRoutes = require("./teams");

router.use("/games", gameRoutes);
router.use("/teams", teamRoutes);

module.exports = router;