import { json } from 'body-parser';
import Product from '../models/Product';
import ProductStats from '../models/ProductStats';

export const getProducts = async (req, res ) => {
    try {
        const products = await Product.find();
        const productsStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductStats.find({
                    productId: product._id
                });
                return {
                    ...product._doc, stat, 
                }
            })
        );
        res.status(200).json(productsStats);
      } catch (error) {
        res.status(404).json({ message: error.message });
      };
}