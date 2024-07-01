import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Conventional from '../../components/Conventional'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Conventional"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "Our Product", url: "/product" },
          ]}
        />
        
        <Conventional />
      </MainLayout>
    );
}

export default Blogs;