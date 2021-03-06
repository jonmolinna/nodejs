const express = require('express');
const morgan = require('morgan');
const app = express();

/*function logger(req, res, next){
    console.log(`Route Received: ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}*/

app.use(express.json());
app.use(morgan('dev'));

//app.all('/user', (req, res, next) => {
  //  console.log('Por Aqui Paso');
    //next();
//})

app.get('/user', (req, res) => {
    res.json({
        username: 'Cameron',
        lastname: 'Howe'
    });
});

app.post('/user/:id', (req,res) => {
    console.log(req.body);
    console.log(req.params)
    res.send('Post Request Received');
});

app.put('/user/:id', (req,res) => {
    console.log(req.body);
    res.send(`User ${req.params.id} update`);
});

app.delete('/user/:userId', (req,res) => {
    res.send(`User ${req.params.userId} deleted`);
});

app.listen(5000, () => {
    console.log('Sever on Port 5000');
});