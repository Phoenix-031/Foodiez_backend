const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    restaurant_name:{
        type: String,
        required: true,
    },
    restaurant_image:{
        type: String,
        required: true,
    },
    small_description:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        required: true,
    },
    reviews:{
        type:mongoose.Schema.Types.ObjectId,
    },
    cusines:{
        type: Array,
        required: true,
    },
    filters:{
        type: Array,
        required: true,
    },
    arrival_tag:{
        type: String,
        required: true,
    },
    distance:{
        type: Number,
        required: true,
    },
    res_items:{
        type: Array,
        required: true,
    },
    isAvailableforDelivery:{
        type: Boolean,
        required: true,
    },
    time_to_deliver:{
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model("Restaurant", restaurantSchema);