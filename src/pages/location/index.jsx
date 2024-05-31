import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Branch from "../../components/Location";

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title="Location"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Branches", url: "/location" },
        ]}
      />
      <Branch />
    </MainLayout>
  );
};

export default Blogs;