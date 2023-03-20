const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    review_description:{
        type: String,
        required: true,
    },
    comments:{
        type: Array,
        default:[]
    },
    likes:{
        type: Number,
        default: 0,
    },
    time_of_comment:{
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model("Review", reviewSchema);