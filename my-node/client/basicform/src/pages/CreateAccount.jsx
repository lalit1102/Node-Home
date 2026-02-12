import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!firstName || !lastName || !email || !address || !password || !confirmPassword) {
      setError("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    console.log("Registering:", { firstName, lastName, email, address, password });

    // TODO: send data to backend API
    alert("Account created successfully!");
    navigate("/login"); // redirect after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-10 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
          Create Your Account
        </h2>

        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* First + Last Name Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First Name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Last Name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Address
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-none"
              placeholder="Your address"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Create password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Confirm password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition text-center font-semibold"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-indigo-600 hover:underline"
          >
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
