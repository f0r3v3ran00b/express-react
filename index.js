const express = require('express');
const path = require('path');
const generatePassword = require('password-generator');
var createError = require('http-errors');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
const serverless = require('serverless-http');

var rootRouter = require('./routes/root');
var usersRouter = require('./routes/users');
var vicesRouter = require('./routes/vices');
var apiRouter = require('./routes/api');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
app.use('/misc', rootRouter);
app.use('/users', usersRouter);
app.use('/vices', vicesRouter);
app.use('/api', apiRouter);

/*
app.use(function (req, res, next) {
    next(createError(404));
});
*/

/*
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
*/

// Put all API endpoints under '/api' The "catchall" handler: for any request
// that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);

module.exports = app;
module.exports.handler = serverless(app);