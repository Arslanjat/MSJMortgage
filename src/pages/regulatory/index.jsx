import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Regulatory from '../../components/Regulatory'
export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Regulatory & Acts"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Regulatoru & Acts", url: "/regulatory" },
      ]}
    />
    <div className="container">
    <Regulatory/>
    </div>
    <MainLayout/>
    </>
  )
}
