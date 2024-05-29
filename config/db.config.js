// module.exports = {
//     host: 'localhost',
//     user: 'root',
//     password: 'hhdd2023@',
//     port: '3306',
//     database: 'mydb_one'
// }

const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(
    "mydb_one", "root", "hhdd2023@", {
        host: 'localhost',
        port:'3306',
        dialect: 'mysql'
    }
)

module.exports = sequelize