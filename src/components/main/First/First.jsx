import React from 'react'
import VisualBanner from './VisualBanner'
import TableMenu from './TableMenu'
import LikeMenu from './LikeMenu'

const First = () => {
  return (
    <div className='first-wrap'>
      <div className='bk-first'></div>
    <VisualBanner/>
    <TableMenu/>
    <LikeMenu/>
    
    </div>
  )
}

export default First
