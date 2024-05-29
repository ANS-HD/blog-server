const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

async function register(req, res) {
  const { username, password, nickname } = req.body
  console.log(req.body)
  try {
    // 检查用户名是否已存在
    const existingUser = await User.findOne({ where: { username } })
    if (existingUser) {
      return res.status(400).json({
        data:{
          message: '用户已经存在！',
          status: 400,
        }
      })
    }

    // 对密码进行加密处理
    const hashedPassword = await bcrypt.hash(password, 10)

    // 创建新用户
    await User.create({ username, password: hashedPassword, nickname })
    const token = jwt.sign({ userId: user.id }, 'ans-hd-blog', {
      expiresIn: '24h',
    })
    res.status(201).json({data:{
      token,
      status: 201,
    }})
  } catch (error) {
    res.status(500).json({data:{
      message: 'failed to register',
      status: 500
    }})
  }
}

async function login(req, res) {
  const { username, password } = req.body

  try {
    // 检查用户名是否存在
    const user = await User.findOne({ where: { username } })
    if (!user) {
      const data = {
        message: '账号或密码错误！！！',
        status: 401,
      }
      return res.status(401).json({data})
    }

    // 检查密码是否匹配
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
      const data = {
        message: '账号或密码错误！！！',
        status: 401,
      }
      return res.status(401).json({data})
    }

    // 更新用户的最后在线时间
    user.lastOnlineTime = new Date()
    await user.save()

    // 创建 token 访问令牌
    const token = jwt.sign({ userId: user.id }, 'ans-hd-blog', {
      expiresIn: '24h',
    })

    const data = {
      token,
      account: user.username,
      nickname: user.nickname,
      userId: user.id,
      status: 200,
    }

    // 返回包含令牌、账号名和用户名的响应
    res.json({data})
  } catch (error) {
    res.status(500).json({data:{ msg: 'Failed to log in' }})
  }
}

module.exports = { register, login }
