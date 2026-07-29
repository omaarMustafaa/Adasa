import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo-GdqARQRt.png";
import { NavLink } from "react-router";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenue = () => {
    setIsOpen(!isOpen);
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-md fixed-top ${scrolled ? "navbar-custom scrolled" : "navbar-custom"}`}
    >
      <div className="container">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-3"
          href="#"
        >
          <img className="img-fluid" src={Logo} alt="brand-logo" />
          <div className="">
            <h2 className="brand-title">عدسة</h2>
            <p className="brand-subtitle d-none d-sm-block mb-0">
              عالم التصوير الفوتوغرافي
            </p>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={toggleMenue}
          aria-label="Toggle navigation"
          onClick={toggleMenue}
        >
          <i className={`fa-solid ${isOpen ? "fa-x" : "fa-bars"}`}></i>
        </button>

        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav mx-auto">
            <NavLink className="nav-link " aria-current="page" to="/">
              الرئيسية
            </NavLink>
            <NavLink className="nav-link" to="/blog">
              المدونة
            </NavLink>
            <NavLink className="nav-link" to="/about">
              من نحن
            </NavLink>
          </div>

          <div className="d-flex align-items-center">
            <button
              className="search text-center d-none d-md-block"
              type="button"
              aria-label="بحث"
            >
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <NavLink className="btn-primary-custom text-center" to="/blog">
              ابدأ القراءة
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
