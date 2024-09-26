const express = require('express')
const router = express.Router()
const createController = require('../controllers/createController')

// 创建博客
router.post('/blog', createController.createBlog)

module.exports = router