const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    cartdata:{
        type: Array,
        default: [],
    },
    orders:{
        type: Array,
        default: [],
    },
    wishlist:{
        type: Array,
        default: [],
    },
    liked_restaurants:{
        type: Array,
        default: [],
    },
    liked_reviews:{
        type: Array,
        default: [],
    },
    reviews_list:{
        type: Array,
        default: [],
    },

}, {timestamps: true});

module.exports = mongoose.model("User", userSchema);