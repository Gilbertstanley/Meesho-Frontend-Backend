/* import express from 'express'
import { listProducts, addProduct, removeProduct, singleProduct } from '../controllers/productController.js'
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/remove',adminAuth,removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts)

export default productRouter */

/////////last


/* import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct, increaseStock } from '../controllers/productController.js';
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Route for adding a product
productRouter.post('/add', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]), addProduct);

// Route for removing a product
productRouter.post('/remove', adminAuth, removeProduct);

// Route for getting a single product
productRouter.post('/single', singleProduct);

// Route for listing products
productRouter.get('/list', listProducts);

// New route for increasing stock
productRouter.post('/increase-stock', adminAuth, increaseStock);

export default productRouter; */


////////////


import express from 'express';
import { listProducts, addProduct, removeProduct, singleProduct, increaseStock, decreaseStock } from '../controllers/productController.js'; // Add decreaseStock to imports
import upload from '../middleware/multer.js';
import adminAuth from '../middleware/adminAuth.js';

const productRouter = express.Router();

// Route for adding a product
productRouter.post('/add', adminAuth, upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]), addProduct);

// Route for removing a product
productRouter.post('/remove', adminAuth, removeProduct);

// Route for getting a single product
productRouter.post('/single', singleProduct);

// Route for listing products
productRouter.get('/list', listProducts);

// Route for increasing stock
productRouter.post('/increase-stock', adminAuth, increaseStock);

// New route for decreasing stock
productRouter.post('/decrease-stock', adminAuth, decreaseStock); // Add this line for decreasing stock

export default productRouter;
