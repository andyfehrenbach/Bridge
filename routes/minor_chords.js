var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



mongoose.model(
    'MinorChords',
    new Schema({
        "chord_id": Number,
        "chord_name": String,
        "chord_info": Object    },
    {
        collection: 'minor_chords'
    }
));
//

// assign schema to variable
var minorChords = mongoose.model('MinorChords');

//GET
router.get('/', function(req, res) {
    console.log('get route working');
    minorChords.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    }).sort({chord_name: 1 });
});


module.exports = router;
