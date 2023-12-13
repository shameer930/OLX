import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/counter.action";
import { Link } from 'react-router-dom';
import  "./card.css"


const Bikecard1 = () => {
  const data = useSelector((state) => state.data.users);

  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchData action when the component mounts
    dispatch(fetchData());
  }, [dispatch]); // The dependency array ensures this effect only runs on mount

  const filteredData=data?.filter((bikes)=>bikes.Category==="Car")
  return (
   <div className="m3">
    <div>
    <div class='d-flex'>
    <Link to="/Firstpage">  <span class='sp1'>Home</span ></Link>
      <span class='sp1'>/</span><span class='sp1'>Bikes</span>
    </div>
    <h4 id='heading1'>Motorcycles in Pakistan</h4>
    </div>
       <div class='d-flex'>
        <div class="m7">
          <p class='p7'>Filters</p>
        </div>
        <div class="m8 d-flex justify-content-between">
          <div class="m9">
            1000+ads
          </div>
          <div className="m10 ">
            <p class="m10p">VIEW</p>
            <span class="m10img1"><img src="https://www.olx.com.pk/assets/iconList_noinline.fc368d8e5a57a18cef128d2179dc9b51.svg" alt="" width={30} height={30}/></span>
            <span class="m10img2"><img src="https://www.olx.com.pk/assets/iconGrid_noinline.20d3115f90d4e01862afb7d21be83420.svg" alt=""  width={30} height={30} /></span>
          </div>
          <div className="m11">
          <div class="dropdown">
  <button class="btn  dropdown-toggle"  data-bs-toggle="dropdown" aria-expanded="false">
   Sort by : New listed
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/#">Newly listed</a></li>
    <li><a class="dropdown-item" href="/#">Most relevant</a></li>
    <li><a class="dropdown-item" href="/#">Lowest price</a></li>
    <li><a class="dropdown-item" href="/#">Highest price</a></li>
  </ul>
</div>
          </div>
        </div>
       </div>
<div class='row'>
  <div className="col-lg-3 ">
    <div className="m7">
    <div class="mt-3 m12">
     <p class=" p15">CATEGORIES</p>
     <p >All Categories</p>
     <p class='p11'>Bikes</p>
     </div>
     <div class=' m13'>
      <p>Motor Cycles(237942)</p>
      <p>Standard(23566)</p>
      <p>Others(10088)</p>
      <p>Sport and Heavy Bikes(5102)</p>
      <p>Electric Bikes(115)</p>
      <p>Cafe Racers(118)</p>
      <p>Trail(5102)</p>
      <p>Cruisers(34)</p>
     </div>
    </div>
    <div className="m7">
      <h5 class='mt-3 '>LOCATIONS</h5>
      <div class="nav-item dropdown mt-1 dropdown2 m-lg-2">
          <a class="nav-link dropdown-toggle fs-5 " href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Pakistan
          </a>
          <ul class="dropdown-menu " aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item  " href="/#" >Azad kashmir,Pakistan</a></li>
            <hr />
            <li><a class="dropdown-item" href="/#">Islamabad,Pakistan</a></li>
            <hr />
            <li><a class="dropdown-item" href="/#">Balochistan,Pakistan</a></li>
          </ul>
        </div>
        <p class='mt-3 m-lg-2 p15'>Pakistan</p>
        <div class=' m13'>
      <p>Punjab(237942)</p>
      <p>Sindh(23566)</p>
      <p>Khyber Pakhtunkahwa(10088)</p>
      <p>Islamabad capital terroity(5102)</p>
      <p>Balochitan(5102)</p>
     </div>
      </div>
      <div class="m7">
      <p class='mt-3 m-lg-2 p15'>MAKE</p>
     <div class=' m13'>
      <p>Honda(238942)</p>
      <p>United(23566)</p>
      <p>Road Prince(10088)</p>
      <p>Super Power(5102)</p>
      <p>Hi Speed(5102)</p>
      <p>Super Star(6789)</p>
     </div>
     </div>
     <div class="m7">
     <p class='mt-3 m-lg-2 p15'>CONDITION
     </p>
     <div class=' m17 '>
      <span> <input type="checkbox" id='input2' /><p >Used(179810)</p></span>
      <span> <input type="checkbox" id='input2' /><p >New(23566)</p></span>
     </div>
     </div>
  </div>
     <div className="col-lg-9 mt-2">
      {
        <div>
        
  {filteredData?.map((item) => {
             
             return(
              <div class=' d-flex  mt-2 '>
               <div id='img0'>
               <Link to={`/Detailcar/${item._id}`}><img src={item.image} alt="" width='320' height={220}/></Link>
               </div>
            <div class='border border-1 con3'>
             <div class=" mt-4 "> 
             <div class="d-flex justify-content-between mt-4 ">
             <h4>{item.price}</h4>
             <p><i class="fa-regular fa-heart fa-lg"></i></p>
             </div>
             <h5>{item.modelinfo}</h5>
             </div>
              <div>
            </div>
              <div class='mt-3'>
               <span class='d-block fs-6 '>{item.location} . {item.time}</span>
               <button className=" btn button1"><i class="fa-solid fa-phone fa-lg"></i><span class='d-inline-block m-lg-1 span1' >Call</span></button>
               <button class="btn button2"><i class="fa-regular fa-comment-dots fa-lg"></i>
               <span class='d-inline-block m-lg-1 span1 span2'>Chat</span>
               </button>
               </div>
            </div>
         </div>
            )
             
             })}
         
        </div>
     }
    </div>
   </div>
   </div>
  );
};

export default Bikecard1;

