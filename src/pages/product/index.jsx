import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Services1 from "../../components/Services1";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Our Product"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "our product", url: "/product" },
        ]}
      />
      {/* <AboutUs4 /> */}
      {/* <Services3 bigTitle grid /> */}
      {/* <Testimonials1 bigTitle /> */}
      <Services1/>
      {/* <Skills2 /> */}
    </MainLayout>
  );
};

export default About;
