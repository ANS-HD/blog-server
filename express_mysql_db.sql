-- # 创建空数据库
-- DROP DATABASE IF EXISTS express_mysql_db;
-- CREATE DATABASE express_mysql_db;

USE mydb_one;

# 创建 user 表
CREATE TABLE tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  tagName VARCHAR(255) NOT NULL,
  isDeleted BOOLEAN NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

# 插入三条测试用数据
INSERT INTO tags (tagName, isDeleted) VALUES
  ('Tag1', false),
  ('Tag2', false),
  ('Tag3', false);