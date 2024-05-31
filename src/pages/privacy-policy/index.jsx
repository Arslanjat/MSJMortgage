import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Policy from '../../components/policy'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Privacy Policy"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Privacy Policy", url: "/privacy-policy" },
      ]}
    />
    <Policy/>
    <MainLayout/>
    </>
  )
}
