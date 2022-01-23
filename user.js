const {DataTypes, Model, STRING} = require('sequelize');
const sequelize = require('./config');

class User extends Model{}

User.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
  },
  { sequelize,
    timestamps:false,
    modelName: "user"
  });

  export default User;