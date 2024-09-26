const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db.config')

// 定义一个 Blog 模型
class Create extends Model { }

// 初始化模型
Create.init({
  // 定义模型属性
  title: {
    type: DataTypes.STRING,
    allowNull: false, // 标题不能为空
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true, // 描述不能为空
  },
  content: {
    type: DataTypes.TEXT, // 内容可以是很长的文本
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING, // 标签可以是逗号分隔的字符串
    allowNull: true
  },
  images: {
    type: DataTypes.ARRAY(DataTypes.STRING), // 存储多个图片链接
    allowNull: true,
  },
}, {
  sequelize, // Sequelize 实例
  modelName: 'Create', // 模型名称
  tableName: 'blogs', // 指定表名（可选）
  timestamps: true, // 自动生成 createdAt 和 updatedAt
});

module.exports = Create;
