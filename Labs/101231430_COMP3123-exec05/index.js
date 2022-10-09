// import express
const express = require('express');
// import fs module to construct paths
const path = require('path');
// import fs module to read file
const fs = require('fs');

// initialize express app
const app = express();

// create router
const router = express.Router();

// route: /home
router.get('/home', (req, res) => {
  // build the absolute path to home.html file
  // here __dirname refers to current dir name
  const filePath = path.join(__dirname, 'home.html');
  // send html file to client
  res.sendFile(filePath);
});

// route: /profile
router.get('/profile', (req, res) => {
  // build the absolute path to user.json file
  const filePath = path.join(__dirname, 'user.json');
  // read the file
  let data = fs.readFileSync(filePath, { encoding: 'utf8' });
  // since data read would be a string, parse it to Json
  data = JSON.parse(data);
  // send json data to client
  res.json(data);
});

// route: /login
router.get('/login', (req, res) => {
  // get username and password
  const { username, password } = req.query;

  // build the absolute path to user.json file
  const filePath = path.join(__dirname, 'user.json');
  // read the file
  const data = fs.readFileSync(filePath, { encoding: 'utf8' });
  // since data read would be a string, parse it to Json
  const user = JSON.parse(data);

  // declare response variable
  let response;

  // check if username is equal
  if (user.username == username) {
    // if yes, then check if password is equal
    if (user.password == password) {
      // if password is equal, set response accordingly
      response = { status: true, message: 'User Is valid' };
    } else {
      // if password is not equal, set response accordingly
      response = { status: false, message: 'Password is invalid' };
    }
  } else {
    // if username is not equal set response accordingly
    response = { status: false, message: 'User Name is invalid' };
  }

  // return response to client
  res.json(response);
});

// route: /logout
// here :username is url parameter
// if we get a request /logout/bret then username will be bret
router.get('/logout/:username', (req, res) => {
  // get the username
  const username = req.params.username;
  // send response to client
  res.send(`<b>${username} successfully logout.<b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port ' + (process.env.port || 8081));