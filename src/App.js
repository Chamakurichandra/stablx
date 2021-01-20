import React, { Component } from 'react'
import Home from "./Pages/Home";
import Header from "./Pages/Header";
export default class App extends Component {
  animate=()=>{
    window.addEventListener("scroll",(e)=>{
      var scrollY = e.path[1].scrollY
      if(scrollY > 50) {
        let header = document.querySelector('#head');
        header.style.backgroundColor = '#fff';
        let animation = document.querySelector(".animat");
        animation.style.color="black";
      }
    })

  }
  componentDidMount() {
    this.animate();
  }
  render() {
    return (
      <div>
        <Header/>
        <Home/>
      </div>
    )
  }
}
