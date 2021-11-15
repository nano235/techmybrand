import React from "react";
import { Link } from "react-router-dom";
import contact from "../assets/images/contact-us/home-cybersecurity-contact-bg-image.webp";

function ContactBanner() {
  return (
    <div className="contact-us-area infotechno-contact-us-bg section-space--pt_100">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="image">
              <img className="img-fluid" src={contact} alt="" />
            </div>
          </div>

          <div className="col-lg-4 ms-auto">
            <div className="contact-info style-two text-left">
              <div className="contact-info-title-wrap text-center">
                <h3 className="heading  mb-10">4.9/5.0</h3>
                <div className="ht-star-rating lg-style">
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <p className="sub-text">by 700+ customers for 3200+ clients</p>
              </div>

              <div className="contact-list-item">
                <Link to="tel:190068668" className="single-contact-list">
                  <div className="content-wrap">
                    <div className="content">
                      <div className="icon">
                        <span className="fal fa-phone"></span>
                      </div>
                      <div className="main-content">
                        <h6 className="heading">Give us a quick call!</h6>
                        <div className="text">+234 (0) 805-473-5762</div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="mailto:hello@mitech.com"
                  className="single-contact-list"
                >
                  <div className="content-wrap">
                    <div className="content">
                      <div className="icon">
                        <span className="fal fa-envelope"></span>
                      </div>
                      <div className="main-content">
                        <h6 className="heading">Say hello</h6>
                        <div className="text">info@techmybrand.com</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
