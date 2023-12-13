import React from 'react'
import olx1 from './assets/olx1.svg'
import olx2 from './assets/olx2.svg'
import './Navbar.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    // sticky Pre-Navbar
   <div>
     <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand " href="/#"><img src={olx1} alt="olx1" width='40' height='35' srcset="" /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link  b1" aria-current="page" href="/#">MOTORS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link b1" href="/#">PROPERTY</a>
        </li>
        </ul>

    </div>
  </div>
</nav>
{/* Navbar 1 */}

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/#"><img src={olx2} alt="olx2" srcset=""  width='80' height="45" class="img1"/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5 dropdown1" href="/#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Pakistan
          </a>
          <ul class="dropdown-menu ul1" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item  text-danger" href="/#" >Use current location</a></li>
            <hr />
            <li><a class="dropdown-item" href="/#">Another action</a></li>
            <hr />
            <li><a class="dropdown-item" href="/#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <input class=" input1" type="search" placeholder="Find Cars,Mobile phones and more...." />
        </li>
       <li className="nav-item">
       <a class="nav-link  a1" href="/#">LOGIN</a>
       </li>
       <li className="nav-item">
       <a class="nav-link   a2" href="/#">+SELL</a>
       </li>
      </ul>
    </div>
  </div>
</nav>
{/* NAVBAR 2 */}

<nav id='div1' class="navbar navbar-expand-lg navbar-light  ">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn  dropdown-toggle b1" data-bs-toggle="dropdown" aria-expanded="false">
          All CATEGORIES
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="/#">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ul2">
      <li class="nav-item active ">
        <Link to="/Mobilepage" class="nav-link  b1" href="/#">Mobile Phones <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to="/Carpage" class="nav-link b1" href="/#">Cars</Link>
      </li>
      <li class="nav-item">
        <Link to="/Bikepage" class="nav-link  b1" href="/#">Motorcycles</Link>
      </li>
      <li class="nav-item">
        <Link to="/Housepage" class="nav-link b1" href="/#">Houses</Link>
      </li>
      <li class="nav-item">
        <Link to="/Equipmentpage" class="nav-link b1" href="/#">Tv-Video-Audio</Link>
      </li>
      <li class="nav-item">
        <Link to="/Tabletpage" class="nav-link b1" href="/#">Tablets</Link>
      </li>
      <li class="nav-item">
        <Link to="/Plotpage" class="nav-link b1" href="/#">Land & Plot</Link>
      </li>
    </ul>
  </div>
</nav>



   </div>
    


  )
}

export default Navbar
