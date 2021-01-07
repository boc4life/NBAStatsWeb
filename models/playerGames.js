module.exports = (sequelize, DataTypes) => {
    const PlayerGame = sequelize.define('PlayerGame', {
        minutes: DataTypes.INTEGER,
        fga: DataTypes.INTEGER,
        fgm: DataTypes.INTEGER,
        tpa: DataTypes.INTEGER,
        tpm: DataTypes.INTEGER,
        fta: DataTypes.INTEGER,
        ftm: DataTypes.INTEGER,
        points: DataTypes.INTEGER,
        rebounds: DataTypes.INTEGER,
        assists: DataTypes.INTEGER,
        steals: DataTypes.INTEGER,
        blocks: DataTypes.INTEGER,
        turnovers: DataTypes.INTEGER,
        opponent: DataTypes.STRING,
        doubleDouble: DataTypes.INTEGER,
        tripleDouble: DataTypes.INTEGER,
        date: DataTypes.DATE
    }, {underscored: false});
    PlayerGame.associate = models => {
        PlayerGame.belongsTo(models.Player);
    }
    return PlayerGame;
}