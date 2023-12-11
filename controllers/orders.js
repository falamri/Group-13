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


  const getAllOrders = (req, res) => {}
  const getOrder = (req, res) => {}
  const createOrder = (req, res) => {}
  const updateOrder = (req, res) => {}
  const deleteOrder = (req, res) => {}

module.exports = {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
}