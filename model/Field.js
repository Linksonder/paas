const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
    name: String,
    eggs: [
        { x: Number, y: Number, score: Number }
    ]
  });

  mongoose.model('Field', fieldSchema);