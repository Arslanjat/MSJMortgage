/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import getSiblings from "../../common/getSiblings";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document
      .getElementById("navbarSupportedContent")
      .classList.toggle("show-with-trans");
  };
  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/product">
                  <a className="nav-link">Loan Program</a>
                </Link>
              </li>
              {/* <li className="nav-item drodown" >
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="/loan_program"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  loan Program
                </span>
                <div className="dropdown-menu">
                  <Link href="/conventional">
                    <a className="dropdown-item">Conventional</a>
                  </Link>
                  <Link href="/government">
                    <a className="dropdown-item">Government</a>
                  </Link>
                  <Link href="/portfolio">
                    <a className="dropdown-item">Portfolio</a>
                  </Link>
                  <Link href="/private-money">
                    <a className="dropdown-item">Private Money</a>
                  </Link>
                </div>
              </li> */}
              <li className="nav-item">
                <Link href="/quote">
                  <a className="nav-link">Quote</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team">
                  <a className="nav-link">Our Team</a>
                </Link>
              </li>
              <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Mortgage Resources
                </span>
                <div className="dropdown-menu">
                  <Link href="/mortgageforms">
                    <a className="dropdown-item">Forms</a>
                  </Link>
                  {/* <Link href="/flyer">
                    <a className="dropdown-item">Flyers</a>
                  </Link> */}
                  {/* <Link href="/vediocom">
                    <a className="dropdown-item">Video</a>
                  </Link> */}
                  <Link href="/credit">
                    <a className="dropdown-item">Credit</a>
                  </Link>
                  <Link href="/calculator">
                    <a className="dropdown-item">Calculator</a>
                  </Link>
                  <Link href="/training">
                    <a className="dropdown-item">Training</a>
                  </Link>
                  {/* <Link href="/blogs">
                    <a className="dropdown-item">Blogs</a>
                  </Link> */}
                  <Link href="/checklist">
                    <a className="dropdown-item">Check List</a>
                  </Link>
                  <Link href="/process">
                    <a className="dropdown-item">Process</a>
                  </Link>
                  <Link href="/terms">
                    <a className="dropdown-item">Terms</a>
                  </Link>
                  <Link href="/regulatory">
                    <a className="dropdown-item">Regulatory & Acts</a>
                  </Link>
                  <Link href="/methodholding">
                    <a className="dropdown-item">
                      Common Method of Holding Title
                    </a>
                  </Link>
                  <Link href="/privacy-policy">
                    <a className="dropdown-item">Privacy Policy</a>
                  </Link>
                  <Link href="/faqs">
                    <a className="dropdown-item">FAQ.s</a>
                  </Link>
                  <Link href="/lender-notice">
                    <a className="dropdown-item">Equal Housing Lender Notice</a>
                  </Link>
                  <Link href="/act-notice">
                    <a className="dropdown-item">
                      Home Mortgage Disclosure Act Notice
                    </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link">About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link">Contact</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/career">
                  <a className="nav-link">Career</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
