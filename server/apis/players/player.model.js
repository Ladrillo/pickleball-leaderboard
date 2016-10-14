let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let PlayerSchema = new Schema({
    displayName: {
        type: String
    },
    image: {
        type: String
    },
    stats: {
        type: Object,
        default: {}
    },
    google: {
        type: Object,
        default: {}
    }
});

module.exports = mongoose.model('Player', PlayerSchema);