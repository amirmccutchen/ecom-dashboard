import mongoose from "mongoose";

// all files in the models folder are defining the tables of the data sent to mongodb

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