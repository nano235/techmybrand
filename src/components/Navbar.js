import React from "react";
import { Link } from "react-router-dom";
import lightLogo from "../assets/images/light-logo.png";
import logo from "../assets/images/logo.png";
import { useGlobalContext } from "../context";

function Navbar() {
  const { navs, openSidebar } = useGlobalContext();
  const [small, setSmall] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const pathname = window.location.pathname;

  return (
    <header className="header-area header-area--absolute">
      <div
        className={`header-bottom-wrap header-sticky ${
          small || pathname !== "/" ? "is-sticky" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header position-relative">
                <div className="header__logo">
                  <Link to="/">
                    <img
                      src={lightLogo}
                      alt="logo"
                      className="img-fluid light-logo"
                    />
                    <img
                      src={logo}
                      alt="logo"
                      className="img-fluid dark-logo"
                    />
                  </Link>
                </div>
                <div className="header-right">
                  <div className="header__navigation menu-style-four d-none d-xl-block">
                    <nav className="navigation-menu">
                      <ul>
                        {navs.map((nav) => {
                          const { page, id, links } = nav;
                          return (
                            <li
                              className="has-children has-children--multilevel-submenu"
                              key={id}
                            >
                              <div className="nav-link">
                                <span>{page}</span>
                              </div>
                              <ul className="submenu">
                                {links.map((link) => {
                                  const { label, url, id } = link;
                                  return (
                                    <li key={id}>
                                      <Link to={url}>
                                        <span>{label}</span>
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                  <div
                    className="mobile-navigation-icon white-md-icon d-block d-xl-none"
                    onClick={openSidebar}
                  >
                    <i></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
