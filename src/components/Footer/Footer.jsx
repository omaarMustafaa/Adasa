import React from "react";

import "./Footer.css";
import { Link, NavLink } from "react-router";
import categories from "../../data/categories";

export default function Footer() {
  return (
    <footer className="position-relative text-light overflow-hidden ">
      <div className="footer-orb orb-top-left pointer-events-none"></div>
      <div className="footer-orb orb-bottom-right pointer-events-none"></div>
      <div className="container">
        <div className="heading-footer">
          <div className="row g-5">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="inner">
                <div className="header d-flex gap-3 align-items-center">
                  <span className="logo d-flex justify-content-center align-items-center fw-bold">
                    ع
                  </span>
                  <h2 className="fw-bold">عدسة</h2>
                </div>
                <p>
                  مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                  المحترفين ونصائح عملية لتطوير مهاراتكم.
                </p>
                <div className="links d-flex gap-2">
                  <a href="https://www.youtube.com/" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/omar-mostafa-586152384/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>

                  <a href="https://github.com/omaarMustafaa" target="_blank">
                    <i className="fa-brands fa-github"></i>
                  </a>

                  <a href="https://x.com/" target="_blank">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="inner ">
                <div className="header d-flex gap-3 align-items-center">
                  <div className="line-header"></div>
                  <h2 className="fw-bold">استكشف</h2>
                </div>
                <ul className="list-unstyled d-flex gap-2 flex-column">
                  <li>
                    <i className="fa-solid fa-angle-left"></i>{" "}
                    <NavLink to="/" className="text-decoration-none">
                      الرئيسية
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-angle-left"></i>
                    <NavLink to="/blog" className="text-decoration-none">
                      المدونة
                    </NavLink>
                  </li>
                  <li>
                    {" "}
                    <i className="fa-solid fa-angle-left"></i>
                    <NavLink to="/about" className="text-decoration-none">
                      من نحن
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="inner ">
                <div className="header d-flex gap-3 align-items-center">
                  <div className="line-header"></div>
                  <h2 className="fw-bold">التصنيفات</h2>
                </div>
                <ul className="list-unstyled d-flex gap-2 flex-column">
                  <li>
                    <i className="fa-solid fa-angle-left"></i>{" "}
                    <Link
                      to="/blog?category=إضاءة"
                      className="text-decoration-none"
                    >
                      إضاءة
                    </Link>
                  </li>

                  <li>
                    <i className="fa-solid fa-angle-left"></i>
                    <Link
                      to="/blog?category=بورتريه"
                      className="text-decoration-none"
                    >
                      بورتريه
                    </Link>
                  </li>

                  <li>
                    <i className="fa-solid fa-angle-left"></i>
                    <Link
                      to="/blog?category=مناظر طبيعية"
                      className="text-decoration-none"
                    >
                      مناظر طبيعية
                    </Link>
                  </li>

                  <li>
                    <i className="fa-solid fa-angle-left"></i>
                    <Link
                      to="/blog?category=تقنيات"
                      className="text-decoration-none"
                    >
                      تقنيات
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="inner ">
                <div className="header d-flex gap-3 align-items-center">
                  <div className="line-header"></div>
                  <h2 className="fw-bold">ابقى على اطلاع</h2>
                </div>
                <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
                <input
                  className="input"
                  type="email"
                  placeholder="أدخل بريدك الإلكتروني"
                />
                <button className="btn-">اشتراك</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="linefooter"></div>
      <div className="container">
        <div className="footer-footer d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 text-center">
          <p className="footer-text mb-0">
            © 2026 عدسة. صنع بكل{" "}
            <i className="fa-solid fa-heart heart-icon mx-1"></i> جميع الحقوق
            محفوظة.
          </p>
          <div className="d-flex align-items-center gap-4">
            <NavLink className="footer-link" to="/privacy">
              سياسة الخصوصية
            </NavLink>
            <NavLink className="footer-link" to="/terms">
              شروط الخدمة
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
