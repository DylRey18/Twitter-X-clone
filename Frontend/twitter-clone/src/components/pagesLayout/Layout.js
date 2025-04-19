//This is a skeleton page to fill in the other layouts later
import React from 'react'
import SidebarLeft from './SidebarLeft'
import SidebarRight from './SidebarRight'

function Layout({children}) {
  return (
    <> 
    <SidebarLeft />
    <main>
      {/* The switchable content in the middle goes here */}
      {children}
    </main>
    <SidebarRight />
    </>
  )
}

export default Layout