var express = require('express');
var router = express.Router();
var moment = require('moment')

const name = process.env.MY_NAME || `[Name not set in environment variables]`


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('root', {
        title: 'Express'
    });
});

router.get("/hello", function (req, res) {
    res.setHeader('content-type', 'application/json');
    res.send(JSON.stringify({
        message: `[Using Router]. Hello ${name}. The time is now ${moment().format("LLLL")}`
    }));
});

router.post("/subject", (req, res) => {
    res.send(JSON.stringify({
        subject: `dummy`,
        transaction_id: req.query[`transaction_id`],
        created_date: `${moment().format("LLL")}`
    }));
});

router.get("/subject", (req, res) => {
    res.send(JSON.stringify({
        subject: `dummy`,
        transaction_id: req.query[`transaction_id`],
        created_date: `${moment().format()}`
    }));
});

module.exports = router;