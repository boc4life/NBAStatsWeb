const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
    tonight: (req, res) => {
        const team = req.params.team;
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        if (day < 10) {
            db.DKSalary.findAll({
                attributes: ["name", "position", "salary", "avgPointsPerGame", "playerId"],
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
                attributes: ["name", "position", "salary", "avgPointsPerGame", "playerId"],
                where: {
                    date: `${month + 1}/${day}/${year}`,
                    teamAbbrev: team
                }
            }).then(data => {
                res.json(data);
            })
        }
    },

    filterStats: (req, res) => {
        const {players, filterGames} = req.body;
        const promiseArr = [];
        for (let i = 0; i < players.length; i++){
            promiseArr.push(new Promise((resolve, reject) => {
                let obj = {
                    name: players[i].name,
                    playerId: players[i].playerId,
                    position: players[i].position,
                    salary: players[i].salary
                }
                db.PlayerGame.findAll({
                    where: {
                        playerId: players[i].playerId,
                        minutes: {
                            [Op.gt]: 0
                        }
                    },
                    limit: filterGames == "All" ? null : parseInt(filterGames)
                }).then(data => {
                    obj.points = findAverage(data, "points")
                    obj.rebounds = findAverage(data, "rebounds")
                    obj.assists = findAverage(data, "assists")
                    obj.steals = findAverage(data, "steals")
                    obj.blocks = findAverage(data, "blocks")
                    resolve(obj)
                })
            })
        )}
        Promise.all(promiseArr).then(data => {
            res.json({data})
        })
        
    }
}

function findAverage(arr, prop) {
    const { length } = arr;
    return arr.reduce((acc, val) => {
      return acc + (val[prop]/length);
   }, 0);
}