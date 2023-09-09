import React, { useEffect } from "react";

export default function Contact() {
  useEffect((e) => {
    document
      .querySelector(".contactSec form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
      });

    const nameInput = document.getElementById("userName");
    const emailInput = document.getElementById("userEmail");
    const ageInput = document.getElementById("userAge");
    const passInput = document.getElementById("userPass");

    nameInput.addEventListener("keyup", (e) => {
      if (nameInput.value !== "") {
        nameInput.parentElement.previousElementSibling.style.top = "-30px";
      } else {
        nameInput.parentElement.previousElementSibling.style.top = "0px";
      }
    });
    emailInput.addEventListener("keyup", (e) => {
      if (emailInput.value !== "") {
        emailInput.parentElement.previousElementSibling.style.top = "-30px";
      } else {
        emailInput.parentElement.previousElementSibling.style.top = "0px";
      }
    });
    ageInput.addEventListener("keyup", (e) => {
      if (ageInput.value !== "") {
        ageInput.parentElement.previousElementSibling.style.top = "-30px";
      } else {
        ageInput.parentElement.previousElementSibling.style.top = "0px";
      }
    });
    passInput.addEventListener("keyup", (e) => {
      if (passInput.value !== "") {
        passInput.parentElement.previousElementSibling.style.top = "-30px";
      } else {
        passInput.parentElement.previousElementSibling.style.top = "0px";
      }
    });
  }, []);

  return (
    <div className="contactSec d-flex justify-content-center align-items-center">
      <div className="container-sm">
        <h1 className="contactTitle text-uppercase fw-bold mt-4 mb-3 text-center">
          contact component
        </h1>
        <div className="starLine d-flex justify-content-center align-items-center flex-nowrap column-gap-3 mb-3">
          <div className=" line"></div>
          <i className="fa-solid fa-star"></i>
          <div className=" line"></div>
        </div>
        <form method="post" className="mx-auto">
          <div className="formGroup position-relative">
            <label
              htmlFor="userName"
              className="mb-2 ms-2 position-absolute start-0"
            >
              userName
            </label>

            <div className="overflow-hidden pb-3">
              <input
                type="text"
                placeholder="userName"
                className="form-control"
                id="userName"
                name="userName"
              />
            </div>
          </div>

          <div className="formGroup position-relative">
            <label
              htmlFor="userAge"
              className="mb-2 ms-2 position-absolute start-0"
            >
              userAge
            </label>
            <div className="overflow-hidden">
              <input
                type="number"
                placeholder="userAge"
                className="form-control pb-3"
                id="userAge"
                name="userAge"
              />
            </div>
          </div>

          <div className="formGroup position-relative">
            <label
              htmlFor="userEmail"
              className="mb-2 ms-2 position-absolute start-0"
            >
              userEmail
            </label>
            <div className="overflow-hidden">
              <input
                type="email"
                placeholder="userEmail"
                className="form-control pb-3"
                id="userEmail"
                name="userEmail"
              />
            </div>
          </div>

          <div className="formGroup position-relative">
            <label
              htmlFor="userPass"
              className="mb-2 ms-2 position-absolute start-0"
            >
              userPass
            </label>
            <div className="overflow-hidden">
              <input
                type="password"
                placeholder="userpass"
                className="form-control pb-3"
                id="userPass"
                name="userPass"
              />
            </div>
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="text-capitalize btn submitBtn text-light fw-semibold rounded-2"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
