// example for dos attack
// this is the vulnerable website

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());;

// Express route handler
app.get('/website', (req, res) => {
    console.log("website")
  // Simulate a delay in processing the request
  setTimeout(() => {
    res.send('Welcome to the website!');
  }, 5000); // Delay the response by 5 seconds
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});