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
        date: DataTypes.DATE,
        fantasyPoints: {
            type: DataTypes.VIRTUAL,
            get() {
                return this.getDataValue("points") + (this.getDataValue("rebounds") * 1.25) + (this.getDataValue("assists") * 1.5) + (this.getDataValue("steals") * 2) + (this.getDataValue("blocks") * 2) + (this.getDataValue("doubleDouble") * 1.5) + (this.getDataValue("tripleDouble") * 3) + (this.getDataValue("tpm") * .5) - (this.getDataValue("turnovers") * 5)
            }
        }
    }, {underscored: false, timestamps: false});
    PlayerGame.associate = models => {
        PlayerGame.belongsTo(models.Player);
    }
    return PlayerGame;
}