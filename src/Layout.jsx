import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/> 
    <Footer/>
    </>
  )
}

export default Layout

//Ye jo Outlet hai vo help krega...jese hume header aur footer to har page me same hi rkhna ha...sirf beech ka change krna ha...to usme kaam aayega.