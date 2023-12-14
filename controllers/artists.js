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

//http://localhost:3000/artists?query=1 & etc..

const getAllArtists = (req, res) => {
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


const createArtist = (req, res) => {
  const { artist_name, artist_genre } = req.body;

  if (!artist_name || !artist_genre) {
    return res.status(400).json({ success: false, msg: 'Please provide both artist name and genre' });
  }

  const sql = 'INSERT INTO art.artist (artist_id, insta) VALUES (?, ?)';
  db.query(sql, [artist_name, artist_genre], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, msg: 'Error creating artist' });
    }
    res.status(201).json({ success: true, msg: 'Artist created successfully', artist_id: result.insertId });
  });
};

const updateArtist = (req, res) => {
  const { artist_id } = req.params;
  const { artist_name, artist_genre } = req.body;

  if (!artist_name && !artist_genre) {
    return res.status(400).json({ success: false, msg: 'Please provide at least one field to update' });
  }

  const updateValues = [];
  let updateQuery = 'UPDATE art.artist SET ';

  if (artist_name) {
    updateQuery += 'insta = ?, ';
    updateValues.push(artist_name);
  }

  if (artist_genre) {
    updateQuery += 'dgfg = ?, ';
    updateValues.push(artist_genre);
  }

  updateQuery = updateQuery.slice(0, -2); // Remove the trailing comma and space
  updateQuery += ' WHERE artist_id = ?';
  updateValues.push(artist_id);

  db.query(updateQuery, updateValues, (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, msg: 'Error updating artist' });
    }
    res.status(200).json({ success: true, msg: 'Artist updated successfully' });
  });
};

const deleteArtist = (req, res) => {
  const artistId = req.params.artist_id;

  const deleteQuery = 'DELETE FROM art.artist WHERE artist_id = ?';
  db.query(deleteQuery, [artistId], (err, result) => {
    if (err) {
      return res.status(500).json({ success: false, msg: 'Error deleting artist' });
    }
    res.status(200).json({ success: true, msg: 'Artist deleted successfully' });
  });
};

module.exports = {
  getAllArtists,
  //getArtist,
  createArtist,
  updateArtist,
  deleteArtist,
};