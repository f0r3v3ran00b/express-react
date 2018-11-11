var express = require('express');
var router = express.Router();
let moment = require('moment');


const name = process.env.MY_NAME || `[Name not set in environment variables]`

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.set({
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.render('vices', {
        vices: ['Wine', 'Women', 'Song']
    });
});

router.get('/notpug', function (req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write('<h1>Pug, not Pug !</h1>');
    res.end();
});

router.get("/somejson", function (req, res) {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({
        message: `Hello ${name}. The time is now ${moment().format("LLLL")}`
    }));
});


module.exports = router;