const mongoose = require("mongoose");

// Schema for file history
const historyFileSchema = new mongoose.Schema(
  {
    filename: { type: String, required: true },
    uploadedAt: { type: Date, default: Date.now },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const HistoryFile = mongoose.model("HistoryFile", historyFileSchema);
module.exports = HistoryFile;
