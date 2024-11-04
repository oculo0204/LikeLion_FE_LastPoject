import React from 'react'
import logoDemo from '../../assets/img/common/edunet_newlogo.png'
import srchBtn from '../../assets/img/common/btn_search.png'

const Header = () => {
  return (
    <div className='header-wrap'>
      <div className='logo-wrap'><img className='logo-demo' src={logoDemo} alt="logo" /></div>
      <div className='center'>
        <div className='input-srch'>
          <form action="">
              <input type="" placeholder='검색어를 입력해 보세요.' className='srch-input'></input>
              <button className='srch-btn'><img src={srchBtn} alt="" /></button>      
          </form>
        </div>
        <div className="keywords">
          <div className='key'>독도</div>
          <div className='key'>학교자율시간</div>
          <div className='key'>체험학습</div>
          <div className='key'>디지털</div>
          <div className='key'>한국사</div>
          <div className='key sec'>공개수업</div>
          <div className='key last'>임진왜란</div>
          <div className='key thou'>대류</div>
          <div className='key thou'>경찰</div>
          <div className='key thou'>지하</div>
        </div>
      </div>
      <div className='ser-wrap'>
        <button className='guide-pop'>이용안내</button>
        <button className='service-pop'>고객센터</button>
      </div>
    </div>
  )
}

export default Header
