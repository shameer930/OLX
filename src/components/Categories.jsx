import React from 'react'
import './Categories.css'
import {Link} from "react-router-dom"

const Categories = () => {
  return (
    
      <div class='m-4'>
        <h4>All Categories</h4>
      <div class="div1">
        <figure>
  <img src="https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Mobiles</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/vehicles.29fb808d5118f0db56f68a39ce5392e2.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Vehicles</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/property-for-sale.e3a00dbfdaa69fe5f713665f1069502f.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Property for sale</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/property-for-rent.8436595fbaa90d47f0178006f57090a8.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Property for rent</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/electronics-home-appliances.46e034dd8adca44625c2c70e4d1b5984.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Electronics & Home Appliances</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Bikes</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/business-industrial-agriculture.704a6ffb9081bc94b11c102cc613670f.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Business, Industrial & Agriculture</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/services.dc6aef196c0403dc61b0ee813f66fa5b.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Services</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/jobs.79e6136dda02111cf8e7afe26b9e0f93.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Jobs</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/animals.62d396e85f7523dbc8ff23889fdd5c31.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Animals</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/furniture-home-decor.66bcf157a53ea4c736a5b0af41219475.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Furniture & Home Decor</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/fashion-beauty.dd2cf7638c29b0e5c084a6673dd94dd7.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Fashion & Beauty</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png" alt="" width='100' height='100' />
  <figcaption class="fw-bold ">Books sports & hobbies</figcaption>
       </figure>
       <figure>
  <img src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png" alt="" width='100' height='100  ' />
  <figcaption class="fw-bold ">Kids</figcaption>
       </figure>
      </div>
                               {/* MOBILE PHONES */}
     <div class='fw-semibold mt-4'>
          <div class='d-flex justify-content-between'>
          <h4>Mobile Phones</h4>
          <a class='d-inline fs-5' href='/'>view more</a>
          </div>
          <div class='row'>
              <div className="col-lg-3 ">
               <div class='border border-1 m-0'>
                    <Link to="/Mobilepage"><img src="https://images.olx.com.pk/thumbnails/386339811-800x600.webp" alt="" srcset="" width='300' height='200' />
</Link>
               <h5>Price 71,999</h5>
               <p class="fs-6" >One Plus 9 Fresh Condition 10/10 Dual </p>
               <p class="fs-6">Wapda Town, Lahore</p>
               <p class="fs-6">2 days ago</p>
               </div>
              </div>
              <div className="col-lg-3">
              <Link to="/Mobilepage"><img src="https://images.olx.com.pk/thumbnails/395822564-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Price 102,000</h5>
               <p class="fs-6" >iPhone Xsmax Pta approved Face ID </p>
               <p class="fs-6">DHA Phase,Lahore</p>
               <p class="fs-6">21 mins ago</p>
               </div>
              </div>
              <div className="col-lg-3">
              <Link to="/Mobilepage"><img src="https://images.olx.com.pk/thumbnails/395827780-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 '>
               <h5>Price 83,000</h5>
               <p class="fs-6" >iPhone 11 Pro 256gb</p>
               <p class="fs-6">Nishtar Colony, Lahore</p>
               <p class="fs-6">13 minutes ago</p>
               </div>
               </div>
              <div className="col-lg-3">
              <Link to="/Mobilepage"><img src="https://images.olx.com.pk/thumbnails/390819469-240x180.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 97,000 </h5>
               <p class="fs-6" >Samsung Galaxy S21 5G</p>
               <p class="fs-6">Gulberg 3,Lahore</p>
               <p class="fs-6">2 days ago</p>
               </div>
               </div> 
          </div>
     </div>
                                {/* CARS */}
 <div class='fw-semibold mt-4'>
 <div class='d-flex justify-content-between'>
          <h4>Cars</h4>
          <a class='d-inline fs-5' href='/'>view more</a>
          </div>
          <div className="row">
          <div className="col-lg-3 ">
              <Link to="/Carpage"><img src="https://images.olx.com.pk/thumbnails/395313428-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 2,225,000 </h5>
               <p class="fs-6" >total original bampar to bampar female us now ally rim new tair</p>
               <p class="fs-6">Khana,Lahore</p>
               <p class="fs-6">2 days ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Carpage"><img src="https://images.olx.com.pk/thumbnails/394528361-240x180.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 2,440,000</h5>
               <p class="fs-6" >Suzuki Every (Nissan) 2018 model Registered july,2023</p>
               <p class="fs-6">Nishtar colony,Lahore</p>
               <p class="fs-6">4 days ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Carpage"><img src="https://images.olx.com.pk/thumbnails/394256598-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 2,590,000 </h5>
               <p class="fs-6" >Suzuki Every PA, 2018 Model, Fresh Import 2023</p>
               <p class="fs-6">Walton road,Lahore</p>
               <p class="fs-6">1 week ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Carpage"><img src="https://images.olx.com.pk/thumbnails/394538364-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 3,690,000 </h5>
               <p class="fs-6" >Suzuki Every PA, White, 2018 Model, Fresh Import 2023 </p>
               <p class="fs-6">Cavlary ground,Lahore</p>
               <p class="fs-6">1 week ago</p>
               </div>
               </div> 
          </div>
                                 {/* Bikes & Motorcycles */}
          <div class='mt-4 fw-semibold'>
          <div class='d-flex justify-content-between'>
          <h4>Bikes & Motorcycles</h4>
          <a class='d-inline fs-5' href='/'>view more</a>
          </div>
          <div class='row'>
          <div className="col-lg-3">
              <Link to="/Bikepage"><img src="https://images.olx.com.pk/thumbnails/381629431-240x180.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 270,000 </h5>
               <p class="fs-6" > Yamaha YBR 125 (Blue Color 2020)</p>
               <p class="fs-6">Dubai town,Lahore</p>
               <p class="fs-6">6 minutes ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Bikepage"><img src="https://images.olx.com.pk/thumbnails/395873399-240x180.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 215,000  </h5>
               <p class="fs-6" >Honda CG 125 Model 2023 Km 4600 </p>
               <p class="fs-6">Valencia town,Lahore</p>
               <p class="fs-6">1 hour ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Carpage"><img src="https://images.olx.com.pk/thumbnails/395448348-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 210,000 </h5>
               <p class="fs-6" >Honda CG 125 Mint Condition </p>
               <p class="fs-6">Township,Lahore</p>
               <p class="fs-6">4 minutes ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Carpage"><img src="https://images.olx.com.pk/thumbnails/395888148-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs  170,000</h5>
               <p class="fs-6" > honda100 in best condition</p>
               <p class="fs-6">Ashiyana road,Lahore</p>
               <p class="fs-6">31 minutes ago</p>
               </div>
               </div> 

          </div>
               </div>
 </div>
                         {/* Houses */}
                         <div class='mt-4 fw-semibold'>
          <div class='d-flex justify-content-between'>
          <h4>Bikes & Motorcycles</h4>
          <a class='d-inline fs-5' href='/'>view more</a>
          </div>
          <div class='row'>
          <div className="col-lg-3">
              <Link to="Housepage"><img src="https://images.olx.com.pk/thumbnails/393216265-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 29,000,000 </h5>
               <p class="fs-6" > 10 Marla House for Sale In  Lahore</p>
               <p class="fs-6">Bahria town,Lahore</p>
               <p class="fs-6">1 week ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Housepage"><img src="https://images.olx.com.pk/thumbnails/395896343-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 25,000,000 </h5>
               <p class="fs-6" >  Four Bed 5 Marla house for sale</p>
               <p class="fs-6">DHA 11 Rahbar Phase 2 , Lahore</p>
               <p class="fs-6">9 minutes ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Housepge"><img src="https://images.olx.com.pk/thumbnails/395897504-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 20,000,000 </h5>
               <p class="fs-6" > 8 MARLA single story house FOR SALE!</p>
               <p class="fs-6">PCSIR Staff Colony, Lahore</p>
               <p class="fs-6">19 minutes ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Housepage"><img src="https://images.olx.com.pk/thumbnails/395899145-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 22,000,000 </h5>
               <p class="fs-6" > Beautiful 4 Bed 5 Marla House for Sale</p>
               <p class="fs-6">Lake City - Sector M-7B, Lahore</p>
               <p class="fs-6">4 minutes ago</p>
               </div>
               </div> 

          </div>
               </div> 

                                       {/* Tablets */}
          <div class='mt-4 fw-semibold'>
          <div class='d-flex justify-content-between'>
          <h4>Tablets</h4>
          <a class='d-inline fs-5' href='/'>view more</a>
          </div>
          <div class='row'>
          <div className="col-lg-3">
             <Link to="/Tabletpage"> <img src="https://images.olx.com.pk/thumbnails/389867650-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 8,999 </h5>
               <p class="fs-6" > (Samsung, Huawei, Lenovo,Ipad,TCL,LG,Amazon)</p>
               <p class="fs-6">Allama iqbal town,Lahore</p>
               <p class="fs-6">2 weeks ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Tabletpage"><img src="https://images.olx.com.pk/thumbnails/210952340-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs 6,500 </h5>
               <p class="fs-6" >Lenovo Tab3/7"Screen/1GB Ram/8GB Storage/Wifi/Model/tb3-710f </p>
               <p class="fs-6">Main Boulevard Gulberg, Lahore</p>
               <p class="fs-6">2 hours ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Tabletpage"><img src="https://images.olx.com.pk/thumbnails/395390859-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs  5,300</h5>
               <p class="fs-6" > Huawei Media pad. 2gb 16gb. silver color</p>
               <p class="fs-6">Sher Shah Colony - Block C, Lahore</p>
               <p class="fs-6">2 days ago</p>
               </div>
               </div> 
               <div className="col-lg-3">
              <Link to="/Tabletpage"><img src="https://images.olx.com.pk/thumbnails/395503800-800x600.webp" alt="" srcset="" width='300' height='200' /></Link>
               <div class='border border-1 m-0'>
               <h5>Rs  5,499</h5>
               <p class="fs-6" >USA Solar power bank 28600 mah </p>
               <p class="fs-6">Allama Iqbal Town - Nishtar Block, Lahore</p>
               <p class="fs-6">1 day ago</p>
               </div>
               </div> 

          </div>
                                 {/* Appraoch section */}
                    <div class='d-flex justify-content-evenly div2 align-items-center'>
                         <div>
                              <img src="https://www.olx.com.pk/assets/olxMobileApp.f5579f77e849b600ad60857e46165516.webp" alt="" />
                         </div>
                         <div class='div3'>
                              <h2>TRY THE OLX APP</h2>
                              <h5>Buy, sell and find just about anything <br/> using  the app on your mobile.</h5>
                         </div>
                         <div >
                              <h6 class='mt-5'>GET YOUR APP TODAY</h6>
                              <div>
                                   <img src="https://www.olx.com.pk/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" alt=""  height='120' width='130'/>
                                   <img src="https://www.olx.com.pk/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" alt="" height='120' width='130'/>
                                   <img src="https://www.olx.com.pk/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" alt="" height='120' width='130'/>
                              </div>
                         </div>
                    </div>
               </div> 



      </div>

  )
}

export default Categories
