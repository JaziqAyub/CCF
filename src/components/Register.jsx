import React, { useState } from "react";
import "./Register.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    username,
    email,
    password,
  };
  const url = "http://localhost:4011/user/register";

  const handleRegister = async (e) => {
    e.preventDefault();
    // above line cause to prevent button default nehaviour whihc is submititing the form
    try {
      const response = await axios.post(url, formData);
      if(response.data.message === "User created succesfully!"){
      toast.success(response.data.message);
      } else {
      toast.error(response.data.message);

      }
    } catch (error) {
      console.error(error);
      toast.error("Server error")
    }
  }; 

  return (
    <>
    <ToastContainer position="top-center"/>
    <div className="register">
      <form>
        <input
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          placeholder="Enter Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button onClick={handleRegister}>Submit</button>
      </form>
    </div>
    </>
  );
};

export default Register;
