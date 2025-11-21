import React from "react";
import "./signup.scss";
import { Link } from "react-router";

export default function Signup() {
  return (
    <div className="signup-wrapper flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="signup-box bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Signup</h2>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input type="text" className="input" placeholder="Enter your name" />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input type="email" className="input" placeholder="Enter your email" />
          </div>

          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn-primary w-full">Create Account</button>
        </form>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
