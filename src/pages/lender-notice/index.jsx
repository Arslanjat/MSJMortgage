import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Poster1 from '../../components/housingnotice'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Equal Housing Lender Notice"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "lender Notice", url: "/lender-notice" },
      ]}
    />
    <Poster1/>
    <MainLayout/>
    </>
  )
}
