import { ITLongCard } from "../../data";

function LongCard() {
  return (
    <div className="feature-icon-wrapper section-space--ptb_80 border-bottom">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="feature-list__three">
              <div className="row">
                {ITLongCard.map((card, index) => {
                  const { icon, title, content } = card;
                  return (
                    <div className="col-lg-6 wow move-up" key={index}>
                      <div className="grid-item animate">
                        <div className="ht-box-icon style-03">
                          <div className="icon-box-wrap">
                            <div className="content-header">
                              <div className="icon">
                                <i className={icon}></i>
                              </div>
                              <h5 className="heading">{title}</h5>
                            </div>
                            <div className="content">
                              <div className="text">{content}</div>
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
      </div>
    </div>
  );
}

export default LongCard;
