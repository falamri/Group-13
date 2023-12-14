const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
  getSearch,
} = require('../controllers/searches')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();


router.get('/', getSearch)


module.exports = router