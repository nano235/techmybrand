import React from "react";

function Hero({ title, content }) {
  return (
    <div className="about-banner-wrap banner-space about-us-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto">
            <div className="about-banner-content text-center">
              <h1 className="mb-15 text-white">{title}</h1>
              {content && (
                <h5 className="font-weight--normal text-white">{content}</h5>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
