import React from "react";
import { Link } from "react-router";

export default function LatestArticles({ props }) {
  const {
    slug,
    image,
    title,
    category,
    readTime,
    excerpt,
    author: { name, avatar, role },
    date,
  } = props;

  const formattedDate = new Date(date).toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="col">
        <article className="latest-card h-100 overflow-hidden rounded-4">
          <Link
            to={`/blog/${slug}`}
            className="text-decoration-none d-block h-100"
          >
            <div className="card-img-wrapper position-relative overflow-hidden">
              <img
                src={image}
                alt={title}
                className="card-img w-100 object-fit-cover"
              />
              <div className="img-hover-overlay position-absolute inset-0" />
              <div className="position-absolute top-0 end-0 p-3">
                <span className="category-badge px-3 py-1 text-white text-xs fw-semibold rounded-pill">
                  {category}
                </span>
              </div>
            </div>
            <div className="p-4 d-flex flex-column h-auto">
              <div className="d-flex align-items-center gap-2 text-sm text-neutral-500 mb-3">
                <span className="d-flex align-items-center gap-1">
                  <i className="fa-regular fa-clock" /> {readTime}
                </span>
                <span className="dot-separator rounded-circle" />
                <span>{formattedDate}</span>
              </div>
              <h3 className="fs-5 fw-bold text-white mb-3 card-title leading-tight line-clamp-2">
                {title}
              </h3>
              <p className="text-neutral-400 mb-4 line-clamp-2 text-sm leading-relaxed">
                {excerpt}
              </p>
              <div className="d-flex align-items-center justify-content-between pt-3 mt-auto borderLine">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={avatar}
                    alt={name}
                    className="author-img rounded-circle object-fit-cover"
                  />
                  <div>
                    <p className="text-sm fw-medium text-white mb-0">{name}</p>
                    <p className="text-xs text-neutral-500 mb-0">{role}</p>
                  </div>
                </div>
                <div className="card-arrow-btn d-flex align-items-center justify-content-center rounded-circle">
                  <i className="fa-solid fa-angle-left text-orange card-arrow-icon fs-7" />
                </div>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </>
  );
}
