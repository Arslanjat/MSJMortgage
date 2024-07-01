import React, { useState } from "react";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Team1 from "../../components/Team1";
import Reviews from "../../components/Reviews";
import Complaint from "../../components/Complaint";

const Home1 = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleTogglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);

  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      <Services1 />
      <Team1 />
      <Reviews />
      <Complaint isOpen={isPopupOpen} />
      <div className="main-complaint">
        <button onClick={handleTogglePopup} className={`popup-button ${isPopupOpen ? 'closed' : 'open'}`}>
          {isPopupOpen ? 'Need help' : 'Need help'}
          <span className="image-container">
            <img className="image-complaint" src="assets/img/close.svg" alt="toggle" />
          </span>
        </button>
      </div>
    </LightLayout>
  );
};

export default Home1;
