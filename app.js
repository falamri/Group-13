const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const logger = require('./logger');
const bodyParser = require('body-parser');

const app = express();

//routers
const users = require('./routes/users');
const auth = require('./routes/auth');
const artists = require('./routes/artists');



var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "QkUyVE5z!8L96J7GT(",
  database: "art"
});

db.connect();


//
//app.use(logger)

//static assets
app.use(express.static('./public'))

//parse form data
app.use(bodyParser.urlencoded({ extended: true }));//false to return strings, true for all types 

//user table data
app.use('/data/user', users)

//login
app.use('/login', auth)

//artist table data
app.use('/artist', artists)


//home page
app.get('/index', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/index.html'))
})

//explore page
app.get('/explore', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/exploreArt.html'))
})



/*
app.get('/data/user/query', (req, res)=>{
  const {search, limit} = req.query
  let sortedProducts = {...products}

  if(search){
    sortedProducts = sortedProducts.filter((product)=>{
      return product.name.startsWith(search)
    })
  }

  if(limit){
    sortedProducts = sortedProducts.slice(0,Number(limit))
  }

  if(sortedProducts.length < 1){
    return res.send(200).json({success: true, data: []})
  }

  res.status(200).json(sortedProducts)

})
*/

const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key';

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM users WHERE username = ?', [username], (error, results, fields) => {
      if (error) {
          return res.status(500).json({ error: 'Something went wrong' });
      }

      if (results.length > 0) {
          return res.status(400).json({ error: 'Username already exists' });
      }

      db.query('INSERT INTO users SET ?', { username, password }, (error, results, fields) => {
          if (error) {
              return res.status(500).json({ error: 'Something went wrong' });
          }

          const user = { id: results.insertId, username, password };

          res.status(201).json({ user });
      });
  });
});


//user
app.get('/data/car/query', (req, res) => {
  const { search, limit } = req.query;
  let sql = 'SELECT * FROM user';
  
  if (search) {
     sql += ` WHERE fname LIKE '${search}%'`;
  }
 
  if (limit) {
     sql += ` LIMIT ${limit}`;
  }
 
  let query = db.query(sql, (err, results) => {
     if (err) throw err;
     if (results.length === 0) {
       return res.status(200).json({ success: true, data: [] });
     }
     
     res.status(200).json(results);
  });
 });







/*specific review id
app.get('/data/user/:user_id/review/:reviewID', (req, res) => {
  const sql = 'SELECT username, rating, comment, date FROM review WHERE user_id = ?';
  let query = db.query(sql, req.params.user_id, (err, results) => {
      if (err) throw err;

      if(results.length === 0){
        return res.status(404).send('User Does Not Exist')
      }

      res.send(results);

  });
});
*/
 
  app.all('*', (req, res) => {
    res.status(404).send('<h1> resource not found </h1>')
  })

  // Start the server
  const port = 3000;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });