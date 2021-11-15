import React from "react";

function BreadCrumb({ title, content }) {
  return (
    <div className="breadcrumb-area breadcrumb-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb_box text-center">
              <h2 className="breadcrumb-title contact-us-hero black-white">
                {title}
              </h2>
              {content && (
                <div className="cybersecurity-about-text">
                  <div className="text">{content}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BreadCrumb;
