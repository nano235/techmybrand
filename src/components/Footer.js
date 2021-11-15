import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { navs, socials } from "../data";

function Footer() {
  return (
    <div className="footer-area-wrapper reveal-footer bg-gray">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-4 col-md-6 col-sm-6 footer-widget footer-side">
              <div className="footer-widget__logo mb-30">
                <img
                  src={logo}
                  width="160"
                  height="48"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <ul className="footer-widget__list">
                <li>
                  <a
                    href="mailto:info@techmybrand.com"
                    className="hover-style-link"
                  >
                    info@techmybrand.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+2348054735762"
                    className="hover-style-link text-black font-weight--bold"
                  >
                    +234 805 473 5762
                  </a>
                </li>
              </ul>
            </div>
            {navs.map((nav) => {
              const { id, page, links } = nav;
              return (
                <div
                  className="col-lg-2 col-md-4 col-sm-6 footer-widget"
                  key={id}
                >
                  <h6 className="footer-widget__title mb-20">{page}</h6>
                  {links.map((link) => {
                    const { label, url, id } = link;
                    return (
                      <ul className="footer-widget__list" key={id}>
                        <li>
                          <Link to={url} className="hover-style-link">
                            {label}
                          </Link>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <span className="copyright-text">
                &copy; 2021 TechMyBrand.{" "}
                <a href="https://techmybrand.com">All Rights Reserved.</a>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list ht-social-networks solid-rounded-icon">
                {socials.map((social, index) => {
                  const { url, label, style } = social;
                  return (
                    <li className="item" key={index}>
                      <a
                        href={url}
                        aria-label={label}
                        rel="noreferrer"
                        target="_blank"
                        className="social-link hint--bounce hint--top hint--primary"
                      >
                        <div className={`fab link-icon ${style}`}></div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
