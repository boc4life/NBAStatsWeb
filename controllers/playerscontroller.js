const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
    getPlayerGames: (req, res) => {
        db.PlayerGame.findAll({
            include: [db.Player],
            where: {
                playerId: req.params.player
            }
        }).then(data => {
            res.json(data);
        })
    }
}