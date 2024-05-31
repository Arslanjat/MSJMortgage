import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import PurchaseDetails from '../../components/PurchaseDetails'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Quote"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "Quote", url: "/quote" },
          ]}
        />
        <PurchaseDetails />
      </MainLayout>
    );
}

export default Blogs;