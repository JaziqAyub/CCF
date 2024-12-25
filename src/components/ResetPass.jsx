import React, { useState } from "react";
import "./ResetPass.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ResetPass = () => {
    // warna hume do hooks banane the alag alag 
  const [formData, setFormData] = useState({
    newPass: "",
    confirmPass: "",
  });

  const {userId} = useParams() //bringing email wali id here thru use params
  const url = `http://localhost:4011/user/password/reset/${userId}`

  const handleChangePass = async (e) => {
    try {
        e.preventDefault()


        const res = await axios.put(url , formData)
        toast.success(res.data.message)
        console.log(res)


    } catch (error) {
        toast.error(error.response.data.message)
        console.log(error)

    }
  }
  return (
    <div className="resetpass">
        <ToastContainer position="top-center"/>
      <form>
        <input
          type="password"
          placeholder="Enter your new password"
          value={formData.newPass}
          onChange={(e) => {
            setFormData({ ...formData, newPass: e.target.value });
          }}
        />
        <input
          type="password"
          placeholder="Confirm your new password"
          value={formData.confirmPass}
          onChange={(e) => {
            setFormData({ ...formData, confirmPass: e.target.value });
          }}
        />
      </form>

      <button onClick={handleChangePass}>Change Paassword</button>
    </div>
  );
};

export default ResetPass;