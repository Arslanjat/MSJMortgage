import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import Register from "../../components/Register";
export default function Index() {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <PageHeader
        title="Sign Up Now"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Career", url: "/career" },
        ]}
      />
      <div className="container">
        <Register />
      </div>
      <MainLayout />
    </>
  );
}