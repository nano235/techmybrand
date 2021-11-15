import React from "react";

function CardList({ style1, style2, data, hoverStyle }) {
  //   console.log(data);
  return (
    <div className="row">
      <div className="col-12">
        <div className={style1}>
          <div className="row">
            {data.map((card, index) => {
              const { heading, body, footer, image, hoverImage } = card;
              return (
                <div
                  className="col-lg-4 col-md-6 wow move-up animated"
                  key={index}
                >
                  <div className={`ht-box-images ${style2}`}>
                    <div className="image-box-wrap">
                      <div className="box-image">
                        <div className="default-image">
                          <img src={image} alt="" className="img-fulid" />
                        </div>
                        {hoverImage && (
                          <div className={hoverStyle}>
                            <img
                              src={hoverImage}
                              alt=""
                              className="img-fulid"
                            />
                          </div>
                        )}
                      </div>
                      <div className="content">
                        <h5 className="heading">{heading}</h5>
                        <div className="text">{body}</div>
                        <div className="box-images-arrow">
                          <span className="button-text">{footer}</span>
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

export default CardList;
