import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Training from '../../components/Traininig'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Training"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Training", url: "/training" },
      ]}
    />
    <Training/>
    <MainLayout/>
    </>
  )
}