import { Link } from "react-router-dom";
import IndustriesCardList from "../components/cards/IndustriesCardList";
import ContactBanner from "../components/ContactBanner";
import BreadCrumb from "../components/heros/BreadCrumb";

function Industries() {
  return <div className="site-wrapper-reveal section-space--pt_100">
    <BreadCrumb title="Industries" />
    <div className="feature-icon-wrapper section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
              <div className="section-title-wrap text-center">
                <h3 className="heading">
                  Preparing for your success, <br/> We provide <span className="text-color-primary">
                    truly prominent IT Solutions.
                  </span>
                </h3>
              </div>
            </div>
        </div>
        <IndustriesCardList />
        <div className="section-under-heading text-center section-space--mt_80">
              Challenges are just opportunities in disguise.
              <Link to="/contact">Take the challenge</Link>
        </div>
      </div>
    </div>
    <ContactBanner />
  </div>;
}

export default Industries;
