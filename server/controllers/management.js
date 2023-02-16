import mongoose from 'mongoose';
import User from '../models/User.js';
import Transaction from '../models/Transaction.js';

export const getAdmins = async (req, res) => {

  try {

    const admins = await User.find({ role: 'admin' }).select('-password');

    res.status(200).json(admins);

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const getUserPerformance = async (req, res) => {

  try {

    const { id } = req.params;

    const userWithStats = await User.aggregate([

      // mongo aggregation call querying specific id

      // converting req id into mongodb objectid, then finding user that has the specific id

      { $match: { _id: new mongoose.Types.ObjectId(id) } },

      // looking up affiliate stats table, then combining the user id data with the affiliate stat data to an array called affiliateStats, similar to a sql join
      
      {
        $lookup: {
          from: 'affiliatestats',
          localField: '_id',
          foreignField: 'userId',
          as: 'affiliateStats',
        },
      },

      // flattening affilateStats array

      { $unwind: '$affiliateStats' },

    ]);

    const saleTransactions = await Promise.all(
      userWithStats[0].affiliateStats.affiliateSales.map((id) => {
        return Transaction.findById(id);
      })
    );

    // not displaying empty transaction data

    const filteredSaleTransactions = saleTransactions.filter(
      (transaction) => transaction !== null
    );

    res.status(200).json({ user: userWithStats[0], sales: filteredSaleTransactions });

  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};