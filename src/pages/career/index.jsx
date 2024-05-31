import React from "react";
import PageHeader from "../../components/Page-header";
import Career from "../../components/Career";
import MainLayout from "../../layouts/main";

const Contact = () => {
   React.useEffect(() => {
   }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Career"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Career", url: "/career" },
        ]}
      />
      <section className="contact">
        <Career />
      </section>
    </MainLayout>
  );
};

export default Contact;
