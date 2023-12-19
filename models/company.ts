import { DataTypes } from 'sequelize';
import sequelize from "../src/sequelize";

const Company = sequelize.define("company", {
    company_name: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true
    }, 
    company_description: {
        type: DataTypes.STRING,
        allowNull: false,
    }, 
    secret_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    client_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    redirect_url: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    company_logo: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    }
    
},
    {
        'tableName': 'company',
    }
);



export default Company;