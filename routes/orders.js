const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
    getAllOrders,
    getOrder,
    createOrder,
    updateOrder,
    deleteOrder,
} = require('../controllers/orders')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();


router.get('/', getAllOrders)
router.get('/:order_id', getOrder)
router.post('/', createOrder)
router.put('/:order_id', updateOrder)
router.delete('/:order_id', deleteOrder) 

module.exports = router