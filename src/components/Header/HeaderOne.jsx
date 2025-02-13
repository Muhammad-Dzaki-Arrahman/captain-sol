import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import cn from "classnames";
import $ from "jquery";
import { handleClickScroll } from "../../lib/helpers";

const HeaderOne = () => {
  // sticky nav bar
  const [stickyClass, setStickyClass] = useState({
    fixed: "",
    header: "",
  });

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight < 245
        ? setStickyClass({ fixed: "", header: "" })
        : setStickyClass({ fixed: "active-height", header: "sticky-menu" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  // mobile menu
  useEffect(() => {
    //SubMenu Dropdown Toggle
    if ($(".menu-area li.menu-item-has-children ul").length) {
      $(".menu-area .navigation li.menu-item-has-children").append(
        '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
      );
    }

    //Mobile Nav Hide Show
    if ($(".mobile-menu").length) {
      let mobileMenuContent = $(".menu-area .main-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      //Dropdown Button
      $(".mobile-menu li.menu-item-has-children").on("click", function () {
        $(this).toggleClass("open");
        $(this).prev("ul").slideToggle(500);
      });
      //Menu Toggle Btn
      $(".mobile-nav-toggler").on("click", function () {
        $("body").addClass("mobile-menu-visible");
      });

      //Menu Toggle Btn
      $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
        $("body").removeClass("mobile-menu-visible");
      });
    }
  }, []);

  // active link switching
  const { hash, pathname } = useLocation();
  const isActiveLink = (id) => {
    return id == hash ? "active" : "";
  };

  return (
    <header id="header">
      <div id="header-fixed-height" className={cn(stickyClass.fixed)} />

      <div id="sticky-header" className={cn("menu-area", stickyClass.header)}>
        <div className={cn("container custom-container")}>
          <div className="row">
            <div className="col-12">
              <div className={"mobile-nav-toggler"}>
                <i className="fas fa-bars" />
              </div>

              <div className="menu-wrap">
                <nav className={"menu-nav"}>
                  <div className="logo">
                    <a href="#header">
                      <img
                        src="/img/logo/csn.png"
                        alt="BigTech Logo"
                        className="audit-logo"
                      />
                      <h4>
                        <span className="ml-5">CSN</span>
                      </h4>
                    </a>
                  </div>

                  <div className={cn("navbar-wrap main-menu d-none d-lg-flex")}>
                    <ul className={"navigation"}>
                      <li
                        className={cn(
                          hash == "" && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          to="#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash == "#about" && "active")}>
                        <Link
                          to="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          About us
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          to="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Roadmap
                        </Link>
                      </li>
                      <li className={"menu-item-has-children"}>
                        <Link to="#">Socials</Link>
                        <ul className={cn("sub-menu")}>
                          <li className={cn(pathname == "#" && "active")}>
                            <a
                              href="https://web.telegram.org/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Telegram
                            </a>
                          </li>
                          <li className={cn(pathname == "#" && "active")}>
                            <a
                              href="https://x.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Twitter
                            </a>
                          </li>
                          <li className={cn(pathname == "#" && "active")}>
                            <a
                              href="https://dexscreener.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Dex Screener
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className={cn("header-action", "d-none d-md-block")}>
                    <ul>
                      <li className={"header-btn"}>
                        <Link to="#" className="btn">
                          Coming Soon
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <div className={"mobile-menu"}>
                <nav className={"menu-box"}>
                  <div className={"close-btn"}>
                    <i className="fas fa-times"></i>
                  </div>
                  <div className={"nav-logo"}>
                    <Link to="/">
                      <img
                        src="/img/logo/img_1.png"
                        alt="BigTech Logo"
                        title=""
                      />
                    </Link>
                  </div>

                  <div className="mobile-menus">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->  */}
                    <ul>
                      <li
                        className={cn(
                          hash == "" && "active",
                          "menu-item-has-children"
                        )}
                      >
                        <Link
                          to="#header"
                          className={"section-link"}
                          onClick={() => handleClickScroll("header")}
                        >
                          Home
                        </Link>
                      </li>
                      <li className={cn(hash == "#about" && "active")}>
                        <Link
                          to="#about"
                          className={"section-link"}
                          onClick={() => handleClickScroll("about")}
                        >
                          About us
                        </Link>
                      </li>
                      <li className={isActiveLink("#roadmap")}>
                        <Link
                          to="#roadmap"
                          className={"section-link"}
                          onClick={() => handleClickScroll("roadmap")}
                        >
                          Roadmap
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className={"social-links"}>
                    <ul className="clearfix">
                      <li>
                        <a href="https://web.telegram.org/">
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://x.com/">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://dexscreener.com/">
                          <img
                            src="img/partnership/dex.png"
                            alt="DEX Screener"
                            className="dex-screener"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className={"menu-backdrop"} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
