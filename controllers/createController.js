const Create = require('../models/create')

async function createBlog(req, res) {
    try {
        const { title, content } = req.body
        console.log(req.headers);

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' })
        }
        const newBlog = await Create.create({
            title,
            content,
            // userId: req.user.userId,
            isDeleted: false
        })

        res.json(newBlog)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createBlog
}