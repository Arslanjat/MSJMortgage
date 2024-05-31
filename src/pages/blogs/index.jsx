import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Blogs2 from '../../components/Blogs2'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Blogs"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "Blog", url: "/blogs" },
          ]}
        />
        <Blogs2/>
      </MainLayout>
    );
}

export default Blogs;