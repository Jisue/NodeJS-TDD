const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

let users = [
    {id: 1, name: 'aa'},
    {id: 2, name: 'bb'},
    {id: 3, name: 'cc'}
]

app.use(morgan('dev'));
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

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

    const user = users.filter(user => user.id === id)[0];
    //user를 찾을수 없으면 404
    if(!user) return res.status(404).end();

    res.json(user);
})

app.delete('/users/:id', function(req, res) {
    const id = parseInt(req.params.id);

    // id가 숫자가 아닌 경우 400
    if(Number.isNaN(id)) return res.status(400).end();

    users = users.filter(user => user.id !== id);

    res.status(204).end();
})

app.post('/users', (req, res) => {
    const name = req.body.name;
    // name이 없다면
    if(!name) return res.status(400).end();

    // name 중복
    const isConflict = users.filter(user => user.name === name).length;
    if(isConflict) return res.status(409).end();
    const id = Date.now();
    const user = {id, name};
    users.push(user);
    res.status(201).json(user);
})

app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    if(Number.isNaN(id)) return res.status(400).end();
    const name = req.body.name;
    if(!name) return res.status(400).end();
    const isConfict = users.filter(user => user.name === name).length;
    if(isConfict) return res.status(409).end();

    const user = users.filter(user => user.id === id)[0];
    if(!user) return res.status(404).end();
    user.name = name;

    res.json(user);
})

app.listen(3000, function() {
    console.log('Server is running');
});

module.exports = app;