import React from "react";
import { Link } from "react-router";

export default function Articals({ article, view }) {
  const {
    slug,
    image,
    title,
    category,
    readTime,
    excerpt,
    author: { name, avatar, role },
    date,
  } = article;

  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className={view === "grid" ? "col-12 col-md-6 col-lg-4" : "w-100"}>
        <article className="article-card group rounded-4 overflow-hidden h-100">
          <Link
            to={`/blog/${slug}`}
            className="text-decoration-none d-block h-100"
          >
            <div className="position-relative card-img-wrapper">
              <img
                src={image}
                alt={title}
                className="w-100 h-100 object-fit-cover card-img"
              />
              <div className="card-img-overlay-hover position-absolute inset-0" />
              <div className="position-absolute top-0 end-0 p-3">
                <span className="badge bg-dark-glass text-white border border-dark-light px-3 py-2 rounded-pill fw-semibold text-xs">
                  {category}
                </span>
              </div>
            </div>
            <div className="p-4 d-flex flex-column justify-content-between card-body-wrapper">
              <div>
                <div className="d-flex align-items-center gap-2 text-sm text-neutral-500 mb-2">
                  <span className="d-flex align-items-center gap-1">
                    <i className="fa-regular fa-clock fs-7" /> {readTime}
                  </span>
                  <span className="dot-separator" />
                  <span>{formattedDate}</span>
                </div>
                <h3 className="fs-5 fw-bold text-white mb-2 card-title text-clamp-2">
                  {title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4 text-clamp-2">
                  {excerpt}
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between pt-3 border-top border-dark-subtle">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="rounded-circle object-fit-cover author-avatar"
                  />
                  <div>
                    <p className="text-sm fw-medium text-white mb-0">{name}</p>
                    <p className="text-xs text-neutral-500 mb-0">{role}</p>
                  </div>
                </div>
                <div className="arrow-btn rounded-circle d-flex align-items-center justify-content-center">
                  <i className="fa-solid fa-chevron-left text-orange arrow-icon" />
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </>
  );
}
