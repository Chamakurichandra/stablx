import React, { Component } from 'react'
import Logo from "../assert/logo.png";
export default class Header extends Component {
    render() {
        return (
            <div className="header" id="head">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <a className="navbar-brand text-white ml-5 " href="#1" style={{fontSize:"1.5em"}}>
    <img src={Logo} width="30" height="30" className="d-inline-block align-top mt-1 " alt=""></img>
  <span className="pl-3 animat">AttainU</span>  
    </a>
  <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon "></span>
  </button>

  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto ">
      <li className="nav-item dropdown px-3 ">
        <a className="nav-link dropdown-toggle text-white  " href="#1" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span className="animat">  Course</span>
        </a>
        <div className="dropdown-menu " aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#course">Course Details</a>
          <a className="dropdown-item" href="#live">Live Batches</a>
          <a className="dropdown-item" href="#student">Student Projects</a>
          <a className="dropdown-item" href="#Faq">FAQ</a>
        </div>
      </li>
      <li className="nav-item dropdown px-3 ">
        <a className="nav-link dropdown-toggle text-white " href="#1" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Placements
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#placement">Placement Details</a>
          <a className="dropdown-item" href="#placement">Placement Stores</a>
        </div>
      </li>
      <li className="nav-item dropdown px-3 animat">
        <a className="nav-link dropdown-toggle text-white " href="#1" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Hire
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#Hire">Hire from AttainU</a>
          <a className="dropdown-item" href="#verify">Verify Student Status</a>
        </div>
      </li>
      <li className="px-3">
          <button type="button" className="btn btn-outline-warning change">Apply Now</button>
      </li>
    </ul>
  </div>
</nav>
 </div>
           
        )
    }
}
