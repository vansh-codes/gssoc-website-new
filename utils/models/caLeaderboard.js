import mongoose from "mongoose";

const caLeaderboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  referralCode: {
    type: String,
    required: true,
    trim: true
  },
  referralCount: {
    type: Number,
    default: 0
  }
});

const CALeaderboard = mongoose.models.caLeaderboards || mongoose.model("caLeaderboards", caLeaderboardSchema);

export default CALeaderboard;
