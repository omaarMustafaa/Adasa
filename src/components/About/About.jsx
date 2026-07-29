import React, { useState } from "react";
import "./About.css";
import { NavLink } from "react-router";
import DiscoverOurBook from "../DiscoverOurBook/DiscoverOurBook";
import photographers from '../../data/photographers'

export default function About() {


  const posts = photographers.posts

  return (
    <>
      <main id="about">
        <section className="about-section not-found-section position-relative d-flex align-items-center justify-content-center overflow-hidden ">
          <div className="grid-pattern position-absolute top-0 start-0 w-100 h-100"></div>

          <div className="position-absolute top-0 start-0 w-100 h-100 opacity-40 pointer-events-none">
            <div className="blob blob-float-1"></div>
            <div className="blob blob-float-2"></div>
          </div>
          <div className="glow-orb glow-orange" />
          <div className="glow-orb glow-yellow" />
          <div
            className="container position-relative py-4"
            style={{ maxWidth: 1140 }}
          >
            <div className="d-inline-flex align-items-center gap-2 mb-4 section-label">
              <span className="ping-container position-relative d-inline-flex">
              <span className="ping-wave position-absolute rounded-circle" />
              <span className="ping-dot position-relative rounded-circle" />
            </span>
              <span className="pulse-dot" />
              من نحن
            </div>
            <h1 className="display-4 fw-bold mb-4">
              مهمتنا هي <span className="gradient-text">الإعلام والإلهام</span>
            </h1>
            <p
              className="lead text-secondary mx-auto mb-5 max-w-75 leading-relaxed"
              style={{ maxWidth: 760 }}
            >
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
              المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
            </p>
            <div className="row g-3 justify-content-center">
              <div className="col-6 col-md-3">
                <div className="glass-card p-4">
                  <i className="fa-solid fa-users text-color-icon mb-2 fs-3" />
                  <div className="fs-2 fw-bold gradient-text mb-1">+2مليون</div>
                  <div className="small text-secondary">قارئ شهرياً</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="glass-card p-4">
                  <i className="fa-solid fa-newspaper text-color-icon mb-2 fs-3" />
                  <div className="fs-2 fw-bold gradient-text mb-1">+500</div>
                  <div className="small text-secondary">مقالة منشورة</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="glass-card p-4">
                  <i className="fa-solid fa-pen-nib text-color-icon mb-2 fs-3" />
                  <div className="fs-2 fw-bold gradient-text mb-1">+50</div>
                  <div className="small text-secondary">كاتب خبير</div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="glass-card p-4">
                  <i className="fa-solid fa-book-open text-color-icon mb-2 fs-3" />
                  <div className="fs-2 fw-bold gradient-text mb-1">+15</div>
                  <div className="small text-secondary">تصنيف</div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="values-section py-5 position-relative text-center">
          <div className="container py-4" style={{ maxWidth: 1140 }}>
            <div className="mb-5">
              <h2 className="fs-1 fw-bold text-white mb-3 d-flex align-items-center justify-content-center gap-3">
                <span className="pill-bar gradient-bar-1" />
                قيمنا
                <span className="pill-bar gradient-bar-2" />
              </h2>
              <p
                className="fs-5 text-secondary mx-auto mb-0"
                style={{ maxWidth: 600 }}
              >
                المبادئ التي توجه كل ما نقوم بإنشائه
              </p>
            </div>
            <div className="row g-4">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="value-card p-4 rounded-4 position-relative overflow-hidden h-100">
                  <div className="card-glow glow-1" />
                  <div className="position-relative z-1">
                    <i className="fa-solid fa-bullseye text-orange fs-1 mb-3 d-block w-100 text-center" />
                    <h3 className="fs-5 fw-bold text-white mb-2 card-title-hover">
                      الجودة أولاً
                    </h3>
                    <p className="text-secondary small mb-0">
                      محتوى مدروس ومكتوب بخبرة
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="value-card p-4 rounded-4 position-relative overflow-hidden h-100">
                  <div className="position-relative z-1">
                    <i className="fa-solid fa-bolt text-orange fs-1 mb-3 d-block w-100 text-center" />
                    <h3 className="fs-5 fw-bold text-white mb-2 card-title-hover">
                      تركيز عملي
                    </h3>
                    <p className="text-secondary small mb-0">
                      أمثلة واقعية يمكنك تطبيقها اليوم
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="value-card p-4 rounded-4 position-relative overflow-hidden h-100">
                  <div className="card-glow glow-1" />
                  <div className="position-relative z-1">
                    <i className="fa-solid fa-handshake text-orange fs-1 mb-3 d-block w-100 text-center" />
                    <h3 className="fs-5 fw-bold text-white mb-2 card-title-hover w-100 text-center">
                      المجتمع
                    </h3>
                    <p className="text-secondary small mb-0">
                      تعلم مع آلاف المصورين
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3">
                <div className="value-card p-4 rounded-4 position-relative overflow-hidden h-100">
                  <div className="position-relative z-1">
                    <i className="fa-solid fa-arrows-rotate text-orange fs-1 mb-3 d-block w-100 text-center" />
                    <h3 className="fs-5 fw-bold text-white mb-2 card-title-hover">
                      دائماً محدث
                    </h3>
                    <p className="text-secondary small mb-0">
                      أحدث الاتجاهات وأفضل الممارسات
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 team-section">
          <div className="container">
            <div className="text-center mb-5">
              <span className="section-label mb-2 d-inline-block text-uppercase fw-semibold">
                فريقنا
              </span>
              <h2 className="display-6 fw-bold text-white mb-3">
                تعرف على كتابنا
              </h2>
              <p className="lead text-muted mx-auto section-description">
                فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع
                المجتمع.
              </p>
            </div>

            <div className="row g-4 ">
              {posts.map((e) => (
                <DiscoverOurBook props={e} />
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section py-5 position-relative overflow-hidden text-center text-white">
          <div className="cta-glow glow-top-right" />
          <div className="cta-glow glow-bottom-left" />
          <div
            className="container position-relative z-1 py-4"
            style={{ maxWidth: 896 }}
          >
            <h2 className="display-5 fw-bold mb-3">لديك أسئلة؟ دعنا نتحدث!</h2>
            <p className="fs-5 text-white-80 mb-4 mx-auto max-w-xl">
              نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
              أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <NavLink
                to="mailto:om24682005@gmail.com"
                className="btn btn-dark-custom btn-lg d-inline-flex align-items-center justify-content-center gap-2 px-4 py-3 rounded-3 text-decoration-none fw-semibold"
              >
                <i className="fa-regular fa-envelope"></i>
                تواصل معنا
              </NavLink>
              <NavLink
                to="/blog"
                className="btn btn-outline-custom btn-lg d-inline-flex align-items-center justify-content-center gap-2 px-4 py-3 rounded-3 text-decoration-none fw-semibold"
              >
                تصفح المقالات
              </NavLink>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
