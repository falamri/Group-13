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

const getArtworkk = (req, res) => {
    const artworkId = req.params.artwork_id;
    // Use artworkId to fetch data from the database and send it to the front-end
    // Replace the following line with your database query logic
    // const artworkDetails = /* Your database query to get artwork details */;
    res.json(artworkDetails);
  }


  const getAllReviews = (req, res) => {}
  const getReview = (req, res) => {}
  const createReview = (req, res) => {}
  const updateReview = (req, res) => {}
  const deleteReview = (req, res) => {}

module.exports = {
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
}