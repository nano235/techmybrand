import { industries } from "../../data";

function IndustriesCardList() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="feature-list__one">
          <div className="row">
            {industries.map((industry, index) => {
              const { title, body, footer } = industry;
              return (
                <div className="col-lg-3 col-md-6 wow move-up" key={index}>
                  <div className="ht-box-icon style-01 single-svg-icon-box">
                    <div className="icon-box-wrap">
                      <div className="icon">
                        <div
                          className="svg-icon"
                          id="svg-icon-1"
                          data-svg-icon="assets/images/svg/linea-basic-heart.svg"
                        ></div>
                      </div>
                      <div className="content">
                        <h5 className="heading">{title}</h5>
                        <div className="text">{body}</div>
                        <div className="feature-btn">
                          <div>
                            <span className="button-text">{footer}</span>
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
    </div>
  );
}

export default IndustriesCardList;
