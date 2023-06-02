const express = require('express');
const User = require('../model/user');
const router = express.Router()

module.exports = router;

router.post('/login', async (req, res) => {
    const {session} = req;
    const { username, password } = req.body;

    // check if user in database
    const user = await User.findOne({ username });
    
    if (!user)
      return res.json({ msg: "Incorrect Username ", status: false });
    else if (user.password !== password)
      return res.json({ msg: "Incorrect Password", status: false });
    else {
      session.authenticated = true;
      session.username = username;
      res.json({ msg: "Logged in", status: true });
    }
});

// Set up a route for the logout page
router.get('/logout', (req, res) => {
    // Clear the session data and redirect to the home page
    req.session.destroy();
    res.send({msg: "Logged out", status: true})
  });

router.post('/signup', async (req, res)=>{
  console.log("user is trying to signup")
  const {username, password, name} = req.body;
  console.log(username, password, name)
  const user = new User ({
      username: username,
      password: password,
      name: name
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

