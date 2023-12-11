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

const getUsers = (req, res) => {
    const sql = 'SELECT * FROM user';
    let query = db.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(results);
    });
}


//make it check if username is already in database
const createUser = (req, res) => {
    const { username, password } = req.body;
  
    // Check if both username and password are provided
    if (!username || !password) {
      return res.status(400).json({ success: false, msg: 'Please provide both username and password' });
    }
  
    // Insert the user into the database
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, msg: 'Error creating user' });
      }
  
      // If user creation is successful, return success message
      res.status(201).json({ success: true, msg: 'User created successfully', user_id: result.insertId });
    });
}


const createUserPostman = (req, res) => {
    const { username, password } = req.body;
  
    // Check if both username and password are provided
    if (!username || !password) {
      return res.status(400).json({ success: false, msg: 'Please provide both username and password' });
    }
  
    // Insert the user into the database
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(sql, [username, password], (err, result) => {
      if (err) {
        return res.status(500).json({ success: false, msg: 'Error creating user' });
      }
  
      // If user creation is successful, return success message
      res.status(201).json({ success: true, msg: 'User created successfully', user_id: result.insertId });
    });
}


const updateUser = (req, res) => {
    const { id } = req.params;
    const { name, username, email } = req.body;
  
    // Check if at least one field is provided
    if (!name && !username && !email) {
      return res.status(400).json({ success: false, msg: 'Please provide at least one field to update' });
    }
  
    // Check for duplicate username or email in the database
    const selectQuery = 'SELECT * FROM user WHERE (username = ? OR email = ?) AND user_id != ?';
    db.query(selectQuery, [username, email, id], (selectErr, selectResults) => {
      if (selectErr) {
        return res.status(500).json({ success: false, msg: 'Error checking for duplicates' });
      }
  
      // If duplicates found, send error response
      if (selectResults.length > 0) {
        return res.status(400).json({ success: false, msg: 'Username or email already exists' });
      }
  
      // Update user's information in the database
      const updateQuery = 'UPDATE user SET name = ?, username = ?, email = ? WHERE user_id = ?';
      const updateValues = [name, username, email, id];
      db.query(updateQuery, updateValues, (updateErr, updateResult) => {
        if (updateErr) {
          return res.status(500).json({ success: false, msg: 'Error updating person' });
        }
  
        // If update is successful, return success message
        res.status(200).json({ success: true, msg: 'Person updated successfully' });
      });
    });
}


const deleteUser = (req, res) => {
    const userId = req.params.user_id;
  
    // Check if user exists before deleting
    const selectQuery = 'SELECT * FROM user WHERE user_id = ?';
    db.query(selectQuery, [userId], (selectErr, selectResults) => {
      if (selectErr) {
        return res.status(500).json({ success: false, msg: 'Error checking user' });
      }
  
      // If user does not exist, send error response
      if (selectResults.length === 0) {
        return res.status(400).json({ success: false, msg: 'User does not exist' });
      }
  
      // Delete user from the database
      const deleteQuery = 'DELETE FROM user WHERE user_id = ?';
      db.query(deleteQuery, [userId], (deleteErr, deleteResult) => {
        if (deleteErr) {
          return res.status(500).json({ success: false, msg: 'Error deleting user' });
        }
  
        // If deletion is successful, return success message
        res.status(200).json({ success: true, msg: 'User deleted successfully' });
      });
    });
  }

module.exports = {
    getUsers,
    createUser,
    createUserPostman,
    updateUser,
    deleteUser,
}