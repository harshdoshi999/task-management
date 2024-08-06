// src/components/SignupModal.js
import React, { useState } from "react";
import { signup } from "../apis";

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    try {
      await signup(email, password);
      // Handle successful signup
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Signup</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border p-2 mb-4 w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 mb-4 w-full"
          />
          <button
            onClick={handleSignup}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Signup
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded w-full mt-2"
          >
            Close
          </button>
        </div>
      </div>
    )
  );
};

export default SignupModal;
