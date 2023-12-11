const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
  getAllArtworks,
  getArtwork,
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

//When user clicks upload, it should get his user_id and
//assign the artwork an id, then ask for all other columns and 
//assign the values to that artwork
router.get('/', getAllArtworks)
//change back to artwork id
router.get('/:artwork_url', getArtwork)
//add a /uploads
router.post('/uploads/:artwork_url', createArtwork)
router.put('/:artwork_id', updateArtwork)
router.delete('/:artwork_id', deleteArtwork) 

//router.route('/').get(getUsers).post(createUser)
//router.route('/postman').post(createUserPostman)
//router.route('/:user_id').put(updateUser).delete(deleteUser)

module.exports = router