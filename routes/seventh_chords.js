var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//mongoose connect
mongoose.connect('mongodb://localhost/bridge_app');

mongoose.model(
    'SeventhChords',
    new Schema({
        "chord_id": Number,
        "chord_name": String,
        "chord_info": Object    },
    {
        collection: 'seventh_chords'
    }
));
//

// assign schema to variable
var seventhChords = mongoose.model('SeventhChords');

//GET
router.get('/', function(req, res) {
    console.log('get route working');
    seventhChords.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});


module.exports = router;
