/* eslint-disable @next/next/no-img-element */
import React from "react";
import Services1 from "../../components/Services1";
import IntroWithHorizontal from "../../components/Intro-with-horizontal";
import LightLayout from "../../layouts/light";
import Team1 from "../../components/Team1";
import Reviews from "../../components/Reviews";

const Home1 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout footerClass={"mt-30"}>
      <IntroWithHorizontal />
      {/* <AboutUs1 /> */}
      <Services1 />
      {/* <Portfolio1 /> */}
      {/* <SkillsCircle /> */}
      {/* <Testimonials /> */}
      <Team1 />
      {/* <Blogs1 /> */}
      <Reviews/>
      {/* <Contact /> */}
    </LightLayout>
  );
};

export default Home1;
