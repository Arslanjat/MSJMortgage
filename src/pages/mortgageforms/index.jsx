import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Formpage from '../../components/Form'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Forms"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Mortgage Forms", url: "/mortgageforms" },
      ]}
    />
    
    <Formpage/>
    <MainLayout/>
    
    </>
  
  )
}
