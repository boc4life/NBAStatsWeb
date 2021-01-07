module.exports = (sequelize, DataTypes) => {
    const Player = sequelize.define('Player', {
        name: DataTypes.STRING,
        position: DataTypes.STRING,
        team: DataTypes.STRING
    }, {underscored: false});
    Player.associate = models => {
        Player.hasMany(models.DKSalary);
        Player.hasMany(models.PlayerGame);
    }
    return Player;
}