const mongoose = require("mongoose");
const headlineSchema = new mongoose.Schema ({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: true
    },
    date: String,
    saved: {
            type: Boolean,
            default: false
        }
    });

    const Headline = mongoose.model("Headline", headlineSchema);

    module.exports = Headline;