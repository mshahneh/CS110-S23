// an example of a CSRF attack
// this is the vuanrable website

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
          <form action="/comments" method="POST">
            <input  name="comment"></input >
            <button type="submit">Submit</button>
            </form>
            </body>
            </html>
            `);
}
);

app.post('/comments', function(req, res) {
    res.cookie('comment', req.body.comment);
    res.redirect('/comments');
});

app.get('/comments', function(req, res) {
    res.send(`
    <html>
        <head>
            <title>Comments</title>
        </head>
        <body>
            <h1>Comments</h1>
            <ul>
                <li>${req.cookies.comment}</li>
            </ul>
        </body>
    </html>
    `);
}
);

app.listen(3000, function() {
    console.log('Listening on port 3000!');
});