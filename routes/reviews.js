const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
    getAllReviews,
    getReview,
    createReview,
    updateReview,
    deleteReview,
} = require('../controllers/reviews')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();


router.get('/', getAllReviews)
router.get('/:review_id', getReview)
router.post('/', createReview)
router.put('/:review_id', updateReview)
router.delete('/:review_id', deleteReview) 


module.exports = router