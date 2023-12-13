import React, { useState } from 'react';
import './authform.css'; // Import the CSS file
import signupimage from './assets/signupimage.jpg';
import {  toast } from 'react-toastify';
import axios from 'axios'
import {Link} from "react-router-dom"
const YourFormComponent = () => {
 
  let [data, setdata] = useState({
   name:"",
    email: "",
    password: "",
  });

  const handleSubmit =async (e) => {
  
    // Handle form submission logic here
    e.preventDefault();
    const {name,  email, password } = data;
    setdata(
      {
     name:"",
    email: "",
    password: "",
      }
    )
    const storeData=await axios.post("http://localhost:3001/login/user",data)
    if(storeData.data.status===404)
    {
      toast.warning(storeData.data.message)
    }
    else{
      toast.success(storeData.data.message)
      alert(storeData.data.message)
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
  const handlenameChange = (e) => {
    setdata({
      ...data,
       
      name: e.target.value,
    });
  };

  return (
    <div id="div011" >
      <div id="div021" >
        <div className="container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
                <p className='paragraph11'>SIGN UP</p>
              {/* Full Name */}
              <div className="mb-3 input-container">
                <div className="input-icon">
                  <i className="fa-solid fa-user"></i>
                </div>
                <input
                  type="text"
                  className="form-control custom-input"
                  placeholder="Your Name"
                  value={data.name}
                  onChange={handlenameChange}
                  required
                />
              </div>

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
              <Link to="/homepage"><button type="submit" className="btn btn-primary butt01">
                Register
              </button></Link>
            </form>
          </div>
        </div>
      </div>
      <div id="div031" className="text-center mt-3">
      <img src={signupimage} alt="Member Image" className="img-fluid" />
        <p class="paragrph21">Already a member? <Link to="/signin"><a href="#/">Login here</a></Link></p>
      
        {/* Other content in div03 */}
      </div>
    </div>
  );
};

export default YourFormComponent;


