import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoginCheck } from "../redux/signUp/loginSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const isLogin = useSelector((state) => state.login.isLogin);
  const userData = useSelector((state) => state.login.userData);
  const error = useSelector((state) => state.login.error);

  const data = { email, password };

  useEffect(() => {
    if (isLogin) {
      navigator("/");
    }
  }, [isLogin, navigator]);

  useEffect(() => {
    if (userData) {
      console.log("User Data:", userData);
    }
    if (error) {
      console.error("Login Error:", error);
    }
  }, [userData, error]);

  useEffect(() => {
    dispatch(isLoginCheck());
  }, [dispatch]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    dispatch(isLoginCheck(data));
  };

  const handleGoogleLogin = async () => {
    // Google login logic (not implemented)
  };

  console.log(userData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>

        <div className="my-6 text-center text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition"
        >
          Sign In with Google
        </button>

        <p className="mt-6 text-sm text-center text-gray-500">
          Don't have an account?
          <a href="/signup" className="text-purple-600 hover:underline ml-1">
            Sign up here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignIn;
