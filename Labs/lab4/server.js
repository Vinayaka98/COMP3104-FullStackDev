const express =  require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('Hello Express JS!');
})


app.get('/user', function(req, res) {
    res.send({ "firstname":"Pritesh", "lastname": "Patel" });
})

app.post('/user', (req, res) => {
    console.log('Got body:', req.body);
    res.send(req.body);
    res.sendStatus(200);
});

app.listen(8080, function() {
    console.log('server started at port 3000');
})