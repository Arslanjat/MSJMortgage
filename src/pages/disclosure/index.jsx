import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Disclosure from '../../components/Disclosure'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Disclosure"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Disclosure", url: "/disclosure" },
      ]}
    />
    
      <Disclosure/>
    <MainLayout/>
    </>
  )
}
