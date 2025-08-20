import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
  product:  { type: mongoose.Schema.Types.ObjectId, ref: 'Meal', required: true },
  
  // capture the one size they picked
  size:
    {
      name:  { type: String, required: true },
      price: { type: Number, required: true }
    }
  ,
  // capture exactly which extras they chose
  extras: [
    {
      name:  { type: String, required: true },
      price: { type: Number, required: true }
    }
  ]
});

const OrderSchema = new mongoose.Schema({
  items:    [OrderItemSchema],
  total:    { type: Number, required: true },
  customer: {
    phone:      { type: String, required: true },
    address:    { type: String, required: true },
  },
  status:   { type: String, default: 'pending' },
}, { timestamps: true });

export const Order =
  mongoose.models.Order || mongoose.model('Order', OrderSchema);
