import mongoose from 'mongoose';
import productModel from './models/productModel.js'; // Adjust the path as necessary

const updateStockField = async () => {
    try {
        // Connect to your database
        await mongoose.connect('mongodb://localhost:27017/yourDatabaseName', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Update all products to set stock to 10
        await productModel.updateMany({}, { stock: 10 });

        console.log('Stock field added with value 10 for all products.');
    } catch (error) {
        console.error('Error updating stock field:', error);
    } finally {
        // Close the connection
        mongoose.connection.close();
    }
};

updateStockField();
