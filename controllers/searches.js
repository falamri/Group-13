const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();

//http://localhost:3000/search?query=1 & etc..

const getSearch = (req, res) => {
  const { query, filter, limit } = req.query;
  let sql = 'SELECT * FROM art.artist AS a JOIN art.user AS u ON a.user_id = u.user_id';

  // Add query condition if provided
  if (query) {
    sql += ` WHERE 
      a.artist_id LIKE '%${query}%' OR 
      a.insta LIKE '%${query}%' OR 
      u.fname LIKE '%${query}%' OR 
      u.lname LIKE '%${query}%' OR 
      u.username LIKE '%${query}%'`;
  }

  if (filter) {
    sql += ` ORDER BY ${filter}`;
  }

  // Limit the number of results if 'limit' is provided
  if (limit) {
    sql += ` LIMIT ${Number(limit)}`;
  }

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    if (results.length < 1) {
      res.status(200).json({ success: true, data: [] });
    } else {
      res.status(200).json(results);
    }
  });
};


module.exports = {
  getSearch,
};