const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
  getArtist,
  createUser,
  createUserPostman,
  updateUser,
  deleteUser,
} = require('../controllers/artists')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();


router.get('/', getArtist)
router.post('/', createUser)
router.post('/postman', createUserPostman)
router.put('/:user_id', updateUser)
router.delete('/:user_id', deleteUser) 

//router.route('/').get(getUsers).post(createUser)
//router.route('/postman').post(createUserPostman)
//router.route('/:user_id').put(updateUser).delete(deleteUser)

module.exports = router