import React, { useState } from "react";
import "./ResponsiveBar.css";

const ResponsiveBar = () => {
  const [nav, setNav] = useState("nav_link nav_link-li");

  const handlerToActive = ()=>{
    setNav("nav-active nav_link");
  }
  const handlerClose = ()=>{
    setNav("nav_link nav_link-li");
  }


//   const burger = document.querySelector(".burger");
//   const nav = document.querySelector(".nav_link");
//   const navLinks = document.querySelectorAll(".nav_link li");
  // // Toggle Nav
  // burger.addEventListener("click", () => {
  //   nav.classList.toggle("nav-active");

  //   //   Animate Links
  //   navLinks.forEach((link, index) => {
  //     if (link.style.animation) {
  //       link.style.animation = "";
  //     } else {
  //       link.style.animation = `navLinkFade 0.5s ease forwards ${
  //         index / 7 + 0
  //       }s`;
  //     }
  //   });
  //   burger.classList.toggle('toggle')
  // });
  return (
    <div className="main">
      <nav>
        <div class="logo">
          <h4>The Nav</h4>
        </div>
        <ul class={nav}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
        </ul>
       {
           nav=="nav_link nav_link-li" &&  <div onClick={handlerToActive} class="burger">
           <div class="line1"></div>
           <div class="line2"></div>
           <div class="line3"></div>
         </div>
       }
       {
           nav=="nav-active nav_link" &&  <div onClick={handlerClose} class="burger toggle">
           <div class="line1"></div>
           <div class="line2"></div>
           <div class="line3"></div>
         </div>
       }
      </nav>
    </div>
  );
};

export default ResponsiveBar;
