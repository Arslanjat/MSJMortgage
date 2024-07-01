import React, { useState, useEffect } from "react";
import portfolio1Data from "../../data/government.json";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

const MyVerticallyCenteredModal = (props) => {
  const { product } = props;

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
        Loan Estimated
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {product ? (
          <div>
            <table className="table table-hover">
              <tbody>
                <h6 style={{ fontSize: "16px" }}>A. Origination Charges</h6>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[6] && product.cs[6].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[6] && product.cs[6].price}
                  </td>
                </tr>
                <h6 style={{ fontSize: "16px" }}>B. Closing Services</h6>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[0] && product.cs[0].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[0] && product.cs[0].price}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[1] && product.cs[1].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[1] && product.cs[1].price}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[2] && product.cs[2].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[2] && product.cs[2].price}
                  </td>
                </tr>
                <h6 style={{ fontSize: "16px" }}>C. Title & Escrow</h6>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[3] && product.cs[3].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[3] && product.cs[3].price}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[4] && product.cs[4].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[4] && product.cs[4].price}
                  </td>
                </tr>
                <h6 style={{ fontSize: "16px" }}>D. Other</h6>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[5] && product.cs[5].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[5] && product.cs[5].price}
                  </td>
                </tr>

                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.cs && product.cs[7] && product.cs[7].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    ${product.cs && product.cs[7] && product.cs[7].price}
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
            <h6 style={{ fontSize: "16px" }}>Estimated Monthly Payment</h6>
            <table className="table table-hover">
              <tbody>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.mp && product.mp[0] && product.mp[0].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    ${product.mp && product.mp[0] && product.mp[0].price}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.mp && product.mp[1] && product.mp[1].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    ${product.mp && product.mp[1] && product.mp[1].price}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.mp && product.mp[2] && product.mp[2].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    ${product.mp && product.mp[2] && product.mp[2].price}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    {product.mp && product.mp[3] && product.mp[3].name}
                  </td>
                  <td
                    style={{
                      margin: "0px",
                      padding: "3px",
                      paddingLeft: "20px",
                      fontSize: "14px",
                    }}
                  >
                    ${product.mp && product.mp[3] && product.mp[3].price}
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No product data available</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

const Government = () => {
  const today = new Date();
  const date = today.toLocaleDateString();
  const [openIndex, setOpenIndex] = useState(null);
  const [detailsProduct, setDetailsProduct] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [products, setProducts] = useState({
    FHA: [],
    USDA: [],
    VA: [],
    "203K": [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://1smtg.com/today_rates/");
        const data = response.data;
        if (data.length > 0) {
          const filteredProducts = {
            FHA: data.filter(
              (product) =>
                product.program.includes("FHA") &&
                product.program.includes("FHA 30Y FIXED")
            ),
            USDA: data.filter(
              (product) =>
                product.program.includes("USDA") &&
                product.program.includes("USDA 30Y FIXED")
            ),
            VA: data.filter(
              (product) =>
                product.program.includes("VA") &&
                product.program.includes("VA 30Y FIXED")
            ),
            "203K": data.filter(
              (product) =>
                product.program.includes("203K") &&
                product.program.includes("203K")
            ),
          };
          setProducts(filteredProducts);
        }
      } catch (error) {
        console.error("Error fetching rate data:", error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleViewDetails = (product) => {
    const parsedProduct = JSON.parse(product.json);
    setDetailsProduct(parsedProduct);
    setModalShow(true);
  };

  return (
    <section id="faq" className="container-fluid mt-30">
      <div className="container col-sm-12">
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
                    textTransform: "uppercase",
                    fontWeight: "700",
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
                <div className="row">
                  <div
                    className="faq-content col-sm-6"
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
                      </ul>
                    </div>
                    <p className="con-title">{item.title3}</p>
                    <div className="list-style">
                      <ul>
                        <li className="list-style">{item.li6}</li>
                        <li className="list-style">{item.li7}</li>
                        <li className="list-style">{item.li8}</li>
                      </ul>
                    </div>
                    <p className="con-title">{item.title4}</p>
                    <div className="list-style">
                      <ul>
                        <li className="list-style">{item.li9}</li>
                        <li className="list-style">{item.li10}</li>
                        <li className="list-style">{item.li11}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-30">
                    <div style={{ backgroundColor: "" }}>
                      {products[item.title] &&
                        products[item.title].map((product, productIndex) => (
                          <div key={productIndex}>
                            <h3
                              style={{
                                textAlign: "center",
                                padding: "5px",
                                color: "black",
                              }}
                            >
                              {product.program}
                            </h3>
                            <div>
                              <h1
                                style={{
                                  textAlign: "center",
                                  fontSize: "80px",
                                  fontWeight: "800",
                                }}
                              >
                                {product.rate}{" "}
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
                                  paddingBottom: "10px",
                                  color: "black",
                                }}
                              >
                                {product.apr}{" "}
                                <span style={{ color: "black" }}>APR</span>
                              </h1>
                              <div className="row">
                                <h6
                                  style={{
                                    color: "black",
                                    textAlign: "center",
                                    padding: "5px",
                                    paddingLeft: "290px",
                                    margin: "0px",
                                  }}
                                >
                                  NMLS#: 936439
                                </h6>
                                <div style={{ paddingLeft: "40px" }}>
                                  <Button
                                    className="btn-md mr-2 mb-1"
                                    variant="primary"
                                    onClick={() => handleViewDetails(product)}
                                  >
                                    View Details
                                  </Button>
                                </div>
                              </div>
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
                                    rel="noreferrer"
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
                                Loan amount: $450,000, Property value: $500,000,
                                Down Payment 10%, FICO credit score: 760 - 779
                                Property type: Single Family Residence, Unit 1,
                                Occupancy type: Owner Occupied, Loan type:
                                Conforming
                              </p>
                              <p
                                style={{
                                  fontSize: "18px",
                                  textAlign: "center",
                                  color: "#3e3a3a",
                                }}
                              >
                                Rates as of {date}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <MyVerticallyCenteredModal
        product={detailsProduct}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </section>
  );
};

export default Government;
