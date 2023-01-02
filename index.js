const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const user = require('./api/user')

// test환경이 아닐때만 서버로그를 찍음
if(process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/users', user); //users로 들어오는 모든 것들은 user가 관리

// app.listen(3000, function() {
//     console.log('Server is running');
// });

module.exports = app;