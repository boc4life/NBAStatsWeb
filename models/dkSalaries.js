module.exports = (sequelize, DataTypes) => {
    const DKSalary = sequelize.define('DKSalary', {
        position: DataTypes.STRING,
        name: DataTypes.STRING,
        position: DataTypes.STRING,
        salary: DataTypes.INTEGER,
        gameInfo: DataTypes.STRING,
        teamAbbrev: DataTypes.STRING,
        avgPointsPerGame: DataTypes.DECIMAL(5,2)
    }, {underscored: false, timestamps: false});
    DKSalary.associate = models => {
        DKSalary.belongsTo(models.Player);
    }
    return DKSalary;
}