// var express = require('express');
// var router = express.Router();
// var db = require('../config/db')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
// db.query(createTableSQL, (err, result) => {
//   if (err) {
//     throw err;
//   }
//   console.log('ev_users表已创建');
// });
//   res.send('respond with a resource');
// });

// // const createTableSQL = `
// //   CREATE TABLE IF NOT EXISTS ev_users (
// //     id int(11) NOT NULL AUTO_INCREMENT,
// //   username varchar(100),
// //   title varchar(100),
// //   content varchar(9999),
// //   time varchar(99),
// //   PRIMARY KEY (`id`)
// //   )
// // `;

// // db.query(createTableSQL, (err, result) => {
// //   if (err) {
// //     throw err;
// //   }
// //   console.log('ev_users表已创建');
// // });

// router.post('/addUser',(req, res) => {
//   const {  username, password, nickname, email, user_pic } = req.body

//   const insertData = {
//     username,
//     password,
//     nickname,
//     email,
//     user_pic,
//   };

//   const insertSQL = 'INSERT INTO ev_users SET ?';
  
//   db.query(insertSQL, insertData, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log('数据已成功插入');
//     res.send('数据已成功插入');
//   });
// })

// router.get('/userList', (req, res, next) => {
//   const params = req.query
//   console.log(params);
//   // sql查询user表
//   db.query('SELECT * FROM user', [], function (results, fields) {
//     // 以json的形式返回
//     res.json({ results })
//   })
// })

// module.exports = router;
