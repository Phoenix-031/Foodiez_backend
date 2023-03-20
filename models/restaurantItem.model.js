const mongoose = require("mongoose");

const restaurantItemSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    image_uri:{
        type: String,
        required: true,
    },
    number_ratings:{
        type: Number,
        default:0
    },
    ratings:{
        type: Number,
        default:0
    },
    name:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        required: true,
    }
    
}, {timestamps: true});

module.exports = mongoose.model("RestaurantItem", restaurantItemSchema);