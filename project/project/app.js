var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwtAuth = require(`./utils/jwt`);
require(`./dao/database`);
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');
var classRouter = require('./routes/class');
var subjectsRouter = require('./routes/subjects');
var teachersRouter = require('./routes/teachers');
var picsRouter = require('./routes/pics');


var app = express();
var cors = require('cors');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//一级路径前验证token
app.use(jwtAuth);
//用于配置ajax请求的一级路径
app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
app.use('/class', classRouter);
app.use('/subjects', subjectsRouter);
app.use('/teachers', teachersRouter);
app.use('/pics', picsRouter);

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