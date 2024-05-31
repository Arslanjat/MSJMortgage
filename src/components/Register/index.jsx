import { useState } from "react";
import styles from "../../styles/home.module.css";

export default function Register() {
  const [fname, setfName] = useState("");
  const [lname, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [state, setstate] = useState("");
  const [zipcode, setzipcode] = useState("");
  const [nmls, setNmls] = useState("");
  const [idProspect, setIdProspect] = useState("");
  const [branch, setBranch] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");
  const [experince, setexperince] = useState("");
  const [stateOfBuss, setstateOfBuss] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fname,
      lname,
      email,
      address,
      state,
      zipcode,
      nmls,
      idProspect,
      branch,
      number,
      message,
      stateOfBuss,
      experince,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData.success) {
          setSuccessMessage(
            "Registered successfully, You will received a call shortly"
          );
          setfName("");
          setlName("");
          setEmail("");
          setAddress("");
          setstate("");
          setzipcode("");
          setNmls("");
          setIdProspect("");
          setBranch("");
          setMessage("");
          setexperince("");
        } else {
          setErrorMessage("Error sending email.");
        }
      } else {
        setErrorMessage("Error sending email.");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Error sending email.");
    }
  };

  return (
    <div className={styles.formContainer}>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <div className="row">
            <div className="form-group col-md-6">
              {/* <label for="exampleInputEmail1">Email address</label> */}

              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="First Name"
                required
                value={fname}
                onChange={(e) => setfName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Last Name"
                value={lname}
                required
                onChange={(e) => setlName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="phone number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your st Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="State"
              onChange={(e) => setstate(e.target.value)}
              value={state}
              required
            />
          </div>
          <div className="form-group col-md-3">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Zipcode"
              onChange={(e) => setzipcode(e.target.value)}
              value={zipcode}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="NMLS NUmber"
              value={nmls}
              onChange={(e) => setNmls(e.target.value)}
            />
          </div>

          <select
            className="{styles.formInput} col-md-6"
            style={{ marginBottom: "46px" }}
            value={stateOfBuss}
            onChange={(e) => setstateOfBuss(e.target.value)}
          >
            <option value="">State To Conduct Bussniess</option>
            <option value="Orignal">Arizona</option>
            <option value="Pro">California</option>
            <option value="Pro Plus">Colorado</option>
            <option value="Branch Option">Idaho</option>
            <option value="Branch Option">Florida</option>
            <option value="Branch Option">Georgia</option>
            <option value="Branch Option">Montana</option>
            <option value="Branch Option">New Mexico</option>
            <option value="Branch Option">Oregon</option>
            <option value="Branch Option">Texas</option>
            <option value="Branch Option">Washington</option>
            <option value="Branch Option">Ohio</option>
            <option value="Branch Option">Wyomimng</option>
          </select>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <select
              style={{ marginBottom: "39px", width: "440px" }}
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              required
            >
              <option value="">Select a Plan</option>
              <option value="Orignal">Orignal</option>
              <option value="Pro">Pro</option>
              <option value="Pro Plus">Pro Plus</option>
              <option value="Branch Option">Branch Option</option>
            </select>
          </div>

          <div className="form-group col-md-6">
            <select
              style={{ marginBottom: "56px", width: "440px" }}
              value={experince}
              onChange={(e) => setexperince(e.target.value)}
              required
            >
              <option value="">Past Experience</option>
              <option value="0-1 Year">0-1 Year</option>
              <option value="2-3 Year">2-3 Year</option>
              <option value="4 + Year">4 + Year</option>
            </select>
          </div>
        </div>

        <label className={styles.formLabel}>
          Your message
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <center>
          {successMessage && (
            <h6 style={{ color: "green" }}>{successMessage}</h6>
          )}
          <button type="submit" className="btn-curve ">
            <span>Submit</span>
          </button>
        </center>
      </form>
    </div>
  );
}