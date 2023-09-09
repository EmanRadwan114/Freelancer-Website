import React from "react";

export default function Img({ source, index, showImg }) {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        className="singlePortf position-relative overflow-hidden"
        onClick={(e) => {
          showImg(source, index);
        }}
      >
        <img
          src={source}
          alt={`portfolio project${index}`}
          className="w-100 rounded-3"
        />
        <div className="portfOverlay position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center">
          <i className="fa-solid fa-plus text-light fw-bold"></i>
        </div>
      </div>
    </div>
  );
}
