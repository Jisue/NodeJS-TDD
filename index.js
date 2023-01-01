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
    req.query.limit = req.query.limit || 10;
    const limit = parseInt(req.query.limit);
    if (Number.isNaN(limit)) {
        return res.status(400).end();
    }
    res.json(users.slice(0, limit));
});

app.get('/users/:id', function(req, res) {
    const id = parseInt(req.params.id);

    // id가 숫자가 아닌 경우 400
    if(Number.isNaN(id)) return res.status(400).end();

    const user = users.filter((user) => user.id === id)[0];
    //user를 찾을수 없으면 404
    if(!user) return res.status(404).end();

    res.json(user);
})

app.listen(3000, function() {
    console.log('Server is running');
});

module.exports = app;