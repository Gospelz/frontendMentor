import React from "react";
import axios from "axios";
import { useState } from "react";
import { useShopContext } from "../context";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  interface LoginResponse {
    token: string;
    user: {
      id: string;
      email: string;
      name?: string;
      role: string;
    };
  }
  const context = useShopContext();
  const backendUrl = context?.backendUrl || "";
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post<LoginResponse>(
        `${backendUrl}/api/auth/login`,
        { email, password }
      );
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h1 className="mb-8 text-3xl font-semibold text-white text-center">
        Mentorship Login Page
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <form className=" p-8 w-full max-w-md mx-auto" onSubmit={submit}>
          <h1 className="mb-5 text-2xl font-semibold text-center text-gray-800">
            Login
          </h1>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm text-gray-600">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Enter your email address"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-1 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>
          {error && (
            <div className="mb-4 text-red-600 text-center font-medium">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-base font-medium transition-colors mt-2"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
