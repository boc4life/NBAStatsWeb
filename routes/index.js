const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../nba-stats-web/build/index.html"));
})

module.exports = router;