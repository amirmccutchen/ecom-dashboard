import OverallStats from '../models/OverallStats.js';

export const getSales = async (req, res) => {
    try {
        
      const salesStats = await OverallStats.find();
  
      res.status(200).json(salesStats[0]);
      
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };