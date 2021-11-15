import { Link } from "react-router-dom";
import BreadCrumb from "../components/heros/BreadCrumb";
import { businessSolutions } from "../data";

function Business() {
  return <div className="site-wrapper-reveal section-space--pt_100">
    <BreadCrumb title="Business Solutions" />
    <div className="feature-images-wrapper bg-gray section-space--ptb_100">
      <div className="container">
        <div className="row">
                    <div className="col-lg-12">
              <div className="section-title-wrap text-center">
                <h3 className="heading">
                  Reliable IT Services for <span className="text-color-primary">
                    Businesses
                  </span>
                </h3>
              </div>
            </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="feature-images__four">
              <div className="row">
                {businessSolutions.map((solution, index)=> {
                  const {icon, title, content} = solution
                  return (
                    <div className="single-item col-lg-4 col-md-6 mt-30 wow move-up animated" key={index}>
                      <div className="ht-box-images style-04">
                        <div className="image-box-wrap">
                          <div className="box-image">
                            <img src={icon} alt="" className="img-fluid" />
                          </div>
                          <div className="content">
                            <h5 className="heading">
                              {title}
                            </h5>
                            <div className="text">
                              {content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="section-under-heading text-center section-space--mt_80">
              Challenges are just opportunities in disguise.
              <Link to="/contact">Take the challenge</Link>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Business;
