import React from "react";
import "./ArticalDetails.css";
import { Link, useParams } from "react-router";
import photographers from "../../data/photographers";
import ArticalFav from "./../ArticalFav/ArticalFav";
import ReactMarkdown from "react-markdown";

export default function ArticleDetails() {
  const { slug } = useParams();

  const article = photographers.posts.find((post) => post.slug === slug);
  const {
    image,
    title,
    category,
    readTime,
    excerpt,
    content,
    tags,
    author: { name, avatar, role },
    date,
  } = article;

  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedDateMonth = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
  });

  let sectionIndex = 0;

  const sections = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => line.replace("## ", ""));

  const relatedArticles = photographers.posts
    .filter(
      (post) =>
        post.category === article.category && post.slug !== article.slug,
    )
    .slice(0, 3);

  return (
    <>
      <article className="min-vh-90 py-5">
        <div className="hero-section position-relative overflow-hidden ">
          <img
            src={image}
            alt={title}
            className="hero-img position-absolute top-0 w-100 h-100 object-fit-cover"
          />
          <div className="hero-overlay-v position-absolute inset-0 w-100 h-100"></div>
          <div className="hero-overlay-h position-absolute inset-0 w-100 h-100"></div>

          <div className="position-absolute start-0 navLinksHero">
            <nav className="d-flex align-items-center gap-2 px-3 py-2 bg-black-30 backdrop-blur rounded-pill border-white-10 text-sm">
              <Link to="/" className=" nav-Links">
                <i className="fa-solid fa-home" />
              </Link>
              <i className="fa-solid fa-chevron-left text-xs" />
              <Link to="/blog" className="nav-Links">
                المدونة
              </Link>
              <i className="fa-solid fa-chevron-left text-xs" />
              <span
                className="text-orange font-medium text-truncate"
                style={{ maxWidth: 200 }}
              >
                {category}
              </span>
            </nav>
          </div>

          <div className="position-absolute start-0 end-0  hero-content">
            <div className="container ">
              <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                <Link
                  to={`/blog?category=${category}`}
                  className="link-category rounded-pill fw-bold"
                >
                  {category}
                </Link>
                <div className="d-flex align-items-center gap-3 text-white-70 text-sm">
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-calendar" />
                    {formattedDate}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock" />
                    {readTime}
                  </span>
                </div>
              </div>
              <h1 className="fw-bold text-white mb-4 leading-tight">{title}</h1>
              <div className="d-flex align-items-center gap-3 p-3 author-section">
                <img
                  src={avatar}
                  alt={name}
                  className="author-avatar rounded-circle object-fit-cover"
                />
                <div>
                  <p className="fw-bold text-white m-0"> {name}</p>
                  <p className="text-sm text-white-60 m-0">{role} </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="secoundSection" className="container my-5 px-3 px-sm-4">
          <div className="row g-4">
            <main className="col-lg-8 order-2 order-lg-1">
              <div className="intro-quote-card p-4 rounded-4 mb-5">
                <p className="fs-5 text-neutral-200 leading-relaxed fst-italic mb-0">
                  "{excerpt}"
                </p>
              </div>
              <article className="prose-custom">
                <ReactMarkdown
                  components={{
                    h2: ({ children }) => {
                      const id = `section-${sectionIndex++}`;

                      return (
                        <h2
                          id={id}
                          className="fs-2 fw-bold text-white mt-5 mb-4 d-flex align-items-center gap-3 scroll-mt-24"
                        >
                          <span className="icon-box-section">
                            <i className="fa-solid fa-camera text-orange"></i>
                          </span>

                          {children}
                        </h2>
                      );
                    },

                    p: ({ children }) => (
                      <p className="text-neutral-300 fs-5 mb-4">{children}</p>
                    ),
                  }}
                >
                  {content}
                </ReactMarkdown>
              </article>

              <div className="mt-5 p-4 bg-dark-secondary rounded-4 border-dark">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="icon-box-sm">
                    <i className="fa-solid fa-tags text-orange" />
                  </div>
                  <h3 className="h5 fw-bold text-white mb-0">الوسوم</h3>
                </div>
                <div className="d-flex flex-wrap gap-2">
                  <span className="tag-chip">#{tags[0]}</span>
                  <span className="tag-chip">#{tags[1]}</span>
                  <span className="tag-chip">#{tags[2]}</span>
                </div>
              </div>
              <div className="mt-3 p-4 bg-dark-secondary rounded-4 border-dark">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="icon-box-sm">
                      <i className="fa-solid fa-share-nodes text-orange" />
                    </div>
                    <h3 className="h5 fw-bold text-white mb-0">شارك المقال</h3>
                  </div>
                  <div className="d-flex gap-2">
                    <button className="btn-share hover-twitter">
                      <i className="fa-brands fa-x-twitter" />
                    </button>
                    <button className="btn-share hover-linkedin">
                      <i className="fa-brands fa-linkedin-in" />
                    </button>
                    <button className="btn-share hover-whatsapp">
                      <i className="fa-brands fa-whatsapp" />
                    </button>
                    <button className="btn-share hover-orange">
                      <i className="fa-solid fa-link" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-4 p-md-5 author-box rounded-4 border-dark">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4 text-center text-sm-end">
                  <img
                    src={avatar}
                    alt={name}
                    className="author-avatar rounded-4 object-fit-cover"
                  />
                  <div className="flex-grow-1">
                    <span className="text-xs text-orange fw-semibold text-uppercase tracking-wider">
                      كاتب المقال
                    </span>
                    <h3 className="h4 fw-bold text-white mt-1 mb-1">{name}</h3>
                    <p className="text-neutral-500 small mb-2">{role}</p>
                    <p className="text-neutral-400 small mb-0">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                      الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>
            </main>
            <aside className="col-lg-4 order-1 order-lg-2">
              <div className="sticky-top-24 d-flex flex-column gap-3">
                <div className="p-4 bg-dark-secondary rounded-4 border-dark">
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="icon-box-sm">
                      <i className="fa-solid fa-list text-orange" />
                    </div>
                    <h3 className="h5 fw-bold text-white mb-0">
                      محتويات المقال
                    </h3>
                  </div>
                  <nav className="d-flex flex-column gap-2">
                    {sections.map((section, index) => (
                      <a
                        key={index}
                        href={`#section-${index}`}
                        className="toc-link"
                      >
                        <span className="toc-num">{index + 1}</span>

                        <span>{section}</span>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="p-4 bg-dark-secondary rounded-4 border-dark">
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="text-center p-3 bg-dark-main rounded-3">
                        <i className="fa-regular fa-clock text-orange fs-5 mb-2" />
                        <p className="text-white fw-bold mb-0">{readTime}</p>
                        <p className="text-neutral-500 text-xs mb-0">
                          وقت القراءة
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center p-3 bg-dark-main rounded-3">
                        <i className="fa-regular fa-calendar text-orange fs-5 mb-2" />
                        <p className="text-white fw-bold small mb-0">
                          {formattedDateMonth}
                        </p>
                        <p className="text-neutral-500 text-xs mb-0">
                          تاريخ النشر
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="newsletter-card p-4 rounded-4 text-center">
                  <div className="newsletter-icon-box mx-auto mb-3">
                    <i className="fa-solid fa-envelope text-orange fs-5" />
                  </div>
                  <h3 className="h5 fw-bold text-white mb-2">
                    لا تفوّت جديدنا
                  </h3>
                  <p className="text-neutral-400 small mb-3">
                    اشترك للحصول على أحدث المقالات
                  </p>
                  <Link
                    to="/blog"
                    className="btn btn-orange w-100 py-2.5 rounded-3 fw-semibold"
                  >
                    تصفح المزيد
                  </Link>
                </div>
              </div>
            </aside>
          </div>
          <section className="mt-5 py-5 ">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <div className="d-flex align-items-center gap-3">
                <span className="icon-box-lg rounded-4">
                  <i className="fa-solid fa-images text-orange fs-4" />
                </span>
                <div>
                  <h2 className="h3 fw-bold text-white mb-1">
                    مقالات قد تعجبك
                  </h2>
                  <p className="text-neutral-500 small mb-0">
                    استكشف المزيد من المحتوى المميز
                  </p>
                </div>
              </div>

              <Link
                to="/blog"
                className="d-none d-sm-flex align-items-center gap-2 text-orange text-decoration-none hover-link fw-semibold"
              >
                عرض الكل <i className="fa-solid fa-arrow-left" />
              </Link>
            </div>
            <div className="row g-4">
              {relatedArticles.map((post) => (
                <div className="col-sm-6 col-lg-4" key={post.id}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="card-custom d-block text-decoration-none h-100"
                  >
                    <div className="card-img-wrapper position-relative">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-100 h-100 object-fit-cover"
                      />

                      <div className="card-img-overlay-grad position-absolute inset-0" />

                      <span className="badge bg-orange position-absolute top-0 end-0 m-3 rounded-pill px-3 py-2 fs-xs">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-4">
                      <h3 className="h6 fw-bold text-white text-hover-orange mb-3 text-truncate-2">
                        {post.title}
                      </h3>

                      <div className="d-flex align-items-center justify-content-between text-neutral-500 small">
                        <span className="d-flex align-items-center gap-2">
                          <img
                            src={post.author.avatar}
                            className="rounded-circle"
                            width={24}
                            height={24}
                            alt={post.author.name}
                          />
                          {post.author.name}
                        </span>

                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </article>
    </>
  );
}
