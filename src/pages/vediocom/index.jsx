import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import Vediocom from '../../components/videocom'

export default function Index() {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
  return (
    <>
    
    <PageHeader
      title="Video"
      fullPath={[
        { id: 1, name: "home", url: "/" },
        { id: 2, name: "video", url: "/vediocom" },
      ]}
    />
    <div className="container">
    <Vediocom />
    </div>
    <MainLayout/>
    </>
  )
}
