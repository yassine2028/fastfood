import mongoose from "mongoose";

const MealSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    imageUrl: { type: String },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    sizes: [
        {
            name: String,
            price: Number,
        }
    ],
    extras: [
        {
            name: String,
            price: Number,
        }
    ]
}, { timestamps: true });

export const Meal = mongoose.models.Meal || mongoose.model('Meal', MealSchema);
