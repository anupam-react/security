import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      return alert("Fill all the fields");
    }

    const formData = {
      email,
      password,
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        "https://royal-security-backend.vercel.app/api/v1/admin/signin",
        formData,
        headers
      );
      // alert("LogIn Successfully");
      sessionStorage.setItem("token", response?.data?.token);
      navigate("/dashboard");
      console.log(response?.data?.token);
    } catch (error) {
      console.log(error);
      alert("Wrong email or password");
      return error;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
    handleLogin,
  };
};

export default useLogin;
