import React from "react";
import { Link } from "react-router";

export default function ArticalFav({ props }) {
  const {
    slug,
    image,
    title,
    category,
    readTime,
    excerpt,
    author: { name, avatar },
    date,
  } = props;

  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="article-card position-relative overflow-hidden">
        <Link
          to={`/blog/${slug}`}
          className="text-decoration-none block-link"
        >
          <div className="row g-0 align-items-stretch">
            <div className="col-md-6 position-relative overflow-hidden img-container">
              <img
                src={image}
                alt={title}
                className="article-img w-100 h-100 object-fit-cover"
              />
              <div className="img-overlay position-absolute inset-0" />
              <div className="position-absolute top-0 end-0 p-3">
                <span className="badge-featured d-inline-flex align-items-center gap-1 px-3 py-1 text-white text-xs fw-semibold rounded-pill">
                  <i className="fa-solid fa-star fs-7" /> مميز
                </span>
              </div>
            </div>
            <div className="col-md-6 p-4 p-md-5 d-flex flex-column justify-content-center bg-card">
              <div className="d-flex align-items-center gap-3 mb-3">
                <span className="category-tag px-3 py-1 text-xs fw-semibold rounded-pill">
                  {category}
                </span>
                <span className="d-flex align-items-center gap-1 text-sm text-neutral-500">
                  <i className="fa-regular fa-clock" /> {readTime}
                </span>
              </div>
              <h3 className="fs-3 fw-bold text-white mb-3 article-title">
                {title}
              </h3>
              <p className="text-neutral-400 mb-4 line-clamp-3 leading-relaxed">
                {excerpt}
              </p>
              <div className="d-flex align-items-center justify-content-between mt-auto pt-2">
                <div className="d-flex align-items-center gap-3">
                  <div className="position-relative">
                    <img
                      src={avatar}
                      alt={name}
                      className="author-avatar rounded-circle object-fit-cover"
                    />
                    <span className="avatar-status position-absolute bottom-0 start-0 rounded-circle" />
                  </div>
                  <div>
                    <p className="text-sm fw-semibold text-white mb-0">
                      {name}
                    </p>
                    <p className="text-xs text-neutral-500 mb-0">
                      {formattedDate}
                    </p>
                  </div>
                </div>
                <span className="read-link text-orange fw-semibold text-sm d-inline-flex align-items-center gap-2">
                  اقرأ المقال{" "}
                  <i className="fa-solid fa-arrow-left arrow-icon" />
                </span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
