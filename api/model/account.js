const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema(
  {
    currentAmount: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Account", accountSchema);
