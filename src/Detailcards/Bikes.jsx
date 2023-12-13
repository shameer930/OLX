import React, {useEffect} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import './swiper.css';
import './Detailcard.css';
import {useParams} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { fetchSingleData } from '../redux/actions/counter.action';





const Mobile = () => {
  
  const data = useSelector((state) => state.data.users);
  console.log(data,"data new")
  const dispatch=useDispatch();
  const{ _id}=useParams();
  
 
  useEffect(()=>{
    dispatch(fetchSingleData(_id))
  },[dispatch,_id])
  
console.log(_id,"ids")

  return (
  
          <div class="row" id="j1">
      <div className="col-lg-8 border border-1">
      <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={data?.image}  alt=" "/></SwiperSlide>
        <SwiperSlide><img src={data?.image1} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={data?.image2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={data?.image3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={data?.image4} alt="" /></SwiperSlide>
      </Swiper>
      </div>
      <div className=" mt-3 j2 border border-1 p-2">
          <div class="  d-flex justify-content-between">
            <h1>{data?.price} </h1>
            <div class='d-flex'>
              <img src="https://www.olx.com.pk/assets/iconShare_noinline.5f535b79fd4a71ac227a88dd6a54a79e.svg" alt="" height={30} width={30}/>
              <p><i class="fa-regular fa-heart fa-lg"></i></p>
            </div>
          </div>
          <h3>{data?.modelinfo}</h3>
          <div class='d-flex justify-content-between'>
            <span><i class="fa-solid fa-location-pin fa-2xl"></i><p class='d-inline m-lg-2 pd'>{data?.location}</p></span>
            <p class='pd '>{data?.time}</p>
          </div>
      </div>
      <div className=" mt-2 p-3 border border-1">
        <h3>Details</h3>
        <div class='row '>
          <div className="col-lg-4">
            <div class=" j7">
              <p class='pj'>Make</p>
              <p class='pj1'>{data?.Make}</p>
            </div>
            <div class=" j7">
              <p class='pj'>Year</p>
              <p class='pj1'>{data?.Year}</p>
            </div>
            <div class=" j7">
              <p class='pj'>Origin</p>
              <p class='pj1'>{data?.Origin}</p>
            </div>
            <div class=" j7">
              <p class='pj'>condition</p>
              <p class='pj1'>{data?.condition}</p>
            </div>
            <div class=" j7">
              <p class='pj'>Registration City</p>
              <p class='pj1'>{data?.Registration_city}</p>
            </div>
            <div class=" j7">
              <p>Model</p>
              <p>{data?.Model}</p>
            </div>
          </div>
          <div className="col-lg-4 j3">
            <div class=" j7">
              <p>Price</p>
              <p>{data?.price}</p>
            </div>
            <div class=" j7">
              <p>Engine Type</p>
              <p>{data?.Engine_type}</p>
            </div>
            <div class=" j7">
              <p>Engine Capacity</p>
              <p>{data?.Engine_capacity}</p>
            </div>
            <div class=" j7">
              <p>Ignite Type</p>
              <p>{data?.Ignite_type}</p>
            </div>
          </div>
          </div>
      </div>
      <div class='mt-3 p-3 border border-1'>
        <h3>Discription</h3>
        <p>{data?.description}</p>
      </div>
      </div>
      <div className="col-lg-4 border border-1 ">
        <div class='border border-1 p-3'>
                   <div class="d-flex  border border-1">
                    <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" width={100} height={100}/>
                    <div class='d-flex flex-column j4'>
                      <span class="fw-bold">{data?.idname}</span>
                    <span>{data?.membership}</span>
                    <span class="fw-bold">See profile <i class="fa-solid fa-arrow-right fa-lg"></i> </span></div>
                   </div>
                   <div class="d-flex flex-column">
                    <button class="butt1" type="button"><i class="fa-solid fa-phone fa-2xl"></i><span class="d-inline-block fw-bold">Show Phone Number</span></button>
                    <button class="butt2" type="button"><i class="fa-regular fa-comments fa-2xl"></i><span class="d-inline-block fw-bold">Chat</span></button>
                   </div>
        </div>
        <div class='p-2 mt-3 border border-1'>
             <h3>Location</h3> 
             <p><span><i class="fa-solid fa-location-pin fa-2xl"></i><p class='d-inline m-lg-2 pd'>{data?.location}</p></span></p>
                   </div>
                   <p class='p0'>AD iD {data?.Adid}</p>

      </div>
    </div>
        
      
    
  )
}

export default Mobile

 


