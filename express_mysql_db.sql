-- # 创建空数据库
-- DROP DATABASE IF EXISTS express_mysql_db;
-- CREATE DATABASE express_mysql_db;

USE mydb_one;

# 创建 user 表
/* CREATE TABLE tags (
id INT AUTO_INCREMENT PRIMARY KEY,
tagName VARCHAR(255) NOT NULL,
isDeleted BOOLEAN NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
); */

/* # 插入三条测试用数据
INSERT INTO tags (tagName, isDeleted) VALUES
('Tag1', false),
('Tag2', false),
('Tag3', false); */

CREATE TABLE blogs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  content TEXT NOT NULL,
  tags VARCHAR(255),
  images TEXT, 
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO blogs (title, description, content, tags, images) VALUES 
('First Blog Post', 'This is the first blog post description.', 'Content of the first blog post.', 'tech,news', '["https://example.com/image1.jpg", "https://example.com/image2.jpg"]'),
('Second Blog Post', 'This is the second blog post description.', 'Content of the second blog post.', 'lifestyle,health', '["https://example.com/image3.jpg", "https://example.com/image4.jpg"]');
