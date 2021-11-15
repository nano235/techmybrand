import React from "react";
import CardContainer from "../components/cards/CardContainer";
import Clients from "../components/cards/Clients";
import Testimonials from "../components/cards/Testimonials";
import BreadCrumb from "../components/heros/BreadCrumb";
import { useGlobalContext } from "../context";
import { aboutCards, solutions } from "../data";

function About() {
  const { container } = useGlobalContext();
  window.scrollTo(0, 0);
  const title = "About TechMyBrand";
  const content =
    "TechMyBrand specializes in technological and IT-related services such as product engineering, warranty management, building cloud, infrastructure, network, etc.";
  return (
    <div ref={container}>
      <div className="site-wrapper-reveal">
        <BreadCrumb title={title} content={content} />
        {/* <Hero title={title} content={content} />; */}
        <div className="feature-large-images-wrapper section-space--ptb_100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_60">
                  <h6 className="section-sub-title mb-20">Our company</h6>
                  <h3 className="heading">
                    We run all kinds of IT services that <br /> vow your{" "}
                    <span className="text-color-primary"> success</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="cybersecurity-about-box section-space--pb_70">
              <div className="row">
                <div className="col-lg-4 offset-lg-1">
                  <div className="modern-number-01">
                    <h2 className="heading  me-5">
                      <span className="mark-text">8+</span>Years’ Experience in
                      IT
                    </h2>
                    <h6 className="heading mt-30">
                      More About Our Success Stories
                    </h6>
                  </div>
                </div>

                <div className="col-lg-5 offset-lg-1">
                  <div className="cybersecurity-about-text">
                    <div className="text">
                      TechMyBrand specializes in technological and IT-related
                      services such as product engineering, warranty management,
                      building cloud, infrastructure, network, etc. We put a
                      strong focus on the needs of your business to figure out
                      solutions that best fits your demand and nail it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CardContainer
              details={aboutCards}
              style1="feature-images__six"
              style2="style-06"
            />
            <div className="about-delivering-wrapper section-space--ptb_100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-title-wrap text-center section-space--mb_20">
                      <h3 className="heading">
                        We excel in delivering <br />
                        optimal solutions.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {solutions.map((solution, index) => {
                    const { title, body } = solution;
                    return (
                      <div className="col-lg-6" key={index}>
                        <div className="delivering-optimal-wrap">
                          <div className="list-item">
                            <div className="marker"></div>
                            <div className="title-wrap">
                              <h5 className="title">{title}</h5>
                              <div className="desc">{body}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <Testimonials />
        </div>
        <Clients />
      </div>
    </div>
  );
}

export default About;
