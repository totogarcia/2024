'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Dinamarca = Schema({
    col1: String,
    col0: String,
    col2: Number,
    col3: String,
    col6: Number,
    col5: Number,
    col4: Number,
    col7: Number,
    col8: Number,
    col9: Number,
    col10: Number,
    col11: Number,
    col12: Number,
    col13: Number,
    col14: Number
});

module.exports = mongoose.model('dinamarca', Dinamarca);