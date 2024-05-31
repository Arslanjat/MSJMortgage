import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Corsol from '../../components/details'


export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Credit"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Our Team", url: "/blogs" },
      ]}
    />
    <div className="container">
   <Corsol/>
    </div>
    <MainLayout/>
    </>
  )
}
