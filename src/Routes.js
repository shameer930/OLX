import React from "react";
import Firstpage from "./Pages/Firstpage";
import Carpage from "./Pages/Carpage.jsx";
import { Routes,Route } from "react-router-dom";
import Housepage from "./Pages/Housepage.jsx";
import Plotpage from "./Pages/Plotpage.jsx";
import Equipmentpage from "./Pages/Equipmentpage.jsx";
import Tabletpage from "./Pages/Tabletpage.jsx";
import Mobilepage from "./Pages/Mobilepage.jsx";
import Bikepage from "./Pages/Bikepage.jsx";
import Detailplot from "./Pages/Detailplot.jsx";
import Detailmobile from "./Pages/Detailmobile.jsx";
import Detailhouse from "./Pages/Detailhouse.jsx";
import Detailcar from "./Pages/Detailcar.jsx";
import Detailbike from "./Pages/Detailbike.jsx";
import Detailtablet from "./Pages/Detailtablet.jsx";
import Detailequipment from "./Pages/Detailequipment.jsx";
import Login from "./components/Login.jsx";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import ProductForm from './components/ProductForm.jsx'
import Signup from "./components/Signup.jsx";
import Signin from "./components/Signin.jsx";
import Dashboard from  "./components/Dasboard.js"
import Userdata  from "./components/Userdata.jsx"
const Routea= () => {
  return (
    <>
    
      <Routes>
      <Route path="/userdata" element={<Userdata/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/ProductForm" element={<ProductForm/>}/>
      <Route path="/" element={<Signup/>}/>
       <Route path="/signin" element={<Signin/>}/>
    <Route path="/homepage" element={<Firstpage/>}/>
     <Route path="/Plotpage" element={<Plotpage/>}/>
     <Route path="/Detailplot/:_id" element={<Detailplot/>}/>
     <Route path="/Housepage" element={<Housepage/>}/>
     <Route path="/Detailhouse/:_id" element={<Detailhouse/>}/>
     <Route path="/Mobilepage" element={<Mobilepage/>}/> 
      <Route path="/Detailmobile/:_id" element={<Detailmobile/>}/>
     <Route path="/Bikepage" element={<Bikepage/>}/>
      <Route path="/Detailbike/:_id" element={<Detailbike/>}/>
      <Route path="/Equipmentpage" element={<Equipmentpage/>}/>
      <Route path="/Detailequipment/:_id" element={<Detailequipment/>}/>
      <Route path="/Tabletpage" element={<Tabletpage/>}/>
     <Route path="/Detailtablet/:_id" element={<Detailtablet/>}/>
     <Route path="/Carpage" element={<Carpage/>}/>
      <Route path="/Detailcar/:_id" element={<Detailcar/>}/>
     </Routes>  
     
     <ToastContainer/>
    </>
    
  )
}

export default Routea
