import React from "react";
import img from "../../assets/imgs/avataaars.svg";

export default function Home() {
  return (
    <div className="heroSec d-flex justify-content-center align-items-center">
      <div className="heroContent text-center text-light">
        <img src={img} alt="avatar" className="" />
        <h1 className="webTitle text-uppercase fw-bold mt-4 mb-3">
          start framework
        </h1>
        <div className="starLine d-flex justify-content-center align-items-center flex-nowrap column-gap-3 mb-3">
          <div className="bg-light line"></div>
          <i className="fa-solid fa-star"></i>
          <div className="bg-light line"></div>
        </div>
        <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}
