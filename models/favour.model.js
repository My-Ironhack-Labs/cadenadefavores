const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const favourSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
        trim: true,
    },
    description: {
        type: String,
        required: true,

    },
    location: {
        type: {
            type: String
        },
        coordinates: [Number]
    },
    address: String,

    status: {
        type: String,
        default: 'active',
        enum: ['active', 'required', 'done'],
    },
    give:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    receive:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {
    timestamps: true
});

favourSchema.statics.countGivers = function (id) {
    console.log('hola', id)
    return this.count({ give: id })
}

const Favour = mongoose.model("Favour", favourSchema);
module.exports = Favour;