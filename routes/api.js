var express = require('express');
var router = express.Router();
const generatePassword = require('password-generator');


// Remember, this route is most likely mounted on 'api', so endpoints will have 
// 'api' as the prefix. e.g /api/passwords

router.get('/passwords', (req, res) => {
    const count = 5;
    // Generate some passwords
    const passwords = Array.from(Array(count).keys()).map(i =>
        generatePassword(12, false)
    )
    // Return them as json
    res.json(passwords);
    console.log(`Sent ${count} passwords`);
});

module.exports = router;
