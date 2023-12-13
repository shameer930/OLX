
import React, { useState } from 'react';
import {  toast } from 'react-toastify';
import axios from 'axios'
function Login() {
  const [data, setdata] = useState({
   
    email: "",
    password: "",
  });

  const onSubmit =async (e) => {
    e.preventDefault();
    const {  email, password } = data;
    console.log(data)
    toast.success("Data entered")
    setdata(
      {
     
    email: "",
    password: "",
      }
    )
    const storedata=await axios.post("http://localhost:3001/login/data",data)
    
  };
const handleEmailChange = (e) => {
    setdata({
      ...data,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setdata({
      ...data,
      password: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
       
        
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleEmailChange}
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;


