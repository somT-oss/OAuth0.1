import { DataTypes } from 'sequelize';
import sequelize from "../src/sequelize";

const Company = sequelize.define("Company", {
    companyName: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    }, 
    companyDescription: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    secretId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    clientId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    redirectUrl: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    companyLogo: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    }
    
});

export default Company;