const mongoose = require("mongoose");
const { count } = require("node:console");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment :String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAtL: {
       type:Date,
       default :Date.now()
    },
});

module.exports = mongoose.model("Review",reviewSchema);