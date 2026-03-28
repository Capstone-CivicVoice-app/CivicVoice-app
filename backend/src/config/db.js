const mysql = require("mysql2/promise");
const { Connect } = require("vite");

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnetions: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;