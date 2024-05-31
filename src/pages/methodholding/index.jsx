import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Holding  from '../../components/Commonpage'
export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Common Methods of Holding Title"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Method Holding", url: "/methodholding" },
      ]}
    />
    <div className="container mt-30">
    <Holding/>
    </div>
    <MainLayout/>
    </>
  )
}
