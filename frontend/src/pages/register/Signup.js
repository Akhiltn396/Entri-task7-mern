import React, { useState } from 'react'
import App from '../../App'
import "./Signup.scss"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword:""
  });

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

     const res = await axios.post("http://localhost:3010/api/users/signup",{
        ...user
      })

      console.log(res);
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  };
  return (
   <div className="register">


      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Create your account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="johndoe"
            onChange={handleChange}

          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleChange}

          />
          <label htmlFor="">Password</label>
          <input name="password" type="password" onChange={handleChange} />
          <label htmlFor="">Confirm Password</label>
          <input name="confirmpassword" type="password" onChange={handleChange}/>

          <button type="submit">Register</button>
        </div>
        </form>
        </div>
  )
}

export default Signup
