import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Team2 from '../../components/Team2'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
    return (
      <MainLayout>
        <PageHeader
          title="Our Teams"
          fullPath={[
            { id: 1, name: "home", url: "/" },
            { id: 2, name: "Our Team", url: "/team" },
          ]}
        />
        <Team2 />
      </MainLayout>
    );
}

export default Blogs;