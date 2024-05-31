import React, { useState } from "react"; // Import React
import { getProductRank } from "../../common/module_pricing";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Loan Estimated
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.product ? (
          <div>
            <h5>Estimated Closing Services</h5>
            <table className="table table-striped">
              <tbody>
                {props.product.cs.map((item, index) => (
                  <tr key={index}>
                    <td style={{ margin: "0px", padding: "5px" }}>
                      {item.name}
                    </td>
                    <td style={{ margin: "0px", padding: "5px" }}>
                      {item.price}
                    </td>
                  </tr>
                ))}

                {/* Estimated Monthly Payment */}
                <h6>Estimated Monthly Payment</h6>

                {props.product.mp.map((item, index) => (
                  <tr key={index}>
                    <td style={{ margin: "3px", padding: "5px" }}>
                      {item.name}
                    </td>
                    <td style={{ margin: "3px", padding: "5px" }}>
                      {item.price}
                    </td>
                  </tr>
                ))}
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
}

function Find() {
  const [zipCode, setZipCode] = useState("");
  const [loan_amount, setloan_amount] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [levelFico, setLevelFico] = useState("740+");
  const [fixedTerm, setFixedTerm] = useState("360");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  const handleLevelFicoChange = (e) => {
    setLevelFico(e.target.value);
  };

  const handleFixedTermChange = (e) => {
    setFixedTerm(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    // Handle commas in numeric inputs
    if (name === "purchasePrice" || name === "loan_amount" || name === "downPayment") {
      parsedValue = value.replace(/,/g, ""); // Remove existing commas
      parsedValue = parsedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ","); // Add commas for thousands separators
    }

    // Additional handling for downPayment
    if (name === "downPayment") {
      // Remove any existing percentage signs
      parsedValue = parsedValue.replace("%", "");
      // Ensure that the value is a valid number
      if (!isNaN(parsedValue)) {
        // Add the percentage sign to the end of the value
        parsedValue += "%";
      }
    }

    // Update state based on input name
    switch (name) {
      case "zipCode":
        setZipCode(parsedValue);
        break;
      case "purchasePrice":
        setPurchasePrice(parsedValue);
        break;
      case "loan_amount":
        setloan_amount(parsedValue);
        break;
      case "downPayment":
        setDownPayment(parsedValue);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const loan_amountValue = parseInt(loan_amount.replace(/,/g, ""));
    const purchasePriceValue = parseInt(purchasePrice.replace(/,/g, ""));
    const downPaymentValue = parseInt(downPayment.replace(/,/g, ""));
    const downPaymentPercentage = (
      (downPaymentValue / purchasePriceValue) *
      100
    ).toFixed(2); // Calculate down payment as percentage
    const ltv = parseInt((loan_amountValue / purchasePriceValue) * 100);
    const cltv = parseInt((loan_amountValue / purchasePriceValue) * 100);

    const params = {
      category_type: 1,
      product_type: 0,
      loan_amount: loan_amountValue,
      ltv: ltv,
      cltv: cltv,
      loan_purpose: "lp_purchease",
      amortization_type: "fixed",
      fixed_term: fixedTerm,
      arm_term: 180,
      high_balance: "no",
      streamline: "no",
      lpmi: "no",
      limited_income: "no",
      interest_only: "no",
      down_payment: downPaymentPercentage, // Use down payment percentage
      ft_home_buyer: "no",
      ncsc: "no",
      level_fico: levelFico,
      units: "1unit",
      occupancy: "primary",
      lenders: [],
      selected_branch: 27,
      selected_relationship: "Broker",
      lock_period: "lock30",
      state: "CA",
      self_employed: "no",
    };

    getProductRank(params, (data) => {
      setProducts(data);
      setLoading(false);
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleFormSubmit}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Purchase Price</th>
                <th scope="col">Loan Amount</th>
                {/* <th scope="col">Down Payment</th> */}
                <th scope="col">Credit Score</th>
                <th scope="col">Loan Term</th>
                <th scope="col">Zip code</th>
                <th scope="col">Search</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="purchasePrice"
                      value={purchasePrice}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </td>
                <td>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">$</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="loan_amount"
                      value={loan_amount}
                      onChange={handleInputChange}
                      
                    />
                  </div>
                </td>

                {/* <td>
                  <div className="input-group">
                  <div className="input-group-prepend">
                      <span className="input-group-text">%</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      name="downPayment"
                      value={downPayment}
                      onChange={handleInputChange}
                    />
                  </div>
                </td> */}

                <td>
                  <select
                    className="form-control"
                    value={levelFico}
                    onChange={handleLevelFicoChange}
                  >
                    <option value="780+">780+</option>
                    <option value="760-779">760 - 779</option>
                    <option value="740-759">740 - 759</option>
                    <option value="720-739">720 - 739</option>
                    <option value="700-719">700 - 719</option>
                    <option value="680-699">680 - 699</option>
                    <option value="660-679">660 - 679</option>
                    <option value="640-659">640 - 659</option>
                    <option value="620-639">620 - 639</option>
                    <option value="580-619">580 - 619</option>
                  </select>
                </td>
                <td>
                  <select
                    className="form-control"
                    value={fixedTerm}
                    onChange={handleFixedTermChange}
                  >
                    <option value="360">30 yr fixed</option>
                    <option value="240">20 yr fixed</option>
                    <option value="180">15 yr fixed</option>
                    <option value="120">10 yr fixed</option>
                    <option value="36">3 yr ARM</option>
                    <option value="60">5 yr ARM</option>
                    <option value="84">7 yr ARM</option>
                    <option value="120">10 yr ARM</option>
                  </select>
                </td>
                <td>
                  <input
                  style={{width: "120px"}}
                    type="text"
                    className="form-control"
                    name="zipCode"
                    value={zipCode}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <button type="submit" className="btn btn-primary">
                    Get Rates
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        {loading ? (
          <p>Please Wait, Finding the Best Mortgage Rates...</p>
        ) : products.length > 0 ? (
          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Rate</th>
                <th scope="col">APR</th>
                <th scope="col">Closing Cost</th>
                <th scope="col">Loan Amount</th>
                <th scope="col">Monthly Payment</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>{product.rate}</td>
                  <td>{product.apr}</td>
                  <td>{product.closing_cost}</td>
                  <td>{product.loan_amount}</td>
                  <td>{product.mo_payment}</td>
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        setSelectedProduct(product);
                        setModalShow(true);
                      }}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products found</p>
        )}
      </div>

      <MyVerticallyCenteredModal
        product={selectedProduct}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default Find;
