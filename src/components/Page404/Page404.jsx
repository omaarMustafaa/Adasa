import React from "react";
import "./Page404.css";
import { NavLink } from "react-router";

export default function Page404() {
  return (
    <>
      <section className="not-found-section position-relative d-flex align-items-center justify-content-center overflow-hidden">
        <div className="grid-pattern position-absolute top-0 start-0 w-100 h-100"></div>

        <div className="position-absolute top-0 start-0 w-100 h-100 opacity-40 pointer-events-none">
          <div className="blob blob-float-1"></div>
          <div className="blob blob-float-2"></div>
        </div>

        <div
          className="container position-relative text-center px-4 py-5"
          style={{ maxWidth: "500px" }}
        >
          <div className="position-relative mb-3">
            <h1 className="error-code text-gradient m-0 user-select-none">
              404
            </h1>
            <div className="error-code-glow position-absolute top-0 start-0 w-100 h-100 user-select-none pointer-events-none">
              404
            </div>
          </div>

          <div className="icon-box-wrapper position-relative mx-auto mb-4">
            <div className="icon-box-bg position-absolute top-0 start-0 w-100 h-100 rounded-circle"></div>

            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <i className="fa-regular fa-face-frown icon-frown"></i>
            </div>

            <div className="shape-square position-absolute"></div>
            <div className="shape-circle position-absolute"></div>
          </div>

          <h2 className="fs-2 fw-bold text-white mb-3">
            عفواً! الصفحة غير موجودة
          </h2>
          <p className="text-neutral-400 fs-5 mb-4">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار
            الصحيح.
          </p>

          <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
            <NavLink
              className="btn-primary-custom d-flex align-items-center justify-content-center gap-2"
              to="/"
            >
              <i className="fa-solid fa-house"></i>
              <span>الذهاب للرئيسية</span>
            </NavLink>
            <NavLink
              className="btn-secondary-custom d-flex align-items-center justify-content-center gap-2"
              to="/blog"
            >
              <i className="fa-solid fa-newspaper"></i>
              <span>تصفح المقالات</span>
            </NavLink>
          </div>

          <div className="pt-4 border-top border-dark-subtle">
            <p className="small text-neutral-500 mb-3">قد تجد هذه مفيدة:</p>
            <div className="d-flex flex-wrap justify-content-center gap-3 small">
              <NavLink className="quick-link fw-medium" to="/blog">
                المدونة
              </NavLink>
              <span className="text-neutral-600">•</span>
              <NavLink className="quick-link fw-medium" to="/about">
                من نحن
              </NavLink>
              <span className="text-neutral-600">•</span>
              <NavLink className="quick-link fw-medium" to="/privacy">
                الخصوصية
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
