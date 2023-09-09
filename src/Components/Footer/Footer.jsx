import React from "react";

export default function Footer() {
  return (
    <footer className="text-light">
      <div className="footerContainer py-5">
        <div className="container-sm py-3">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="locationInfo text-center">
                <h3 className="text-uppercase fw-semibold mb-4">location</h3>
                <p>2215 John Daniel Drive Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="socialIcons text-center">
                <h3 className="text-uppercase fw-semibold mb-4">
                  around the world
                </h3>
                <div className="icons d-flex justify-content-center align-items-center gap-2">
                  <div className="icon border border-1 border-light d-flex justify-content-center align-items-center rounded-circle">
                    <i className="fa-brands fa-facebook p-2 fs-5"></i>
                  </div>
                  <div className="icon border border-1 border-light d-flex justify-content-center align-items-center rounded-circle">
                    <i className="fa-brands fa-twitter p-2 fs-5"></i>
                  </div>
                  <div className="icon border border-1 border-light d-flex justify-content-center align-items-center rounded-circle">
                    <i className="fa-brands fa-linkedin-in p-2 fs-5"></i>
                  </div>
                  <div className="icon border border-1 border-light d-flex justify-content-center align-items-center rounded-circle">
                    <i className="fa-solid fa-globe p-2 fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="aboutInfo text-center">
                <h3 className="text-uppercase fw-semibold mb-4">
                  about freelancer
                </h3>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightSec py-4 text-center">
        <p className="m-0">Copyright &copy; Your Website 2021</p>
      </div>
    </footer>
  );
}
