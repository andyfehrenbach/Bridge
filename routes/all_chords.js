var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



mongoose.model(
    'AllTheChords',
    new Schema({
        "chord_id": Number,
        "chord_name": String,
        "chord_info": Object    },
    {
        collection: 'all_chords'
    }
));
//

// assign schema to variable
var allTheChords = mongoose.model('AllTheChords');

//GET
router.get('/', function(req, res) {
    console.log('get route working');
    allTheChords.find({}, function(err, data) {
        if(err) {
            console.log('ERR: ', err);
        }
        res.send(data);
    });
});


////update
// router.put('/:id', function(req, res){
//     AllTheChords.findByIdAndUpdate(
//         {_id: req.params.id},
//         {
//             $set: {task_complete: true}
//         },
//         function(err, data) {
//             if(err) {
//                 console.log('ERR: ', err);
//             }
//
//             res.send(data);
//         }
//     );
//
// });
//




module.exports = router;
