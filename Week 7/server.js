const express = require('express')
const app = express()
const session = require("express-session");
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require("./models/user");


dotenv.config();

app.use(session({
    secret: 'myTempKey',
    resave: false,
    saveUninitialized: false
}));


app.use(bodyParser.urlencoded({extended:true}));

const auth = require('./router/auth')
const posts = require('./router/posts');
app.use('/api/auth', auth);
app.use('/api/posts', posts);


console.log(process.env.MONGO_URL)
mongoose.connect(process.env.MONGO_URL);
const database = mongoose.connection;

database.once('connected', () => {
    console.log('connected to database');
});


app.get('/', (req, res)=>{
    if (req.session && req.session.authenthicated){
        res.send(`welcome old friend ${req.session.username}
        <button> <a href='/api/posts/all'> posts </a> </button>
        ` );
    }
    else{
        res.send("welcome!");
    }
})

app.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect("/");
})

app.listen(3000, () => {
    console.log('server running!');
});