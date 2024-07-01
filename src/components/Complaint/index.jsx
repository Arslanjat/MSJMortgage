import React, { useState } from 'react';

const Complaint = ({ isOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complaints: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/complaints', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        alert('Your complaint has been sent successfully.');
        // Clear form data after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          complaints: '',
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error submitting complaint:', error);
      alert('There was an error submitting your complaint. Please try again later.');
    }
  };

  return (
    <div className={`complaint-popup ${isOpen ? 'open' : ''}`}>
      <div className="container-complant">
        <div className="text">How can we help you</div>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-data">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <label htmlFor="phone">Phone #</label>
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone #"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="underline"></div>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <label htmlFor="complaints">What has happened?</label>
              <textarea
                name="complaints"
                rows="8"
                placeholder="How can we help you."
                required
                value={formData.complaints}
                onChange={handleChange}
              ></textarea>
              <div className="underline"></div>
            </div>
          </div>
          <center>
            <div className="form-row submit-btn">
              <div className="input-data">
                <div className="inner"></div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Complaint;
