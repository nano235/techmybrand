import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Totop() {
  const [showScroll, setShowScroll] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && showScroll) {
        setShowScroll(false);
      }
      if (prevScrollY.current > currentScrollY && !showScroll) {
        setShowScroll(true);
      }
      if (currentScrollY <= 400) setShowScroll(false);

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showScroll]);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      to="#"
      className={`scroll-top ${showScroll && "show"}`}
      onClick={scrollTop}
    >
      <i className="arrow-top fal fa-long-arrow-up"></i>
      <i className="arrow-bottom fal fa-long-arrow-up"></i>
    </Link>
  );
}

export default Totop;
