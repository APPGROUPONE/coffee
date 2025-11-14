import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  items: [
    {
      id: String,
      name: String,
      price: Number,
      qty: Number
    }
  ],
  total: { type: Number, required: true },
  paid: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);
