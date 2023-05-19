const express = require('express');
const router = express.Router();

const posts = {"p1":"post1", "p2":"post2", "p3":"post3"}

module.exports = router;

router.use((req, res, next) => {
    if (req.session && req.session.authenthicated)
        next();
    else
        return res.send("Not logged in!");
})

router.get("/all", (req, res)=>{
    res.send(posts);
})

router.get('/:postid', (req, res)=>{
    res.send(posts[req.params.postid]);
})

