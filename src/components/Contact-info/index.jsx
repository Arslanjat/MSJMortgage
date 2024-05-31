import React from "react";

const ContactInfo = () => {
  return (
    <div className="info pt-10 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="item">
              <span className="icon pe-7s-phone"></span>
              <div className="">
                <h6 className="custom-font">Call Us</h6>
                <p>209-651-2000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="">
                <h6 className="custom-font">Address</h6>
                <p>
                  2111 W March Ln B200, <br />
                  Stockton, CA 95207
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
