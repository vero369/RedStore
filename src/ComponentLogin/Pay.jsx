import React, { useState } from "react";
import "./Log.css";
import { image } from "../sets";

const Pay = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");

  const handlePay = (e) => {
    e.preventDefault();

    if (!email || !amount || !name) {
      alert("Please fill all fields");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: "pk_test_your_public_key_here", // Replace with your Paystack public key
      email,
      amount: amount * 100, // Convert amount to kobo
      currency: "NGN",
      ref: "ref_" + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        alert("Payment successful! Reference: " + response.reference);
      },
      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  return (
   <div className="GEN">
    <h1>Add Your Credit Card</h1>
    <img src={image.mastercard} alt="mastercard" />
     <div className="pay"> 
      <form
        onSubmit={handlePay}>
        <h2 className="text">
          Pay with Paystack
        </h2>

        <label className="block">Full Name</label>
        <input
          type="text"
          className="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="eg.John Doe"
        />

        <label className="block">Email Address</label>
        <input
          type="email"
          className="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="eg.johndoe@example.com"
        />

        <label className="block">Amount (₦)</label>
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />

        <button
          type="submit"
          className="sub"
        >
          Pay Now
        </button>
      </form>
     </div>
     <button className="store">Get Notified from Our Store <img src={image.bell} alt="bell" /></button>
   </div>
  );
};

export default Pay;
