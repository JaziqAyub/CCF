import React, { useState } from "react";
import "./ForgotPass.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const ForgotPass = () => {
  const [email, setEmail] = useState("");

  const url = "http://localhost:4011/user/forgotPass";
  const formData = {
    email,
  };

  const handleForgotPass = async (e) => {
    try {
      e.preventDefault();

      const res = await axios.post(url, formData);
      toast.success(res.data.message);
      console.log(res);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="forgotpasscontainer">
      <ToastContainer position="top-center" />

      <form>
        <div className="input-container">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="forgotbtn">
          <button onClick={handleForgotPass}>Send Reset Link</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPass;
