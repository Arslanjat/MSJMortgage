import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import FAQ from '../../components/FAQ'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="FAQ's"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Faq's", url: "/faqs" },
      ]}
    />
    <div className="container mt-30">
      <FAQ/>
    </div>
    <MainLayout/>
    </>
  )
}
