const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
    tonight: (req, res) => {
        const team = req.params.team;
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();
        console.log(team)

        if (day < 10) {
            db.DKSalary.findAll({
                attributes: ["name", "position", "salary", "avgPointsPerGame"],
                where: {
                    date: `${month + 1}/0${day}/${year}`,
                    teamAbbrev: team
                }
            }).then(data => {
                res.json(data);
            })
        }

        else {
            db.DKSalary.findAll({
                attributes: ["name", "position", "salary", "avgPointsPerGame"],
                where: {
                    date: `${month + 1}/${day}/${year}`,
                    teamAbbrev: team
                }
            }).then(data => {
                res.json(data);
            })
        }
    }
}