var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require(`./dao/database`);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var classRouter = require('./routes/class');
var teachersRouter = require('./routes/teachers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//用于配置ajax请求的一级路径
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/class', classRouter);
app.use('/teachers', teachersRouter);

// catch 404 and forward to error handler
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
	res.render('error');
});

//module.exports = app;
//更改项目启动命令
app.listen(3000, () => {
	console.log("3000 port start");
})
