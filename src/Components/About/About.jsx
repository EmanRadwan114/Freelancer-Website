import React from "react";

export default function About() {
  return (
    <div className="aboutSec text-light d-flex justify-content-center align-items-center">
      <div className="container-sm">
        <div className="aboutContent">
          <h1 className="aboutTitle text-center text-uppercase fw-bold mt-4 mb-3">
            about component
          </h1>
          <div className="starLine d-flex justify-content-center align-items-center flex-nowrap column-gap-3 mb-3">
            <div className="bg-light line"></div>
            <i className="fa-solid fa-star"></i>
            <div className="bg-light line"></div>
          </div>
          <div className="row row-gap-3 column-gap-3">
            <div className="col-md-5 offset-md-1">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
