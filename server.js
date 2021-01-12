const express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const home = require('./routes/home');
const routes = require('./routes/index');
const search = require('./routes/search');
const about = require('./routes/about');
const gallery = require('./routes/gallery');
const agra = require('./routes/agra');
const manali = require('./routes/manali');
const an = require('./routes/an');
const delhi = require('./routes/delhi');
const goa = require('./routes/goa');
const jaipur = require('./routes/jaipur');
const kerala = require('./routes/kerala');
const ladakh = require('./routes/ladakh');
const nainital = require('./routes/nainital');
const udaipur = require('./routes/udaipur');
const khandala = require('./routes/khandala');
const faq = require('./routes/faq');


const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/home', home);
app.use('/', routes);
app.use('/search', search);
app.use('/about', about);
app.use('/gallery', gallery);
app.use('/an', an);
app.use('/delhi', delhi);
app.use('/goa', goa);
app.use('/jaipur', jaipur);
app.use('/kerala', kerala);
app.use('/ladakh', ladakh);
app.use('/nainital', nainital);
app.use('/agra', agra);
app.use('/manali', manali);
app.use('/khandala', khandala);
app.use('/udaipur', udaipur);
app.use('/faq', faq);


app.use(express.static('public'));
app.use('/views', express.static(__dirname + '/views'));
app.use('/images', express.static(__dirname + '/images'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

mongoose.connect("mongodb+srv://apurva1:Mongo@123@cluster0.qo1kt.mongodb.net/TourismDB?retryWrites=true&w=majority", { useNewUrlParser: true }, { useUnifiedTopology: true }, (err) => {
    if (!err) {
        console.log("DB Connected");
    } else {
        console.log("error" + err);
    }
});

const touruser = {
    name: String,
    email: String
}

const TourUser = mongoose.model('Touruser', touruser);

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index');
});

app.post("/", function(req, res) {
    let newuser = new TourUser({
        name: req.body.name,
        email: req.body.email
    });
    newuser.save();
    res.redirect("/home")
});

app.listen(3000, function() {
    console.log("server is running");
});