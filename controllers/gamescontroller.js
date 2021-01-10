const db = require("../models");
const { Op } = require("sequelize");

module.exports = {
    tonight: (req, res) => {
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth();
        const year = today.getFullYear();

        if (day < 10) {
            db.DKSalary.findAll({
                attributes: [[db.DKSalary.sequelize.fn('DISTINCT', db.DKSalary.sequelize.col('gameInfo')), 'gameInfo']],
                where: {
                    gameInfo: {
                        [Op.like]: `%${month + 1}/0${day}/${year}%`
                    }
                }
            }).then(data => {
                res.json(data);
            })
        }

        else {
            db.DKSalary.findAll({
            attributes: [[db.DKSalary.sequelize.fn('DISTINCT', db.DKSalary.sequelize.col('gameInfo')), 'gameInfo']],
            where: {
                gameInfo: {
                    [Op.like]: `%${month + 1}/${day}/${year}%`
                    }
                    }
                }).then(data => {
                    res.json(data);
                })
        }
    }
}