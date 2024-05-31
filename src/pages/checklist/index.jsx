import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Check from '../../components/checklist'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Mortgage Check List"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "Check List", url: "/checklist" },
      ]}
    />
    <div className="container">
    <Check/>
    </div>
    <MainLayout/>
    </>
  )
}
