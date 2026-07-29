import React, { useEffect, useState } from "react";
import "./Blog.css";
import Articals from "../Articals/Articals";
import photographers from "../../data/photographers";
import NotFoundArtical from "../NotFoundArtical/NotFoundArtical";
import { useSearchParams } from "react-router";
import categories from "../../data/categories";

export default function Blog() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [articles] = useState(photographers.posts);
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const categoryFromUrl = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "all",
  );

  const articlesPerPage = 6;

  const lastIndex = currentPage * articlesPerPage;
  const firstIndex = lastIndex - articlesPerPage;

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.excerpt
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const currentArticles = filteredArticles.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  useEffect(() => {
    setSelectedCategory(categoryFromUrl || "all");
    setCurrentPage(1);
  }, [categoryFromUrl]);

  return (
    <main id="blog">
      <section className="blog-hero-section position-relative overflow-hidden py-5">
        <div className="bg-dark-base position-absolute inset-0" />
        <div className="grid-pattern-overlay position-absolute inset-0" />
        <div className="position-absolute inset-0 overflow-hidden pointer-events-none">
          <div className="glow-orb glow-orange position-absolute top-0 start-25 rounded-circle" />
          <div className="glow-orb glow-yellow position-absolute bottom-0 end-25 rounded-circle" />
        </div>

        <div className="container position-relative py-5 text-center">
          <div className="section-label d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-4">
            <span className="ping-container position-relative d-inline-flex">
              <span className="ping-wave position-absolute rounded-circle" />
              <span className="ping-dot position-relative rounded-circle" />
            </span>

            <i className="fa-solid fa-newspaper text-orange fs-7"></i>

            <span className="px-1 py-1 fw-semibold text-orange">مدونتنا</span>
          </div>

          <h1 className="display-4 fw-bold text-white mb-4">
            استكشف <span className="gradient-text">مقالاتنا</span>
          </h1>

          <p className="fs-5 text-neutral-400 mx-auto max-w-2xl mb-0">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <section id="filter" className="p-0">
        <div className="filter py-4">
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-12 col-md-4">
                <div className="search-div position-relative">
                  <input
                    type="search"
                    className="form-control form-control-lg search-input"
                    placeholder="ابحث في المقالات..."
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>

              <div className="col-12 col-md-8">
                <div className="d-flex flex-wrap justify-content-md-end justify-content-center gap-2 btn-group">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      className={`px-3 py-2 ${
                        selectedCategory === cat.value ? "active" : ""
                      }`}
                      onClick={() => {
                        setSelectedCategory(cat.value);
                        setCurrentPage(1);
                      }}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5 articles-section">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="text-neutral-400 mb-0">
              عرض{" "}
              <span className="fw-bold text-white">
                {filteredArticles.length}
              </span>{" "}
              مقالات
            </p>

            <div className="d-flex align-items-center bg-dark-card border border-dark-subtle rounded-3 p-1">
              <button
                onClick={() => setView("grid")}
                className={`btn btn-icon p-2 rounded-2 ${
                  view === "grid" ? "btn-orange text-white" : "text-neutral-400"
                }`}
              >
                <i className="fa-solid fa-border-all"></i>
              </button>

              <button
                onClick={() => setView("list")}
                className={`btn btn-icon p-2 rounded-2 ${
                  view === "list" ? "btn-orange text-white" : "text-neutral-400"
                }`}
              >
                <i className="fa-solid fa-list"></i>
              </button>
            </div>
          </div>

          <div
            className={
              view === "grid" ? "row g-4" : "d-flex flex-column gap-4 "
            }
          >
            {currentArticles.length == 0 ? (
              <NotFoundArtical setSearch={setSearch} />
            ) : (
              currentArticles.map((article) => (
                <Articals view={view} key={article.id} article={article} />
              ))
            )}
          </div>

          {currentArticles.length > 0 && (
            <div className="d-flex justify-content-center align-items-center gap-2 mt-5">
              <button
                className="btn page-num-btn text-sm fw-medium rounded-3"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>

              <div className="d-flex align-items-center gap-1">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    className={`btn page-num-btn text-sm fw-medium rounded-3 ${
                      currentPage === index + 1 ? "active-page" : ""
                    }`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                className="btn page-num-btn text-sm fw-medium rounded-3"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            </div>
          )}

          {currentArticles.length > 0 && (
            <p className="text-center text-neutral-500 mt-3 text-sm">
              صفحة {currentPage} من {totalPages}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
