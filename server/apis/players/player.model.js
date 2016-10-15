let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let PlayerSchema = new Schema({
    displayName: {
        type: String
    },
    google: {
        displayName: { type: String },
        id: {
            type: String,
            // required: true
        },
    },
    stats: {
        joined: {
            type: Date,
            default: Date.now
        },
        score: {
            type: Number,
            default: 0
        },
        locked: {
            id: {
                type: String,
                default: '',
                // required: true
            },
            date: { type: Date }
         },
        gamesPlayed: { type: Number },
        percentageWon: { type: Number }
    },
});


module.exports = mongoose.model('Player', PlayerSchema);