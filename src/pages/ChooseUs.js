import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../components/heros/BreadCrumb";
import { useGlobalContext } from "../context";
import { chooseUs } from "../data";

function ChooseUs() {
  const { container } = useGlobalContext();
  return (
    <div ref={container}>
      <BreadCrumb title={"Why choose us"} />
      <div className="site-wrapper-reveal">
        <div className="feature-large-images-wrapper section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_30">
                  <h3 className="heading mb-20">
                    Preparing for your success, <br /> we provide{" "}
                    <span className="text-color-primary">
                      truly prominent IT solutions.
                    </span>{" "}
                  </h3>
                  <p className="title-dec-text">
                    The IT services that TechMyBrand are running can be
                    segmented by the type of skills employed to deliver the
                    service (design, build, run). Technically, these fall into
                    three main categories: business process services,
                    application services, and infrastructure services.
                  </p>
                </div>
              </div>
            </div>

            <div className="cybersecurity-about-box">
              <div className="row">
                <div className="col-lg-4 offset-lg-1">
                  <div className="modern-number-01  mt-30">
                    <h2 className="heading  me-5">
                      <span className="mark-text">10</span>Years’ Experience in
                      IT
                    </h2>
                    <h3 className="heading mt-30">
                      Learn More About Our{" "}
                      <span className="text-color-primary">
                        {" "}
                        Success <br />
                        Stories{" "}
                      </span>{" "}
                    </h3>
                  </div>
                </div>

                <div className="col-lg-6 offset-lg-1 wow move-up">
                  <div className="progress-bar--one mt-30 section-space--mb_60">
                    <div className="progress-charts">
                      <h6 className="heading ">UI/UX</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.5s"
                          data-wow-delay=".3s"
                          role="progressbar"
                          style={{ width: "89%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="percent-label">89%</span>
                        </div>
                      </div>
                    </div>

                    <div className="progress-charts">
                      <h6 className="heading ">Ideas</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.7s"
                          data-wow-delay=".5s"
                          role="progressbar"
                          style={{ width: "92%" }}
                          aria-valuenow="85"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="percent-label">92%</span>
                        </div>
                      </div>
                    </div>

                    <div className="progress-charts ">
                      <h6 className="heading ">Codes</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.8s"
                          data-wow-delay=".8s"
                          role="progressbar"
                          style={{ width: "95%" }}
                          aria-valuenow="70"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="percent-label">95%</span>
                        </div>
                      </div>
                    </div>

                    <div className="progress-charts ">
                      <h6 className="heading ">Consulting</h6>
                      <div className="progress">
                        <div
                          className="progress-bar wow fadeInLeft"
                          data-wow-duration="0.9s"
                          data-wow-delay=".9s"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow="90"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span className="percent-label">80%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-large-images-wrapper section-space--pt_70">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="row row--35">
                    {chooseUs.map((choose, index) => {
                      const { image, title, url, text } = choose;
                      return (
                        <div className="col-lg-4 col-md-6 mt-30" key={index}>
                          <Link
                            to={url}
                            className="box-large-image__wrap wow move-up"
                            key={index}
                          >
                            <div className="box-large-image__box">
                              <div className="box-large-image__midea">
                                <div className="images-midea">
                                  <img
                                    src={image}
                                    className="img-fluid"
                                    alt=""
                                  />

                                  <div className="button-wrapper">
                                    <div className="btn tm-button">
                                      <span className="button-text">
                                        Learn more
                                      </span>
                                    </div>
                                  </div>
                                  <div className="heading-wrap">
                                    <h5 className="heading">{title}</h5>
                                  </div>
                                </div>
                              </div>

                              <div className="box-large-image__content mt-30 text-center">
                                <p>{text}</p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      );
                    })}
                  </div>

                  <div className="section-under-heading text-center section-space--mt_40">
                    Challenges are just opportunities in disguise.{" "}
                    <Link to="#">Take the challenge!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
