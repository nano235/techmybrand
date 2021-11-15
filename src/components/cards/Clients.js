import { clients } from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="brand-logo-slider-area section-space--ptb_60">
      <div className="container">
        <Slider {...settings}>
          {clients.map((client, index) => {
            const { name, image, size } = client;
            return (
              <div
                className="swiper-slide brand-logo brand-logo--slider"
                key={index}
              >
                <div className="brand-logo__image">
                  <img
                    src={image}
                    className={`img-fluid ${size ? size : ""}`}
                    alt={name}
                  />
                </div>
                {/* <div className="brand-logo__image-hover">
                  <img src={image} className="img-fluid" alt={name} />
                </div> */}
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Clients;
