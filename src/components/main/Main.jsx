import React from 'react'
import Header from '../section/Header'
import Nav from '../section/Nav'

import First from './First/First'
import Second from './Second/Second'
import Footer from '../section/Footer'
import Third from './Third.jsx/Third'

const Main = () => {
  
  return (
    <div className='main-wrap'>
      <div className='main-hd'>
        <Header/>
        <Nav/>
      </div>
      <First/>
      <Second/>
      <Third/>
      <Footer/>
      
    </div>
  )
}

export default Main
