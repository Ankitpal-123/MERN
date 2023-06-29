import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/Auth";
// inporting the auth for showing the login data

function Login() {
  // auth fucntion for the user data in login
  const [auth, setAuth] = useAuth();

  // for form display
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  //   form handleSubmit creating
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Welcome to the login page"}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded shadow-lg px-6 py-8"
        >
          <h4 className="text-2xl font-bold text-center mb-6">LOGIN FORM</h4>

          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2  border-b-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border-b-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Password"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full px-4 py-2  border-b-2 border-blackfocus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What is Your Favorite Sports"
              required
            />
          </div>
          <div className="flex flex-col space-y-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
            >
              Login
            </button>
            <button
              type="submit"
              onClick={() => {
                navigate("/forget-password");
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
            >
              Forgot Password
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default Login;
