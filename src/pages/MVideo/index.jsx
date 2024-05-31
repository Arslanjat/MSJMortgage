import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Conventional"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Our Team", url: "/blogs" },
      ]}
    />
    <MainLayout/>
    </>
  )
}
