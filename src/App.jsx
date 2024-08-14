import React from 'react'
import Headers from './components/Header/header'

import Nav from './components/nav/nav'
import About from './components/About/About' 
import Experience from './components/expriences/exprences'
import Services from './components/Servies/servies'
import Porotfolio from './components/portofolio/portofolio'
import Tesetimonail from './components/tesetimonail/ Tesetimonail'
import Contact from './components/contact/Contact'
import Footer from './components/Footer/footer'

const App = () => {
  return (
   <>
   <Headers/>
   <Nav/>
   <About/>
   <Experience/>
   <Services/>
   <Porotfolio/>
 <Tesetimonail/>
 <Contact/>
 <Footer/>
   </>
  )
}

export default App