import React from "react";
import errorImg from "../../assets/imgs/error-6482984.svg";

export default function PageNotFound() {
  return (
    <div className="d-flex justify-content-center align-items-center error404 text-center">
      <div className="container-sm">
        <h1 className="fw-bold text-uppercase title404">404 Page</h1>
        <p className="fw-semibold fs-4 content404">
          The Content you are searching for is not found.
        </p>
        <img src={errorImg} alt="404 error" className="w-25" />
      </div>
    </div>
  );
}
