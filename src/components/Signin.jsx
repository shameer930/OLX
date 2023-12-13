import React, { useState } from 'react';
import './authform.css'; // Import the CSS file
import signinimage from './assets/signinimage.jpg';
import {  toast } from 'react-toastify';
import axios from 'axios'
import {Link} from "react-router-dom"

const YourFormComponent = () => {
  const [agree,setAgree]=useState("false")
  let [data, setdata] = useState({
   name:"",
    email: "",
    password: "",
  });

  const handleSubmit =async (e) => {
  
    // Handle form submission logic here
    e.preventDefault();
    const { email, password } = data;
    console.log(data)
    toast.success("Data entered")
    setdata(
      {
    
    email: "",
    password: "",
      }
    )
    const storedata=await axios.post("http://localhost:3001/login/user/login",data)
    if (storedata.status === 200) {
      // Authentication successful
      toast.success("Authetication Successsfull");
    } else {
      // Authentication failed
      toast.error("Authentication failed");
    }
  };
  const handleemailChange = (e) => {
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
    <div id="div011" >
          <div id="div031" className="text-center mt-3">
      <img src={signinimage} alt="Member Image" className="img-fluid" />
        <p class="paragrph21">Create a acount? <Link to="/"><a href="#/">Register here</a></Link></p>
      
       
      </div>
      <div id="div021" >
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
                <p className='paragraph11'>SIGN IN</p>
               {/* Email */}
               <div className="mb-3 input-container">
                <div className="input-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <input
                  type="email"
                  className="form-control custom-input"
                  placeholder="Your Email"
                  value={data.email}
                  onChange={handleemailChange}
                  required
                />
              </div>
             
              {/* Password */}
              <div className="mb-3 input-container">
                <div className="input-icon">
                  <i className="fas fa-lock"></i>
                </div>
                <input
                  type="password"
                  className="form-control custom-input"
                  placeholder="Password"
                  value={data.password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>

              {/* Submit Button */}
           <Link to="/homepage">   <button type="submit" className="btn btn-primary butt01">Log In
              </button></Link>
                
            </form>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default YourFormComponent;


