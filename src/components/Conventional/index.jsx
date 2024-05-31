import React, { useState } from "react";
import portfolio1Data from "../../data/conventional.json";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="container mt-30">
      <div className="container col-sm-12">
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
                <div className="faq-content">
                  <p
                    style={{
                      backgroundImage: 'url("/assets/img/line-pattern.png")',
                      fontSize: "14px",
                      color: "#4d4c4c",
                    }}
                  >
                    {item.tag}
                  </p>
                  {item.tag2 && <p>{item.tag2}</p>}
                  {item.tag3 && <p>{item.tag3}</p>}
                  {/* Add more tags as needed */}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;