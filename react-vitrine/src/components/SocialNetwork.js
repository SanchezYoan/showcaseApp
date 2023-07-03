import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        console.log("hear");
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });
      link.addEventListener("mouseleave", (e) => {
        // link.style.transition = "0.3s";
        link.style.transform = "";
      });
    });
  };
  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.linkedin.com/in/yoan-sanchez-83a4a9201/"
          taget="_blank"
          rel="nooper noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-linkedin"></i>
          </li>
        </a>
        <a
          href="https://github.com/SanchezYoan"
          taget="_blank"
          rel="nooper noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-github"></i>
          </li>
        </a>
        <a
          href=""
          taget="_blank"
          rel="nooper noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fa-brands fa-microsoft"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
