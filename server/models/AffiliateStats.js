import mongoose from "mongoose";

const AffiliateStatsSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    affiliateSales: {
      type: [mongoose.Types.ObjectId],
      ref: "Transaction",
    },
  },
  { timestamps: true }
);

const AffiliateStats = mongoose.model("AffiliateStat", AffiliateStatsSchema);

export default AffiliateStats;