import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Lender from '../../components/lender'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Home Mortgage Disclosure Act Notice"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Act Notice", url: "/act-notice" },
      ]}
    />
    <Lender/>
    <MainLayout/>
    </>
  )
}