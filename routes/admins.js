const express = require('express')
const router = express.Router()
const mysql = require('mysql2');

const {
    getAllAdmins,
    getAdmin,
    createAdmin,
    updateAdmin,
    deleteAdmin,
} = require('../controllers/admins')


var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "QkUyVE5z!8L96J7GT(",
    database: "art"
  });
  
db.connect();


router.get('/', getAllAdmins)
router.get('/:admin_id', getAdmin)
router.post('/', createAdmin)
router.put('/:admin_id', updateAdmin)
router.delete('/:admin_id', deleteAdmin) 

module.exports = router