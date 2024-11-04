import React from 'react'
import footer from '../../assets/img/common_c/footer.png'
const Footer = () => {
  return (
    <div className='footer-wrap'>
      <div className='no'>
      <div id="fp-nav" className="fp-left" style={{ display: 'none' }}>
      <ul>
        <li>
          <a href="#Service" className="">
            <span className="fp-sr-only">에듀넷 서비스</span>
            <span></span>
          </a>
          <div className="fp-tooltip fp-left">에듀넷 서비스</div>
        </li>
        <li>
          <a href="#Pick" className="">
            <span className="fp-sr-only">에듀넷 ‘s Pick</span>
            <span></span>
          </a>
          <div className="fp-tooltip fp-left">에듀넷 ‘s Pick</div>
        </li>
        <li>
          <a href="#News" className="active">
            <span className="fp-sr-only">에듀넷 소식</span>
            <span></span>
          </a>
          <div className="fp-tooltip fp-left">에듀넷 소식</div>
        </li>
        <li>
          <a href="#undefined" className="">
            <span className="fp-sr-only">Section 4</span>
            <span></span>
          </a>
        </li>
      </ul>
    </div>
      </div>
    <img className="footer" src={footer} alt="" />
    </div>
  )
}

export default Footer
