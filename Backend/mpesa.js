import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import Order from "../models/order.js";

dotenv.config();
const router = express.Router();

const { CONSUMER_KEY, CONSUMER_SECRET, SHORTCODE, PASSKEY, CALLBACK_URL } = process.env;

// Helper: Get Mpesa access token
async function getAccessToken() {
  const token = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");
  const response = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    { headers: { Authorization: `Basic ${token}` } }
  );
  return response.data.access_token;
}

// Endpoint: Trigger STK Push
router.post("/pay", async (req, res) => {
  const { phone, amount, name, email, address, items } = req.body;

  if (!phone || !amount || !name || !address || !items)
    return res.status(400).json({ error: "Missing required fields" });

  try {
    const accessToken = await getAccessToken();
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0, 14);
    const password = Buffer.from(`${SHORTCODE}${PASSKEY}${timestamp}`).toString("base64");

    const payload = {
      BusinessShortCode: SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: CALLBACK_URL,
      AccountReference: "CoffeeOrder",
      TransactionDesc: "Coffee Order Payment"
    };

    // Save order first with paid: false
    const order = new Order({ name, email, address, phone, items, total: amount });
    await order.save();

    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      payload,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );

    res.json({ response, orderId: order._id });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Payment initiation failed" });
  }
});

// Endpoint: Handle Mpesa Callback
router.post("/callback", async (req, res) => {
  console.log("Mpesa callback received:", req.body);

  try {
    const callback = req.body.Body.stkCallback;

    if (callback.ResultCode === 0) {
      const phone = callback.CallbackMetadata.Item.find(i => i.Name === "PhoneNumber").Value;
      const amount = callback.CallbackMetadata.Item.find(i => i.Name === "Amount").Value;

      // Update order as paid
      const order = await Order.findOneAndUpdate(
        { phone: phone, total: amount, paid: false },
        { paid: true },
        { new: true }
      );
      console.log("Order marked as paid:", order);
    }

    res.status(200).send("Received");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error processing callback");
  }
});

// Optional: Get all orders (for dashboard)
router.get("/orders", async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

export default router;
