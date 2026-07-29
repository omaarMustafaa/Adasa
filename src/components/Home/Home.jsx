import React from "react";
import "./Home.css";
import photographers from "../../data/photographers";
import { Link, NavLink } from "react-router";
import ArticalFav from "../ArticalFav/ArticalFav";
import LatestArticles from "../LatestArticles/LatestArticles";
export default function Home() {
  const artFav = photographers.posts.slice(0, 3);
  const latestArticles = photographers.posts.slice(3, 6);

  return (
    <>
      <main>
        <section className="hero-section position-relative d-flex align-items-center overflow-hidden min-vh-90">
          <div className="grid-overlay position-absolute inset-0" />
          <div className="blob blob-1 position-absolute rounded-circle blur-3xl" />
          <div className="blob blob-2 position-absolute rounded-circle blur-3xl" />
          <div className="blob blob-3 position-absolute rounded-circle blur-3xl top-50 start-50 translate-middle" />
          <div className="container position-relative py-5">
            <div className="row justify-content-center text-center">
              <div className="col-lg-10 col-xl-8">
                <div className="section-label d-inline-flex align-items-center gap-2 mb-4 animate-fade-in">
                  <span className="ping-container position-relative d-inline-flex">
                    <span className="ping-wave position-absolute rounded-circle" />
                    <span className="ping-dot position-relative rounded-circle" />
                  </span>
                  <span className="small fw-medium text-light-50">
                    مرحباً بك في عدسة
                  </span>
                </div>
                <h1 className="display-3 fw-bold text-white mb-3 tracking-tight">
                  اكتشف <span className="gradient-text">فن</span>
                  <br />
                  التصوير الفوتوغرافي
                </h1>
                <p className="fs-4 text-secondary mb-5 max-w-2xl mx-auto leading-relaxed">
                  انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
                  التصوير.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-5">
                  <Link
                    to="/blog"
                    className="btn-custom-primary d-inline-flex align-items-center justify-content-center gap-2 group text-decoration-none"
                  >
                    
                    <span>استكشف المقالات</span>
                    <i className="fa-solid fa-arrow-left transition-transform" />
                  </Link>
                  <Link
                    to="/about"
                    className="btn-custom-secondary d-inline-flex align-items-center justify-content-center gap-2 text-decoration-none"
                  >
                    <i className="fa-solid fa-circle-info" />
                    <span>اعرف المزيد</span>
                  </Link>
                </div>
                <div className="row row-cols-2 row-cols-md-4 g-3 max-w-3xl mx-auto">
                  <div className="col">
                    <div className="glass-card p-3 h-100">
                      <i className="fa-solid fa-newspaper fs-3 text-orange mb-1" />
                      <p className="fs-2 fw-bold gradient-text mb-0">+50</p>
                      <p className="text-secondary small mb-0">مقالة</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="glass-card p-3 h-100">
                      <i className="fa-solid fa-users fs-3 text-orange mb-1" />
                      <p className="fs-2 fw-bold gradient-text mb-0">+10ألف</p>
                      <p className="text-secondary small mb-0">قارئ</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="glass-card p-3 h-100">
                      <i className="fa-solid fa-folder-open fs-3 text-orange mb-1" />
                      <p className="fs-2 fw-bold gradient-text mb-0">4</p>
                      <p className="text-secondary small mb-0">تصنيفات</p>
                    </div>
                  </div>
                  <div className="col">
                    <div className="glass-card p-3 h-100">
                      <i className="fa-solid fa-pen-nib fs-3 text-orange mb-1" />
                      <p className="fs-2 fw-bold gradient-text mb-0">6</p>
                      <p className="text-secondary small mb-0">كاتب</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-articles-section position-relative overflow-hidden py-5">
          <div className="gradient-bg-overlay position-absolute top-0 end-0 h-100 w-33" />
          <div className="container position-relative py-4 py-md-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
              <div>
                <div className="section-badge d-inline-flex align-items-center gap-2 mb-3">
                  <span className="ping-container position-relative d-inline-flex">
                    <span className="ping-wave position-absolute rounded-circle" />
                    <span className="ping-dot position-relative rounded-circle" />
                  </span>
                  <span className="small fw-semibold text-orange">مميز</span>
                </div>
                <h2 className="display-6 fw-bold text-white mb-2">
                  مقالات مختارة
                </h2>
                <p className="text-neutral-400 mb-0">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
              <NavLink
                to="/blog"
                className="btn-all-articles d-inline-flex align-items-center gap-2 px-3 py-3 text-white text-decoration-none fw-medium"
              >
                <span>عرض الكل</span>
                <i className="fa-solid fa-arrow-left arrow-icon" />
              </NavLink>
            </div>
            <div className="d-flex flex-column gap-4">
              {artFav.map((e) => (
                <ArticalFav props={e} />
              ))}
            </div>
          </div>
        </section>

        <section class="categories-section position-relative  py-5">
          <div class="container py-4 py-md-5">
            <div class="text-center mb-5">
              <div class="section-label d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3">
                <span class="ping-container position-relative d-inline-flex">
                  <span class="ping-wave position-absolute rounded-circle"></span>
                  <span class="ping-dot position-relative rounded-circle"></span>
                </span>
                <span class=" fw-semibold text-orange px-2 py-1">
                  التصنيفات
                </span>
              </div>
              <h2 class="display-6 fw-bold text-white mb-2">
                استكشف حسب الموضوع
              </h2>
              <p class="text-neutral-400 mx-auto max-w-lg mb-0">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>

            <div class="row row-cols-2 row-cols-md-4  g-3 ">
              <div class="col">
                <Link
                  to="/blog?category=إضاءة"
                  class="category-card group position-relative d-block p-4 rounded-4 text-decoration-none h-100 overflow-hidden"
                >
                  <div class="card-hover-gradient position-absolute inset-0"></div>
                  <div class="position-relative z-1">
                    <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-3 mb-3">
                      <i class="fa-solid fa-sun fs-4 text-orange card-icon"></i>
                    </div>
                    <h3 class="fs-5 fw-bold text-white mb-1 card-title">
                      إضاءة
                    </h3>
                    <p class="small text-neutral-500 mb-0 card-count">
                      3 مقالة
                    </p>
                    <div class="arrow-badge position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle">
                      <i class="fa-solid fa-arrow-left text-white fs-7"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="col">
                <Link
                  to="/blog?category=بورتريه"
                  class="category-card group position-relative d-block p-4 rounded-4 text-decoration-none h-100 overflow-hidden"
                >
                  <div class="card-hover-gradient position-absolute inset-0"></div>
                  <div class="position-relative z-1">
                    <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-3 mb-3">
                      <i class="fa-solid fa-user fs-4 text-orange card-icon"></i>
                    </div>
                    <h3 class="fs-5 fw-bold text-white mb-1 card-title">
                      بورتريه
                    </h3>
                    <p class="small text-neutral-500 mb-0 card-count">
                      3 مقالة
                    </p>
                    <div class="arrow-badge position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle">
                      <i class="fa-solid fa-arrow-left text-white fs-7"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="col">
                <Link
                  to="/blog?category=مناظر طبيعية"
                  class="category-card group position-relative d-block p-4 rounded-4 text-decoration-none h-100 overflow-hidden"
                >
                  <div class="card-hover-gradient position-absolute inset-0"></div>
                  <div class="position-relative z-1">
                    <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-3 mb-3">
                      <i class="fa-solid fa-mountain-sun fs-4 text-orange card-icon"></i>
                    </div>
                    <h3 class="fs-5 fw-bold text-white mb-1 card-title">
                      مناظر طبيعية
                    </h3>
                    <p class="small text-neutral-500 mb-0 card-count">
                      2 مقالة
                    </p>
                    <div class="arrow-badge position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle">
                      <i class="fa-solid fa-arrow-left text-white fs-7"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="col">
                <Link
                  to="/blog?category=تقنيات"
                  class="category-card group position-relative d-block p-4 rounded-4 text-decoration-none h-100 overflow-hidden"
                >
                  <div class="card-hover-gradient position-absolute inset-0"></div>
                  <div class="position-relative z-1">
                    <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-3 mb-3">
                      <i class="fa-solid fa-sliders fs-4 text-orange card-icon"></i>
                    </div>
                    <h3 class="fs-5 fw-bold text-white mb-1 card-title">
                      تقنيات
                    </h3>
                    <p class="small text-neutral-500 mb-0 card-count">
                      5 مقالة
                    </p>
                    <div class="arrow-badge position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle">
                      <i class="fa-solid fa-arrow-left text-white fs-7"></i>
                    </div>
                  </div>
                </Link>
              </div>

              <div class="col">
                <Link
                  to="/blog?category=معدات"
                  class="category-card group position-relative d-block p-4 rounded-4 text-decoration-none h-100 overflow-hidden"
                >
                  <div class="card-hover-gradient position-absolute inset-0"></div>
                  <div class="position-relative z-1">
                    <div class="icon-wrapper d-flex align-items-center justify-content-center rounded-3 mb-3">
                      <i class="fa-solid fa-camera-retro fs-4 text-orange card-icon"></i>
                    </div>
                    <h3 class="fs-5 fw-bold text-white mb-1 card-title">
                      معدات
                    </h3>
                    <p class="small text-neutral-500 mb-0 card-count">
                      3 مقالة
                    </p>
                    <div class="arrow-badge position-absolute top-0 start-0 m-3 d-flex align-items-center justify-content-center rounded-circle">
                      <i class="fa-solid fa-arrow-left text-white fs-7"></i>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="latest-articles-section position-relative overflow-hidden py-5">
          <div className="gradient-bg-overlay position-absolute bottom-0 start-0 h-100 w-33" />
          <div className="container position-relative py-4 py-md-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-end mb-5 gap-3">
              <div>
                <div className="section-label d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3">
                  <span className="ping-container position-relative d-inline-flex">
                    <span className="ping-wave position-absolute rounded-circle" />
                    <span className="ping-dot position-relative rounded-circle" />
                  </span>
                  <span className="small fw-semibold text-orange">الأحدث</span>
                </div>
                <h2 className="display-6 fw-bold text-white mb-2">
                  أحدث المقالات
                </h2>
                <p className="text-neutral-400 mb-0">
                  محتوى جديد طازج من المطبعة
                </p>
              </div>
              <Link
                to="/blog"
                className="link-all-articles d-inline-flex align-items-center gap-2 text-orange fw-semibold text-decoration-none"
              >
                <span>عرض جميع المقالات</span>
                <i className="fa-solid fa-arrow-left arrow-icon" />
              </Link>
            </div>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {latestArticles.map((e) => (
                <LatestArticles props={e} />
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter-section position-relative overflow-hidden bg-dark-main py-5">
          <div className="glow-bg position-absolute top-0 start-50 translate-middle-x rounded-circle blur-3xl" />
          <div className="container position-relative py-4 py-md-5">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="newsletter-card text-center p-4 p-md-5 p-lg-5">
                  <div className="icon-box mx-auto mb-4 d-flex align-items-center justify-content-center">
                    <i className="fa-regular fa-envelope fs-3 text-white" />
                  </div>
                  <h2 className="display-6 fw-bold text-white mb-3">
                    اشترك في{" "}
                    <span className="gradient-text">نشرتنا الإخبارية</span>
                  </h2>
                  <p className="fs-6 text-neutral-400 mb-4 mx-auto max-w-xl">
                    احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                    الإلكتروني
                  </p>
                  <form className="newsletter-form d-flex flex-column flex-sm-row gap-2 gap-sm-3 mx-auto mb-4">
                    <input
                      type="email"
                      className="form-control newsletter-input px-4 py-3 text-white bg-black"
                      placeholder="أدخل بريدك الإلكتروني"
                      required
                    />
                    <button
                      type="submit"
                      className="btn btn-subscribe px-4 py-3 fw-semibold text-nowrap"
                    >
                      اشترك الآن
                    </button>
                  </form>
                  <div className="d-flex flex-wrap align-items-center justify-content-center gap-3 text-sm text-neutral-500">
                    <div className="d-flex align-items-center gap-2">
                      <div className="avatar-group d-flex">
                        <img
                          className="avatar rounded-circle"
                          src={photographers.posts[0].author.avatar}
                          alt="User 1"
                        />
                        <img
                          className="avatar rounded-circle"
                          src={photographers.posts[1].author.avatar}
                          alt="User 2"
                        />
                        <img
                          className="avatar rounded-circle"
                          src={photographers.posts[2].author.avatar}
                          alt="User 3"
                        />
                      </div>
                      <span>
                        انضم لـ{" "}
                        <span className="text-white fw-medium">+10,000</span>{" "}
                        مصور
                      </span>
                    </div>
                    <span className="d-none d-sm-inline text-border-dot">
                      •
                    </span>
                    <span>بدون إزعاج</span>
                    <span className="d-none d-sm-inline text-border-dot">
                      •
                    </span>
                    <span>إلغاء الاشتراك في أي وقت</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
