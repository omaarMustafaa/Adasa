import React from 'react'

export default function DiscoverOurBook({props}) {
    
    const {name,role ,avatar }= props.author
    

  return (
    
              <div className="col-sm-6 col-lg-4">
                <div className="team-card p-4 text-center rounded-4 h-100">
                  <div className="position-relative d-inline-block mb-3">
                    <img
                      src={avatar}
                      alt={name}
                      className="rounded-circle avatar-img"
                    />

                    <span className="verified-badge position-absolute bottom-0 end-0 rounded-circle d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-check border-icon"></i>
                    </span>
                  </div>

                  <h3 className="h5 fw-bold text-white mb-1">{name}</h3>
                  <p className="member-role small fw-medium mb-4">{role}</p>

                  <div className="d-flex justify-content-center gap-2">
                    <a
                      href="https://x.com/"
                      className="social-icon-btn twitter-btn"
                      aria-label="Twitter / X"
                      target="_blank"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a
                      href="https://github.com/omaarMustafaa"
                      className="social-icon-btn github-btn"
                      aria-label="GitHub"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/omar-mostafa-586152384/"
                      className="social-icon-btn linkedin-btn"
                      aria-label="LinkedIn"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
  )
}
