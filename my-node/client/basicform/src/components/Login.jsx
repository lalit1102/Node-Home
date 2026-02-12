import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // check password match on register
  if (
    state === "register" &&
    formData.password !== formData.confirmPassword
  ) {
    alert("Passwords do not match!");
    return;
  }

  try {
    // choose API endpoint based on login or register
    const url =
      state === "login"
        ? "http://localhost:5000/api/auth/login"
        : "http://localhost:5000/api/auth/register";

    // send form data
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      // show error message from server
      alert(data.message || "Error");
    } else {
      alert(data.message || "Success!");
      console.log("Server response:", data);

      // optional: clear form or redirect
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        password: "",
        confirmPassword: "",
      });
    }
  } catch (err) {
    console.error("Request error:", err);
    alert("Server error");
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-purple-900 to-indigo-800 px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-8">
        <h1 className="text-3xl font-bold text-white text-center">
          {state === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
        </h1>

        <p className="text-gray-300 text-center text-sm mt-2 mb-6">
          {state === "login"
            ? "Login to continue your journey"
            : "Sign up to get started"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Signup Fields */}
          {state === "register" && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />

              <textarea
                name="address"
                placeholder="Address"
                autoComplete="street-address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
                rows={2}
                required
              ></textarea>
            </>
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete={state === "login" ? "current-password" : "new-password"}
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />

          {/* Confirm Password (only show on signup) */}
          {state === "register" && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          )}

          {/* Forgot Password Link (Login only) */}
          {state === "login" && (
            <div className="text-right">
              <button
                type="button"
                className="text-sm text-indigo-300 hover:text-white transition"
              >
                Forgot password?
              </button>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition duration-300 shadow-lg"
          >
            {state === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Toggle Login / Sign Up */}
        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-center text-gray-300 text-sm mt-6 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="text-indigo-400 hover:underline ml-1">
            {state === "login" ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
