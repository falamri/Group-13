const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
  getAllArtworks,
  getArtworkDetails,
  createArtwork,
  updateArtwork,
  deleteArtwork,
} = require('../controllers/artworks')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();

router.get('/', getAllArtworks)


router.get('/:artwork_id', getArtworkDetails)
router.post('/uploads/:artwork_url', createArtwork)
router.put('/:artwork_id', updateArtwork)
router.delete('/:artwork_id', deleteArtwork) 



module.exports = router