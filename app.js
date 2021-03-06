var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var all_chords = require('./routes/all_chords');
var minor_chords = require('./routes/minor_chords');
var seventh_chords = require('./routes/seventh_chords');
var mongoose = require('mongoose');

var user = process.env.dbuser;
var password = process.env.dbpass;

mongoose.set('debug', true);
//mongoose connect
//real connection for heroku
mongoose.connect('mongodb://Afehrenb:Fehrenbach1@ds015899.mlab.com:15899/bridge_app');

//local connection
// mongoose.connect('mongodb://localhost/bridge_app');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/all_chords', all_chords);
app.use('/minor_chords', minor_chords);
app.use('/seventh_chords', seventh_chords);


// Serve back static files
app.use(express.static('public'));
app.use(express.static('public/images'));
app.use(express.static('public/views'));
app.use(express.static('public/views/templates'));
app.use(express.static('public/scripts'));
app.use(express.static('public/scripts/controllers'));
app.use(express.static('public/styles/css'));
app.use(express.static('public/styles/scss'));
app.use(express.static('public/vendors'));
app.use(express.static('public/images'));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), function() {
    console.log('Marshmallows toasting on port ', app.get('port'));
});
