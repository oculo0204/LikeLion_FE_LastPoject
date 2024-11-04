import React from 'react'
import Header from '../section/Header'
import Nav from '../section/Nav'
import VisualBanner from './VisualBanner'
import TableMenu from './TableMenu'

const Main = () => {
  return (
    <div className='main-wrap'>
      <Header/>
      <Nav/>
      <VisualBanner/>
      <TableMenu/>
    </div>
  )
}

export default Main
