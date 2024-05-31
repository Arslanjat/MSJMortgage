import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import PrivateMoney from '../../components/PrivateMoney'


const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Private Money"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "Our Product", url: "/product" },
          ]}
        />
        <PrivateMoney />
      </MainLayout>
    );
}

export default Blogs;