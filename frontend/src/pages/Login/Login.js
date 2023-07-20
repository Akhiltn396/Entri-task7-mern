import React, { useState } from "react";
import "./Login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3010/api/users/login", {
        ...user,
      });
      console.log(res);

      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };
  return (
    <div>
      <div className="login">
        <form onSubmit={handleSubmit}>
          <h1>Sign in</h1>
          <h2 >{error && error}</h2>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}
          />

          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
