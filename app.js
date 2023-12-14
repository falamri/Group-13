const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const logger = require('./logger');
const bodyParser = require('body-parser');

const app = express();

//routers
const users = require('./routes/users');
const artists = require('./routes/artists');
const artworks = require('./routes/artworks');
const orders = require('./routes/orders');
const admins = require('./routes/admins');
const reviews = require('./routes/reviews');
const searches = require('./routes/searches');
const auth = require('./routes/auth');




var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "QkUyVE5z!8L96J7GT(",
  database: "art"
});

db.connect();


//app.use(logger)

//static assets
app.use(express.static('./public'))

//parse form data
app.use(bodyParser.urlencoded({ extended: true }));//false to return strings, true for all types 


//---------
//user table data router
app.use('/users', users)

//artist table data
app.use('/artists', artists)

//artworks table data
app.use('/artworks', artworks)

//orders table data
app.use('/orders', orders)

//admins table data
app.use('/admins', admins)

//reviews table data
app.use('/reviews', reviews)

//login
app.use('/login', auth)

//search
app.use('/search', searches)
//---------


//Login/signup page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/login_signup.html'))
})

//home page
app.get('/home', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/index.html'))
})

//about us page
app.get('/about', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/about.html'))
})

//explore page
app.get('/explore', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/exploreArt.html'))
})

//contact us page
app.get('/contact_us', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/contact_us.html'))
})

app.get('/seller', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/artist_seller_page.html'))
})

//search Page
app.get('/searchPage', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/searchPage.html'))
})

app.get('/user', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/artist_user_page.html'))
})

app.get('/artworkDetails', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/artworkDetails.html'))
})

app.get('/artistDetails', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/artistDetails.html'))
})



app.get('/mock', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Main/mock.html'))
})


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