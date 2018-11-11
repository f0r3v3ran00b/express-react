var express = require('express');
var router = express.Router();

// Typically mounted at `users`, so remember to add `users` to URL as prefix.
// Example /users/sanju/vices/women and /users

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// Example using route parameters also request parameters! confusing sometimes...
// Will resolve to, say, http://localhost:3000/users/sanju/vices/wine
router.get("/:userid/vices/:viceid", (req, res) => {
    console.log(`Request params: ${req.params}`);
    res.send(JSON.stringify({
        user: `${req.params.userid}`,
        vice: `${req.params.viceid}`
    }))
});

module.exports = router;
