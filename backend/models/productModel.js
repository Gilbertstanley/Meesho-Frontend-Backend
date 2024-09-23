/* import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    rating: { type: Number, default: 0 },
    date: { type: Number, required: true }
})

const productModel  = mongoose.models.product || mongoose.model("product",productSchema);

export default productModel */

////////////

/* import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    rating: { type: Number, default: 0 },
    stock: { type: Number, required: true }, // Added stock field
    date: { type: Number, required: true }
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel; */

/////////////////

import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean, default: false }, // Default value for bestseller
    rating: { type: Number, default: 0 },
    stock: { type: Number, required: true, default: 0 }, // Ensure stock has a default value
    date: { type: Number, required: true }
});

// Ensure the model is either retrieved from mongoose or created
const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
