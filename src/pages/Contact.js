import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/heros/BreadCrumb";
import { useGlobalContext } from "../context";
import ContactBanner from "../components/ContactBanner";

function Contact() {
  const { container } = useGlobalContext();
  const title = "Contact Us";
  return (
    <div ref={container}>
      <BreadCrumb title={title} />
      <div className="site-wrapper-reveal">
        <div className="contact-us-section-wrappaer section-space--pt_100 section-space--pb_70">
          <div className="container">
            <div className="row align-items-center">
              <div className="conact-us-wrap-one mb-30">
                <h3 className="heading">
                  To make requests for <br />
                  further information, <br />
                  <span className="text-color-primary">contact us</span> via our
                  social channels.{" "}
                </h3>
                <div className="sub-heading">
                  We just need a couple of hours! <br /> No more than 2 working
                  days since receiving your issue ticket.
                </div>
              </div>
            </div>
          </div>
        </div>

        <ContactBanner />
        <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_two">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="cta-content md-text-center">
                  <h3 className="heading">
                    We run all kinds of IT services that vow your{" "}
                    <span className="text-color-primary"> success</span>
                  </h3>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="cta-button-group--two text-center">
                  <Link to="#" className="btn btn--white btn-one">
                    <span className="btn-icon me-2">
                      <i className="far fa-comment-alt-dots"></i>
                    </span>{" "}
                    Let's talk
                  </Link>
                  <Link to="#" className="btn btn--secondary btn-two ">
                    <span className="btn-icon me-2">
                      <i className="far fa-info-circle"></i>
                    </span>{" "}
                    Get info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
