const express = require('express');
const router = express.Router();
const User = require('../models/user')

module.exports = router;

router.get('/router', (req, res)=>{
    res.send("in router")
})

router.get('/login', (req, res)=>{
    console.log("handling Get request");
    if (req.session && req.session.authenthicated){
        res.redirect("/");
    }
    else{
        res.send(`
        <form method="post" action="/api/auth/login">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password">
          <input type="submit" value="Login">
        </form>
      `)
    }
})

router.post('/login', async(req, res)=>{
    const {session} = req;
    const {username, password} = req.body;
    console.log(username + " " + password)
    const user = await User.findOne({username})
    console.log('user' + user)
    if (!user)
        return res.send("no such user");
    else if (user.password !== password)
        return res.send("wrong pass")
    else
    {
        session.authenthicated = true;
        session.username = user.username;
        res.redirect('/');
    }
})

router.get('/signup', (req, res)=>{
        res.send(`
        <form method="post" action="/api/auth/signup">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password">
          <input type="submit" value="Login">
        </form>
      `)
})

router.post('/signup',  async (req, res)=>{
    const {username, password} = req.body;
    const user = new User ({
        username: username,
        password: password
    })

    try{
        const dataSaved = await user.save();
        res.status(200).json(dataSaved);
    }
    catch (error){
        console.log(error);
        res.send("ERROR!")
    }
})

router.get('/logout', (req, res)=>{
    req.session.destroy();
    res.redirect("/");
})