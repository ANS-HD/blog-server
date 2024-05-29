var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
var logger = require('morgan')

var indexRouter = require('./routes/index')
// var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth')
var tagsRouter = require('./routes/tags')
const sequelize = require('./config/db.config')

var app = express()

// 中间件
// 用来解析 post body x-www-form-urlencoded 格式数据
app.use(bodyParser.urlencoded({ extended: false }))
// 用来解析 post body json 格式数据
app.use(bodyParser.json())
// 处理跨域
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// 使用 body-parser 中间件来解析 POST 请求体
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
// app.use('/users', usersRouter);
app.use('/auth', authRouter)
app.use('/tags', tagsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// 数据库同步
sequelize
  .sync()
  .then(() => {
    console.log('Database synced')
  })
  .catch((error) => {
    console.error('Error syncing database:', error)
  })

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
