import React, { useState } from "react";
import Layout from "../../components/layout/Layout";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  //   form handleSubmit creating
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title={"Register New page"}>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white rounded shadow-lg px-6 py-8"
        >
          <h4 className="text-2xl font-bold text-center mb-6">REGISTER FORM</h4>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border-b-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 border-b-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full px-4 py-2  border-b-2 border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Address"
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
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md"
            // onClick={handleSubmit}
          >
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default Register;
