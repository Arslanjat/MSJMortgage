import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProcessPage from "../../components/procespage";

export default function Index() {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <>
      <PageHeader
        title="Mortgage Process"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Process", url: "/process" },
        ]}
      />
      <div className="container mt-30">
        <ProcessPage />
      </div>
      <MainLayout />
    </>
  );
}

