import React from 'react'
import Header from '../section/Header'
import Nav from '../section/Nav'
import VisualBanner from './VisualBanner'

const Main = () => {
  return (
    <div className='main-wrap'>
      <Header/>
      <Nav/>
      <VisualBanner/>
    </div>
  )
}

export default Main
