const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
  getAllArtists,
  getArtist,
  createArtist,
  updateArtist,
  deleteArtist,
} = require('../controllers/artists')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();


router.get('/', getAllArtists)
router.get('/:artist_id', getArtist)
router.post('/', createArtist)
router.put('/:artist_id', updateArtist)
router.delete('/:artist_id', deleteArtist) 

//router.route('/').get(getUsers).post(createUser)
//router.route('/postman').post(createUserPostman)
//router.route('/:user_id').put(updateUser).delete(deleteUser)

module.exports = router