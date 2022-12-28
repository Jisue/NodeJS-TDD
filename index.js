const express = require('express');
const app = express();
const morgan = require('morgan')

const users = [
    {id: 1, name: 'aa'},
    {id: 2, name: 'bb'},
    {id: 3, name: 'cc'}
]

app.use(morgan('dev'));

app.get('/users', function (req, res) {
    res.json(users);
});

app.listen(3000, function() {
    console.log('Server is running');
});