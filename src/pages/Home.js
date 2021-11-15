import CardContainer from "../components/cards/CardContainer";
import HomeHero from "../components/heros/HomeHero";
import { homeCard, ITLongCard } from "../data";
import { Link } from "react-router-dom";
import IndustriesCardList from "../components/cards/IndustriesCardList";
import Testimonials from "../components/cards/Testimonials";
import LongCard from "../components/cards/LongCard";
import Clients from "../components/cards/Clients";
import { useGlobalContext } from "../context";

function Home() {
  const { container } = useGlobalContext();

  // window.scrollTo(0, 0);
  return (
    <div ref={container}>
      <div className="site-wrapper-reveal">
        <HomeHero />
        <CardContainer
          details={homeCard}
          style1="feature-images__five resolutions-hero-bottom"
          style2="style-05"
          style3="bg-gray"
          hoverStyle="hover-images"
        />
        <div className="fun-fact-wrapper bg-gray section-space--ptb_120">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 offset-lg-1">
                <div className="modern-number-01 me-5">
                  <h2 className="heading">
                    <span className="mark-text">10</span>Years’ Experience in IT
                  </h2>
                  <h3 className="heading">
                    Learn more about our{" "}
                    <span className="text-color-primary">Success Stories</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-7 col-md-8">
                <div className="row align-center">
                  <div className="col-md-6 col-sm-6 wow move-up">
                    <div className="fun-fact--three text-center">
                      <div className="fun-fact__count counter">32</div>
                      <h6 className="fun-fact__text">Finished projects</h6>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 wow move-up">
                    <div className="fun-fact--three text-center">
                      <div className="fun-fact__count counter">100%</div>
                      <h6 className="fun-fact__text">Happy clients</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-icon-wrapper section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_40">
                  <h6 className="section-sub-title mb-20">
                    Industries we Serve
                  </h6>
                  <h3 className="heading">
                    For your very specific industry, <br /> we have{" "}
                    <span className="text-color-primary">
                      {" "}
                      highly-tailored IT solutions.
                    </span>
                  </h3>
                </div>
              </div>
            </div>
            <IndustriesCardList />
          </div>
        </div>
        <Testimonials />
        <div className="feature-icon-wrapper section-space--ptb_80 border-bottom">
          <LongCard ITLongCard={ITLongCard} />
        </div>
        <div className="cta-image-area_one section-space--ptb_80 cta-bg-image_one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-7">
                <div className="cta-content md-text-center">
                  <h3 className="heading text-white">
                    We run all kinds of IT services that vow your{" "}
                    <span className="text-color-secondary"> success</span>
                  </h3>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="cta-button-group--one text-center">
                  <Link to="/contact-us" className="btn btn--white btn-one">
                    <span className="btn-icon me-2">
                      <i className="far fa-comment-alt-dots"></i>
                    </span>{" "}
                    Let's talk
                  </Link>
                  <Link to="/about-us" className="btn btn--secondary  btn-two">
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
        <Clients />
      </div>
    </div>
  );
}

export default Home;
