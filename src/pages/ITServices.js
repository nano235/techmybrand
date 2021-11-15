import React from "react";
import { Link } from "react-router-dom";
import ContactBanner from "../components/ContactBanner";
import BreadCrumb from "../components/heros/BreadCrumb";
import { solutions } from "../data";

function ITServices() {
  return (
    <div className="site-wrapper-reveal">
      <BreadCrumb title="IT Services" />
      <div className="feature-images-wrapper section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center">
                <h3 className="heading">
                  Preparing for your success, <br /> We provide{" "}
                  <span className="text-color-primary">
                    truly prominent IT Solutions.
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="feature-images__one">
                <div className="row">
                  {solutions.map((solution, index) => {
                    const { title, body, image } = solution;
                    return (
                      <div
                        className="col-lg-4 col-md-6 wow animated move-up"
                        key={index}
                      >
                        <div className="ht-box-images style-01">
                          <div className="image-box-wrap solution-height">
                            <div className="box-image">
                              <img src={image} alt="" className="img-fluid" />
                            </div>
                            <div className="content">
                              <h5>{title}</h5>
                              <div className="text">{body}</div>
                              <div className="circle-arrow">
                                <div className="middle-dot"></div>
                                <div className="middle-dot dot-2"></div>
                                <div className="solutions-arrow">
                                  <i className="far fa-long-arrow-right"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="section-under-heading text-center section-space--mt_80">
              Challenges are just opportunities in disguise.
              <Link to="/contact">Take the challenge</Link>
            </div>
          </div>
        </div>
      </div>
      <ContactBanner />
    </div>
  );
}

export default ITServices;
