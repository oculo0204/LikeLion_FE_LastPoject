import React from 'react'
import logoDemo from '../../assets/img/common/edunet_newlogo.png'
import srchBtn from '../../assets/img/common/btn_search.png'

const Header = () => {
  return (
    <div className='header-wrap'>
      <div className='logo-wrap'><img className='logo-demo' src={logoDemo} alt="logo" /></div>
      <div className='input-srch'>
        <form action="">
            <input type=""></input>
            <button><img src={srchBtn} alt="" /></button>      
        </form>
      </div>
      <div className='guide-pop'></div>
      <div className='service-pop'></div>
    </div>
  )
}

export default Header
