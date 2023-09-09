import { useState } from "react";
import img1 from "../../assets/imgs/poert1.png";
import img2 from "../../assets/imgs/port2.png";
import img3 from "../../assets/imgs/port3.png";
import Img from "../img/Img";

export default function Portfolio() {
  const image = [img1, img2, img3, img1, img2, img3];
  const [imgSrc, setImgSrc] = useState("");
  const [imgIndex, setImgIndex] = useState();

  function showImg(img, index) {
    setImgSrc(img);
    setImgIndex(index);
    document.querySelector(".imgBox").classList.replace("d-none", "d-flex");
    document.querySelector("body").classList.add("overflow-hidden");
  }

  function hideImg() {
    document.querySelector(".imgBox").classList.replace("d-flex", "d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="portfSec d-flex justify-content-center align-items-center">
        <div className="container-sm">
          <div className="portfContent">
            <h1 className="portfTitle text-uppercase fw-bold mt-4 mb-3 text-center">
              portfolio component
            </h1>
            <div className="starLine d-flex justify-content-center align-items-center flex-nowrap column-gap-3 mb-3">
              <div className=" line"></div>
              <i className="fa-solid fa-star"></i>
              <div className=" line"></div>
            </div>
            <div className="row g-5">
              {image.map((img, index) => {
                return (
                  <Img
                    source={img}
                    key={index}
                    index={index}
                    showImg={showImg}
                    hideImg={hideImg}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* portfolio box */}
        <div
          className="imgBox position-fixed top-0 start-0 bottom-0 end-0 d-none justify-content-center align-items-center"
          onClick={(e) => {
            e.stopPropagation();
            hideImg();
          }}
        >
          <img
            src={imgSrc}
            alt={`portfolio ${imgIndex}`}
            className="rounded-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
        </div>
      </div>
    </>
  );
}
