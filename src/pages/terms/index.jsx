import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Terms from '../../components/Terms'
import LightLayout from '../../layouts/main'
export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Terms"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Terms", url: "/terms" },
      ]}
    />
    <div className="container mt-30">
    <Terms/>
    </div>
    <MainLayout/>
    </>
  )
}
