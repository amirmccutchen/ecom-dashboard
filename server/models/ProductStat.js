import mongoose from 'mongoose';

const ProductStatSchema = new mongoose.Schema(
    {
        ProductId: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        yearlySalesTotal: {
            type: Number,
            required: true,
        },
        yearlyTotalSoldUnits: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
                required: true,
            },
        ],
        dailyData: {
            date: String,
            totalSales: Number,
            totalUnits: Number,
            required: true
        }
    },
    { timestamps: true }
);

const ProductStat = mongoose.model('User', UserSchema);

export default ProductStat;