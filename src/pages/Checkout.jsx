import React, { useState } from "react";

export default function Checkout({ cartItems, onPlaceOrder }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Handle form submission for regular order (optional)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    const order = { name, email, address, items: cartItems, total };
    onPlaceOrder(order);
    alert("Order placed successfully!");
  };

  // Handle Mpesa payment
  const handleMpesaPayment = async () => {
    if (!phone || cartItems.length === 0) {
      alert("Enter your phone number and make sure your cart is not empty.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone, amount: total }),
      });

      const data = await response.json();
      console.log("STK Push Response:", data);

      if (data.ResponseCode === "0") {
        alert("STK Push sent! Check your phone to complete payment.");
      } else {
        alert("Payment initiation failed. Check console for details.");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fade-page pt-28 px-6 max-w-7xl mx-auto min-h-screen pb-20">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Checkout</h1>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Order Summary */}
        <div className="flex-1 bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Order</h2>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="mb-3 flex justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      Ksh {item.price} × {item.qty}
                    </p>
                  </div>
                  <span className="font-semibold">Ksh {item.price * item.qty}</span>
                </li>
              ))}
            </ul>
          )}

          <p className="mt-4 font-bold text-lg">Total: Ksh {total}</p>
        </div>

        {/* Billing & Mpesa Payment Form */}
        <form className="flex-1 bg-white shadow-lg rounded-2xl p-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-4">Billing & Shipping Info</h2>

          <label className="block mb-4">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <label className="block mb-4">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <label className="block mb-4">
            Address:
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <label className="block mb-4">
            Phone Number (Mpesa):
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="2547XXXXXXXX"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </label>

          <button
            type="button"
            onClick={handleMpesaPayment}
            disabled={loading}
            className={`w-full py-3 rounded-xl font-semibold mt-4 transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {loading ? "Processing..." : "Pay with Mpesa"}
          </button>

          {/* Optional: normal submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold mt-4 bg-orange-600 hover:bg-orange-700 text-white"
          >
            Place Order (Offline)
          </button>
        </form>
      </div>
    </div>
  );
}
