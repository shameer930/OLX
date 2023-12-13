import React from 'react'
import {Link} from "react-router-dom"
import "./Dashboard.css"
const Dasboard = () => {
  return (
    <div>
        <h2 id='hz'>Dashboard</h2>
{/* NAVBAR 2 */}

<nav id='div1' class="navbar navbar-expand-lg navbar-light  me-0">
    
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ul2 mx-auto">
       <li class="nav-item active itemz ">
        <Link to="/ProductForm" class="nav-link  b1" href="/#">Product Form <span class="sr-only">(current)</span></Link>
      </li> 
      <li class="nav-item active itemz">
        <Link to="/userdata" class="nav-link  b1" href="/#">Users<span class="sr-only">(current)</span></Link>
      </li> 
      <li class="nav-item active itemz">
        <Link to="/Mobilepage" class="nav-link  b1" href="/#">Sales <span class="sr-only">(current)</span></Link>
      </li> 
      <li class="nav-item active itemz">
        <Link to="/Mobilepage" class="nav-link  b1" href="/#">Order<span class="sr-only">(current)</span></Link>
      </li> 
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Dasboard
