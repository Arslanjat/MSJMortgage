import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Government from '../../components/Government-list'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Government"
          fullPath={[
            { id: 2, name: "home", url: "/" },
            { id: 3, name: "Our Product", url: "/product" },
          ]}
        />
        <Government />
      </MainLayout>
    );
}

export default Blogs;