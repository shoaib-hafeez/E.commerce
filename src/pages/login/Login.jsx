import React from "react";
import "./login.scss";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="login-wrapper flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="login-box bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn-primary w-full">Login</button>
        </form>

        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}
