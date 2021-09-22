import sequelize from "sequelize";
import db from "../config/databese.js";

const { DataTypes } = sequelize;

const products =db.define('products', {
    title:{
        type:DataTypes.STRING
    },
    price:{
        type:DataTypes.DOUBLE
    }
},{
    freezeTableName: true
});

export default products;