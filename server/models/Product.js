import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 100,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
            min: 5,
            max: 200,
        },
        category: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        rating: {
            type: Number,
            required: true,
        },
        supply: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('User', UserSchema);

export default Product;
