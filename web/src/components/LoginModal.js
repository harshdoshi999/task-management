// src/components/LoginModal.js
import React, { useState } from "react";
import { login } from "../apis";
import { useAuth } from "../context/AuthContext";

const LoginModal = ({ isOpen, onClose }) => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginSubmit = async () => {
    try {
      const token = await login(email, password);
      handleLogin(token);
      // Handle successful login
      onClose(); // Close modal on success
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
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
            onClick={handleLoginSubmit}
            className="bg-blue-500 text-white p-2 rounded w-full"
          >
            Login
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

export default LoginModal;
