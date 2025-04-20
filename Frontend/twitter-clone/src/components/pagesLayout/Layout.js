//This is a skeleton page to fill in the other layouts later
import React from 'react'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

function Layout({children}) {
  return (
    <div className="layout-container">
    <SidebarLeft />
    <main>
      {/* The switchable content in the middle goes here */}
      {children}
    </main>
    <SidebarRight />
    </div>
  )
}

export default Layout