const mongoose = require('mongoose');

const ReceiptSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order',
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  paymentResult: {
    id: { type: String },
    status: { type: String },
    update_time: { type: String },
    email_address: { type: String },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Receipt = mongoose.model('receipt', ReceiptSchema);
