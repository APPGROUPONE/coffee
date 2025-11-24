const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Receipt = require('../models/Receipt');
const Order = require('../models/Order');
const User = require('../models/User');

// @route  GET api/receipts
// @desc   Get all receipts
// @access Private (Admin)
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (user.role !== 'admin') {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    const receipts = await Receipt.find().sort({ date: -1 });
    res.json(receipts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route  POST api/receipts
// @desc   Create a receipt
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('order', 'Order is required').not().isEmpty(),
      check('paymentMethod', 'Payment method is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { order, paymentMethod, paymentResult } = req.body;

    try {
      const newReceipt = new Receipt({
        order,
        paymentMethod,
        paymentResult,
      });

      const receipt = await newReceipt.save();

      res.json(receipt);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
