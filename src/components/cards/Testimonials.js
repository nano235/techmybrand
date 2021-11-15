import { testimonials } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-slider-area bg-gray section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_40">
              <h6 className="section-sub-title mb-20">Testimonials</h6>
              <h3 className="heading">
                What do people praise about{" "}
                <span className="text-color-primary"> TechMyBrand?</span>
              </h3>
            </div>
            <div className="testimonial-slider">
              <Slider {...settings}>
                {testimonials.map((testimonial, i) => {
                  const { image, name, testimony, company } = testimonial;

                  return (
                    <div className={`swiper-slide`} key={i}>
                      <div className="testimonial-slider__one wow move-up">
                        <div className="testimonial-slider--info">
                          <div className="testimonial-slider__media">
                            <img src={image} alt={name} className="img-fluid" />
                          </div>
                          <div className="testimonial-slider__author">
                            <div className="testimonial-rating">
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                              <span className="fa fa-star"></span>
                            </div>
                            <div className="author-info">
                              <h6 className="name">{name}</h6>
                              <span className="designation">{company}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text">{testimony}</div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
