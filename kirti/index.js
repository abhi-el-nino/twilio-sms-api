require('dotenv').config()

const express = require('express');
const app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



app.use('/',require('./routes'))
app.listen(3000, (err) => {

    if(err){
        console.log(err);
        return;
    }

    console.log('app is listening on port 3000');
});