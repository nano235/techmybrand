import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

function Mobmenu() {
  const { navs, closeSidebar, isSidebarOpen, isSubmenuOpen, toggleSubmenu } =
    useGlobalContext();

  const container = React.useRef();
  const handleClickOutside = (e) => {
    if (container.current && !container.current.contains(e.target)) {
      closeSidebar();
    }
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className={`mobile-menu-overlay ${isSidebarOpen && "active"}`}>
      <div className="mobile-menu-overlay__inner" ref={container}>
        <div className="mobile-menu-overlay__header">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-6 col-8">
                <div className="logo">
                  {/* <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link> */}
                </div>
              </div>
              <div className="col-md-6 col-4">
                <div className="mobile-menu-content text-end">
                  <span
                    className="mobile-navigation-close-icon"
                    onClick={closeSidebar}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-menu-overlay__body">
          <nav className="offcanvas-navigation">
            <ul>
              {navs.map((nav) => {
                const { page, id, links } = nav;
                return (
                  <li
                    className={`has-children ${isSubmenuOpen && "active"}`}
                    key={id}
                  >
                    <div>
                      <span className="menu-expand" onClick={toggleSubmenu}>
                        {/* <li></li> */}
                      </span>
                      <span>{page}</span>
                    </div>
                    <ul className="sub-menu">
                      {links.map((link) => {
                        const { label, url, id } = link;
                        return (
                          <li key={id}>
                            {isSubmenuOpen && (
                              <Link to={url}>
                                <span>{label}</span>
                              </Link>
                            )}
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
      </div>
    </div>
  );
}

export default Mobmenu;
