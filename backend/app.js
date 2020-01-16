var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* ROUTERS */
let alumno_router = require('./routes/alumno');

/* USO DE LAS ROUTAS */
app.use('/alumno', alumno_router);

/* DEFAULT PAGE */ 
app.get('/', (req,res) =>{
  res.send("index. <br> en ningun router. <br> en ningun controller.");
});

// ERROR SI NO ENTRA EN NINGUN ROUTER
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  next(createError(500));
});

module.exports = app;
