const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactDance', {useNewUrlParser: true});

var contactSchema = new mongoose.Schema({
    name: String,
    gender: String,
    dob: String,
    phone: String,
    email: String,
    address: String
});

var Contact = mongoose.model('Contact', contactSchema);
const port = 8000;

app.use('\static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response)=>{
    const params = {};
    response.status(200).render('home.pug', params);
})

app.get('/contact', (request, response)=>{
    const params = {};
    response.status(200).render('contact.pug', params);
})

app.post('/contact', (request, response)=>{
    var myData = new Contact(request.body);
    myData.save().then(()=>{
        response.send('This item has been saved to the database successfully :)')
    }).catch(()=>{
        response.status(400).send('The sending of item to database is failed!')
    });
    //response.status(200).render('contact.pug');
})

app.listen(port, ()=>{
    console.log(`The application started succcessfully on port ${port}`);
});