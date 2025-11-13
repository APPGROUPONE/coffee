import React from "react";

export default function Contact() {
  return (
    <div className="pt-28 px-6 pb-20 bg-[#f9f4ef] min-h-screen fade-in">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl font-extrabold text-[#2B1B15] mb-6">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 mb-12">
          We’d love to hear from you! Whether you’re asking about our menu, 
          planning to visit, or just want to say hi — we’re here for you.
        </p>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-2 gap-10 text-left">

          {/* LEFT SIDE INFO */}
          <div className="space-y-4 text-gray-700">

            <h2 className="text-2xl font-bold text-[#2B1B15]">Café 4080</h2>

            <p>
              <strong>Address:</strong><br />
              4080 Sunset Lane,<br />
              Nairobi, Kenya
            </p>

            <p>
              <strong>Phone:</strong><br />
              +254 712 345 678
            </p>

            <p>
              <strong>Email:</strong><br />
              info@coffeeshop.com
            </p>

            <p>
              <strong>Opening Hours:</strong><br />
              Mon – Fri: 7:00 AM – 9:00 PM<br />
              Sat – Sun: 8:00 AM – 10:00 PM
            </p>
          </div>

          {/* RIGHT SIDE MAP PLACEHOLDER */}
          <div>
            <div className="w-full h-64 bg-[#d7c5b2] rounded-xl shadow-md flex items-center justify-center text-[#2B1B15] font-semibold">
              Map Placeholder
            </div>
          </div>
        </div>

        {/* MESSAGE */}
        <p className="mt-16 text-gray-600 text-sm">
          Thank you for choosing Café 4080 — where every cup is crafted with love.
        </p>
      </div>
    </div>
  );
}
