import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgetPassword() {
  // auth fucntion for the user data in login

  // for form display
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //   form handleSubmit creating
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forget-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login ");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded shadow-lg px-6 py-8"
        >
          <h4 className="text-2xl font-bold text-center mb-6">
            RESET PASSWORD
          </h4>

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
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
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
              Reset
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}

export default ForgetPassword;
