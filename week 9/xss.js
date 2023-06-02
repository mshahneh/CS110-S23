const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const comments = [];

// Express route handler
app.post('/comments', (req, res) => {
    const commentContent = req.body.comment; 
    comments.push(commentContent);
    res.redirect('/comments');
});

app.get('/', (req, res) => {
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
});

app.get('/comments', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>Comments</title>
        </head>
        <body>
            <h1>Comments</h1>
            <ul>
                ${comments.map(comment => `<li>${comment}</li>`).join('')}
            </ul>
        </body>
    </html>
    `);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});


//<script>alert('XSS Attack!');</script>