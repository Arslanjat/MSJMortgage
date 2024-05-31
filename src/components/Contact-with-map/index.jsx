import React, { useState } from 'react';
import appData from '../../data/app.json';

const ContactWithMap = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});


      const data = await response.json();

      if (data.success) {
        console.log('Data saved successfully.');
        // You can add any additional logic here, such as showing a success message.
      } else {
        console.error('Failed to save data.');
        // Handle the error appropriately.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: '#faf8f5' }}>
      <div className="row">
        <div className="col-lg-6 map-box">
          <iframe src={appData.mapIframe}></iframe>
        </div>
        <div className="col-lg-6 form">
          <form id="contact-form" method="post" onSubmit={handleSubmit}>
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                  value={formData.message}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;