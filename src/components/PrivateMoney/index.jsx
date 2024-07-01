import React, { useState } from "react";
import portfolio1Data from "../../data/private_money.json";

const PrivateMoney = () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container-fluid mt-30">
      <div className=" col-sm-12">
        {/* <header className="section-header ">
          <h3>Frequently Asked Questions</h3>
        </header> */}

        <ul id="faq-list" className="wow fadeInUp gallery twsty">
          {portfolio1Data.portfolio.map((item, index) => (
            <li key={index} style={{ marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  backgroundImage: 'url("/assets/img/line-pattern1.png")',
                }}
                onClick={() => toggleDropdown(index)}
              >
                <p
                  style={{
                    display: "inline-block",
                    fontSize: "18px",
                    color: "#7a0404",
                    fontWeight: "600",
                  }}
                >
                  {item.title}
                </p>
                <button
                  className="faq-button ml-auto"
                  style={{ fontSize: "25px" }}
                >
                  {openIndex === index ? (
                    <span>&#45;</span>
                  ) : (
                    <span>&#43;</span>
                  )}
                </button>
                <hr />
              </div>
              {openIndex === index && (
                <div className="container row">
                  <div
                    className="faq-content"
                    style={{
                      backgroundImage: 'url("/assets/img/line-patter.png")',
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    <p>{item.tag}</p>

                    <p className="con-title">{item.title2}</p>
                    <div className="list-style">
                      <ul className="">
                        <li className="list-style">{item.li1}</li>
                        <li className="list-style">{item.li2}</li>
                        <li className="list-style">{item.li3}</li>
                        <li className="list-style">{item.li4}</li>
                        <li className="list-style">{item.li5}</li>
                        <li className="list-style">{item.li6}</li>
                        <li className="list-style">{item.li7}</li>
                      </ul>
                    </div>
                    <p className="con-title">{item.title3}</p>
                    <div className="list-style">
                      <ul>
                        <li className="list-style">{item.li8}</li>
                        <li className="list-style">{item.li9}</li>
                        <li className="list-style">{item.li10}</li>
                      </ul>
                    </div>
                    <p className="con-title">{item.title4}</p>
                    <div className="list-style">
                      <ul>
                        <li className="list-style">{item.li11}</li>
                        <li className="list-style">{item.li12}</li>
                        <li className="list-style">{item.li13}</li>
                        <li className="list-style">{item.li14}</li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="col-sm-6 mt-30">
                    <div style={{ backgroundColor: "" }}>
                      <h6
                        style={{
                          color: "black",
                          textAlign: "center",
                          padding: "5px",
                          margin: "0px",
                        }}
                      >
                        NMLS#: 936439
                      </h6>
                      <div>
                        <h2
                          style={{
                            textAlign: "center",
                            padding: "10px",
                            color: "black",
                          }}
                        >
                          Today's Rate
                        </h2>
                      </div>
                      <div>
                        <h4
                          style={{
                            textAlign: "center",
                            color: "black",
                            padding: "10px",
                          }}
                        >
                          Conforming 30-Year Fixed
                        </h4>
                      </div>
                      <div>
                        <h1
                          style={{
                            textAlign: "center",
                            fontSize: "80px",
                            fontWeight: "800",
                          }}
                        >
                          5.875%{" "}
                          <span
                            style={{
                              color: "black",
                              fontWeight: "600",
                            }}
                          >
                            Rate
                          </span>{" "}
                        </h1>
                        <h1
                          style={{
                            textAlign: "center",
                            fontSize: "80px",
                            paddingBottom: "20px",
                            color: "black",
                          }}
                        >
                          6.394% <span style={{ color: "black" }}>APR</span>
                        </h1>
                      </div>
                      <div
                        style={{
                          textAlign: "",
                          paddingTop: "20px",
                          paddingBottom: "20px",
                          backgroundColor: "#7a0404",
                        }}
                      >
                        <div>
                          <div
                            style={{
                              textAlign: "center",
                              backgroundColor: "",
                              color: "white",
                              padding: "30px",
                            }}
                          >
                            <a
                             
                              href="https://1smtg.com/portal/?mlo=Mw=="
                              target="_blank"
                            >
                              APPLY NOW
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#3e3a3a",
                          }}
                        >
                          Loan amount: $450,000, Property value: $500,000, Down
                          Payment 10%, FICO credit score: 760 - 779 Property
                          type: Single Family Residence, Unit 1, Occupancy type:
                          Owner Occupied, Loan type: Conforming
                        </p>
                        <p
                          style={{
                            textAlign: "center",
                            color: "#3e3a3a",
                          }}
                        >
                          Rates as of {date}
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PrivateMoney;
