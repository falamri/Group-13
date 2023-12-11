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


router.post('/', (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
        if (error) {
            return res.status(500).json({ error: 'Something went wrong' });
        }
  
        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
  
        const user = results[0];
        const token = jwt.sign({ id: user.id, username: user.username }, secretKey);
  
        res.json({ user, token });
    });
  });
  
module.exports = router