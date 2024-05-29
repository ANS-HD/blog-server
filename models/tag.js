const { DataTypes, Model } = require("sequelize");
const sequelize  = require("../config/db.config")
class Tag extends Model {}
const { Sequelize } = require("sequelize")

Tag.init(
  {
    tagName: {
      comment: "标签名称",
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    isDeleted: {
      comment: "是否已经删除",
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "Tag",
    timestamps: false, // 禁用自动生成的 createdAt 和 updatedAt 列
  }
);


module.exports = Tag;
