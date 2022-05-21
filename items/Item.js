const mongoose = require("mongoose");

mongoose.model("Item", {

    itemNumber: {
        type: String,
        require: true
    },
    itemName: {
        type: String,
        require: true
    },
    itemPrice: {
        type: Number,
        require: false
    }
});