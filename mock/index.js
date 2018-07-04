const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const goods = require('./routes/goods')
const user = require('./routes/user');
const shopcart = require('./routes/shopcart')

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", req.get('Origin'));
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Authorization,Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    if (req.method === 'OPTIONS') {
        res.send('Current services support cross domain requests!');
        return;
    }
    next()
})

app.use(session({
    secret: 'awesome',
    resave: true,
    saveUninitialized: true
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/user',user);
app.use('/goods',goods);
app.use('/shopcart',shopcart)


app.listen(8080,() => {
    console.log('服务器启动了，这下满意了吗？？？？？？？？')
})