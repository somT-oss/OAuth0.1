import sequelize from "../src/sequelize";
import { DataTypes } from "sequelize";

const Users = sequelize.define('users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        'tableName': 'users'
    }
)

export default Users;