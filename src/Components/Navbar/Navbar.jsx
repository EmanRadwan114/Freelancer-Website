import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        document.querySelector("header").classList.remove("py-3");
      } else {
        document.querySelector("header").classList.add("py-3");
      }
    });
  }, []);

  return (
    <header className="fixed-top w-100 py-3">
      <nav className="navbar navbar-expand-lg">
        <div className="container-sm">
          <Link
            className="navbar-brand text-uppercase fw-bold fs-2 text-light"
            to="/"
          >
            start framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars text-light border rounded-3 px-3 py-2 border-2 border-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item mx-auto mx-lg-0">
                <NavLink
                  className={`nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""}} text-light fs-6 text-uppercase fw-bold px-3`}
                  aria-current="page"
                  to="about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item mx-auto mx-lg-0">
                <NavLink
                  className={`nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""}} text-light fs-6 text-uppercase fw-bold px-3`}
                  to="portfolio"
                >
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item mx-auto mx-lg-0">
                <NavLink
                  className={`nav-link ${({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                      ? "pending"
                      : ""}} text-light fs-6 text-uppercase fw-bold px-3`}
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
