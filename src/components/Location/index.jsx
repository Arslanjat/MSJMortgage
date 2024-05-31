import React from "react";
import Link from "next/link";
import services3Data from "../../data/footer.json";

function Branch() {
  return (
    <>
      <div className="container mt-20 mb-40">
        <h4>
          <center className="mb-25">
            {" "}
            <u> Branches</u>
          </center>
        </h4>
        <div className="row">
          {services3Data.map((item, index) => (
            <div className="col-lg-4" key={item.id}>
              <div>
                <h6 className="mb-10" style={{ color: "#7a0424" }}>
                  {item.title}
                </h6>
                <p style={{ color: "#737373;" }}>{item.address}</p>
                <p style={{ color: "#737373;" }}>{item.officeNumber}</p>
                <p style={{ color: "#737373;" }}>{item.tollFree}</p>
                <p style={{ color: "#737373;" }}>{item.fax}</p>
                <p style={{ color: "#737373;" }}>{item.NMLS}</p>
                <b>
                  <Link href="#">
                    <span>Read -{">"}</span>
                  </Link>
                </b>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h4>
          <center className="mb-25">
            <u> Approved States</u>
          </center>
        </h4>
        <center>
          <div className="mb-50">
            <img src="/assets/img/usamap34.png" alt="" />
          </div>
          <h5 className="mt-30 mb-40" style={{ color: "#26272b" }}>
            <table
              className="table mt-30 table table-striped table-hover"
              style={{ fontSize: "15px" }}
            >
              <thead>
                <tr>
                  <th scope="col" style={{ color: "#7a0404" }}>
                    SN.#
                  </th>
                  <th scope="col" style={{ color: "#7a0404" }}>
                    Approved States
                  </th>
                  <th scope="col" style={{ color: "#7a0404" }}>
                    NMLS#
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th scope="row">Arizona</th>
                  <td>1043243</td>
                </tr>
                <tr>
                  <th>2</th>
                  <th scope="row">California</th>
                  <td>01917135</td>
                </tr>
                <tr>
                  <th>3</th>
                  <th scope="row">Colorado</th>
                  <td colSpan="2">936439</td>
                </tr>
                <tr>
                  <th>4</th>
                  <th scope="row">Idaho</th>
                  <td colSpan="2">MBL-2080936439</td>
                </tr>
                <tr>
                  <th>5</th>
                  <th scope="row">Florida</th>
                  <td colSpan="2">MBR6015</td>
                </tr>
                <tr>
                  <th>6</th>
                  <th scope="row">Georgia</th>
                  <td colSpan="2">936439</td>
                </tr>
                <tr>
                  <th>7</th>
                  <th scope="row">Montana</th>
                  <td colSpan="2">936439</td>
                </tr>
                <tr>
                  <th>8</th>
                  <th scope="row">New Mexico </th>
                  <td colSpan="2">936439</td>
                </tr>
                <tr>
                  <th>9</th>
                  <th scope="row">Oregon</th>
                  <td colSpan="2">936439</td>
                </tr>
                <tr>
                  <th>10</th>
                  <th scope="row">Texas</th>
                  <td colSpan="2">936439</td>
                </tr>
                <tr>
                  <th>11</th>
                  <th scope="row">Washington</th>
                  <td colSpan="2">CL-936439</td>
                </tr>
                <tr>
                  <th>12</th>
                  <th scope="row">Ohio</th>
                  <td colSpan="2"> RM.805160</td>
                </tr>
                <tr>
                  <th>13</th>
                  <th scope="row">Wyomimng</th>
                  <td colSpan="2">4367</td>
                </tr>
              </tbody>
            </table>
          </h5>
        </center>
      </div>
    </>
  );
}

export default Branch;
