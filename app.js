var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// 跨域控制
var cors = require("cors")

// 引入接口文件
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var app = express();

app.use(cors({
  origin:['http://localhost:8080'],  //允许这个域名访问
  methods:['GET','POST','PUT','DELETE'], // 只允许http请求方式
  allowedHeaders:['Conten-Type','Authorization'] // 只允许带着两种请求头的链接访问
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// 使用的内置的body-parter
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

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

const PORT = process.env.PORT || 9000;

app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})

module.exports = app;
