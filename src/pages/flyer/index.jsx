import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Flyer from '../../components/Flyer'
export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Flyers"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Flyers", url: "/flyer" },
      ]}
    />
    <div className="container">
    <Flyer/>
    </div>
    <MainLayout/>
    </>
  )
}
