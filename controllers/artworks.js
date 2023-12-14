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

  const getAllArtworks = (req, res) => {
    const sql = 'SELECT * FROM artwork'; // Select all artworks from the table
    db.query(sql, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
        throw err;
      }
      res.status(200).json(results); // Return artworks as JSON response
    });
  };

  const getArtworkDetails = (req, res) => {
    const artworkId = req.params.artwork_id; // Get artwork_id from URL parameter
    const sql = 'SELECT * FROM artwork WHERE artwork_id = ?'; // Select artwork by ID
    db.query(sql, artworkId, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal server error' });
        throw err;
      }
      if (results.length === 0) {
        res.status(404).json({ error: 'Artwork not found' });
      } else {
        res.status(200).json(results[0]); // Return artwork details as JSON response
      }
    });
  };

  
  const createArtwork = (req, res) => {
    const imageUrl = `/uploads/${req.file.filename}`;
    // Save image URL to database
    // const sql = 'INSERT INTO artwork (image_url) VALUES (?)';
    // db.query(sql, [imageUrl], (err, result) => {
    //   if (err) throw err;
    //   res.send('Artwork created!');
    // });
  };
  

  const updateArtwork = (req, res) => {}
  const deleteArtwork = (req, res) => {}

module.exports = {
    getAllArtworks,
    getArtworkDetails,
    createArtwork,
    updateArtwork,
    deleteArtwork,
}