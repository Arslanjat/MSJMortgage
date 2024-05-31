import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Portfolio from '../../components/Portfolio'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Portfolio"
          fullPath={[
            { id: 2, name: "home", url: "/" },
            { id: 3, name: "Our Product", url: "/product" },
          ]}
        />
        <Portfolio />
      </MainLayout>
    );
}

export default Blogs;