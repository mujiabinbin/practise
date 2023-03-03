var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const {
	createProxyMiddleware
} = require(`http-proxy-middleware`);
const options = {
	target: `http://localhost:3000`, //目标服务器
	changeOrigin: true, //默认为false，是否需要改变原主机头为目标url
	pathRewrite: { //重写请求
		"^/api": "" //所有以/api开头的请求都会被改写为“/”
	}
};
var app = express();


app.use(`/api`, createProxyMiddleware(options)); //放在var app = express();之后
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

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

/* module.exports = app; */
app.listen(8000, () => {
	console.log("8000 port start");
})
