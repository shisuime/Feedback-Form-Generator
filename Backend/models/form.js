const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    default: "Draft",
  },

  createdBy: {
    type: String,
    default: "",
  },

  formElements: {
    type: Array,
    default: [],
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

},
  {
    collection: "Forms",
  }
);

module.exports = mongoose.model("Form", formSchema);