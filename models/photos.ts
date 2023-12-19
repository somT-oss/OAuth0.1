import sequelize from "../src/sequelize";
import { DataTypes } from "sequelize";
import Users from "./users";

const Photo = sequelize.define('photos', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    photo_url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        'tableName': 'photos'
    }
)

Users.hasMany(Photo);
Photo.hasOne(Users);

export default Photo;