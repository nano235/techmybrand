import { Link } from "react-router-dom";

function HomeHero() {
  return (
    <div className="resolutions-hero-slider position-relative">
      <div className="swiper-container hero-slider__container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="hero-wrapper resolutions-hero-space resolutions-hero-bg">
              <div className="resolutions-hero-area-content">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 m-auto">
                      <div className="service-hero-wrap wow move-up">
                        <div className="service-hero-text text-center">
                          <h3 className="text-white">
                            IT Services Designed For
                          </h3>
                          <h1 className="font-weight--reguler text-white mb-30">
                            Your Business
                          </h1>
                          <p className="text-white">
                            Highly Tailored IT Design, Management & Support
                            Services.
                          </p>
                          <div className="hero-button-group section-space--mt_50">
                            <Link to="#" className="ht-btn ht-btn-md">
                              Free consultation
                            </Link>
                            <Link
                              to="#"
                              className="ht-btn ht-btn-md btn--white"
                            >
                              <span className="btn-icon me-2">
                                <i className="fa fa-play"></i>
                              </span>{" "}
                              How we work
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row-separator center_curve_alt bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
        </svg>
      </div>
    </div>
  );
}

export default HomeHero;
