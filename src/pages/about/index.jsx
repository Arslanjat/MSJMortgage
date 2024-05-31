import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "About Us", url: "/about" },
        ]}
      />
      {/* <AboutUs4 /> */}
      {/* <Services3 bigTitle grid /> */}
      {/* <Testimonials1 bigTitle /> */}
      <AboutUs4/>
      {/* <Skills2 /> */}
    </MainLayout>
  );
};

export default About;
