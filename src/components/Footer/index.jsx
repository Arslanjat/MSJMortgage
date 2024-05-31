/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import services3Data from "../../data/footer.json";

const Footer = ({ classText }) => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="item md-mb50">
              <div className="title">
                <h6 className="location">Location</h6>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="">
                    <p>
                      2111 W March Ln B200 <br></br> Stockton, CA 95207
                    </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="">
                    <p>888-848-7199</p>
                  </div>
                </li>
                <li>
                  <span>
                      <img className="nmls-img" src="/assets/img/nmls.png" alt="" />
                  </span>
                  <div className="">
                    <p># 936439</p>
                  </div>
                </li>
                <li>
                  <div className="branches">
                    <Link href="/location">
                      <a>
                        <p>Branches</p>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-2 col-md-2">
            <div className="item md-mb50">
              <div className="title">
                <h6>Support</h6>
              </div>
              <ul>
                <li>
                  <div className="">
                    <Link href="/privacy-policy">
                      <a>
                        <p>Privacy & policy</p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="">
                    <Link href="/terms">
                      <a>
                        <p>Terms</p>
                      </a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="">
                    <Link href="/faqs">
                      <a>
                        <p>FAQ&apos;s</p>
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="item md-mb50">
              <div className="title">
                <h6>Rewards</h6>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <img src="/assets/img/Best-of-209-2020.png" alt="" />
                  </div>
                  <div className="img">
                    <img src="/assets/img/best-of-2022.png" alt="" />
                  </div>
                  <div className="img">
                    <img src="/assets/img/Expertise-2021.png" alt="" />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-sm-2 col-md-2">
            <div className="item">
              {/* <div className="logo">
                <img src="/assets/img/footer-logo.png" alt="" />
              </div> */}
              <div className="title">
                <h6>Social Media</h6>
              </div>
              <div className="social">
                <Link
                  href="https://www.facebook.com/MSJMortgage/"
                  target="_blank"
                  rel="noopener"
                >
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link
                  href="https://twitter.com/msjmortgage/"
                  target="_blank"
                  rel="noopener"
                >
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link
                  href="https://www.instagram.com/missionsanjosemortgage/"
                  target="_blank"
                  rel="noopener"
                >
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/msjmortgage/mycompany/"
                  target="_blank"
                  rel="noopener"
                >
                  <a>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="row">
            {services3Data
              .filter((item) => item.id === 3)
              .map((item) => (
                <div className="col-lg-12 mt-3" key={item.id}>
                  <div className="d-flex">
                    <img
                      src={item.ecoa}
                      alt=""
                      style={{
                        width: "5.5%",
                        height: "78px",
                        marginTop: "6px",
                      }}
                    />
                    <div
                      className="content-container"
                      style={{
                        width: "100%",
                        overflow: "hidden",
                        position: "relative",
                      }}
                    >
                      <div className="item-reward ">
                        <h6 >{item.reward}</h6>
                      </div>
                      <p
                        style={{
                          fontSize: "10px",
                          padding: "5px",
                          margin: "0px",
                          lineSapcing: "0px"
                        }}
                      >
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
