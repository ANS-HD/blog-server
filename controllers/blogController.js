const Blog = require("../models/Blog");

async function createBlog(req, res) {
    try {
      const { title, content, coverImage, tags } = req.body;
  
    //   // 查询标签是否存在
    //   const existingTags = await Tag.findAll({
    //     where: { name: tags },
    //   });
  
    //   if (existingTags.length === 0) {
    //     return res.status(404).json({ error: "Tags not found" });
    //   }
  
      // 创建博客记录
      const newBlog = await Blog.create({
        title,
        content,
        coverImage,
        // 在鉴权中间件中我们挂载了用户信息在 req 中
        userId: req.user.userId,
        isDeleted: false,
      });
  
      // 关联标签和博客
      await newBlog.setTags(existingTags);
  
      // 返回创建的博客记录
      res.json(newBlog);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  