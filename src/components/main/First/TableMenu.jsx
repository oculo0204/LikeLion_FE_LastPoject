import React, { useState } from 'react';
import ItaBtn01 from '../../../assets/img/online-btn/online_m1.png';
import ItaBtn02 from '../../../assets/img/online-btn/online_m2.png';
import ItaBtn03 from '../../../assets/img/online-btn/online_m3.png';
import ItaBtn04 from '../../../assets/img/online-btn/online_m4.png';
import ItaBtn05 from '../../../assets/img/online-btn/online_m5.png';
import ItaBtn06 from '../../../assets/img/online-btn/online_m6.png';
import ItaBtn07 from '../../../assets/img/online-btn/online_m7.png';
import edunetLogo from '../../../assets/img/main/ico_edunet_symbol.png'; 

const TableMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleButtonClick = (index) => {
    setActiveIndex(index); // 클릭한 버튼의 인덱스를 상태로 저장
  };

  const buttons = [
    ItaBtn01,
    ItaBtn02,
    ItaBtn03,
    ItaBtn04,
    ItaBtn05,
    ItaBtn06,
    ItaBtn07,
  ];

  // 각 버튼에 해당하는 텍스트 배열
  const buttonTexts = [
    "잇다",
    "e학습터",
    "위두랑",
    "디지털교과서",
    "지식샘터",
    "모두의 한국어",
    "독서로 야"
  ];

  return (
    <div className='TableMenu-wrap'>
      <div className='online-wrap'>
        <div className='online-menu'>
          <div className="balloon">
            <img src={edunetLogo} alt="에듀넷 로고" />
            <strong><b>에듀넷</b>과 함께하는 </strong><p>온라인 학습서비스</p>
          </div>
        </div>
        <div className='ita-wrap'>
          {buttons.map((imgSrc, index) => (
            <div key={index} className='button-container'>
              <button 
                className='ita-btn' 
                onClick={() => handleButtonClick(index)} 
                style={{ backgroundColor: activeIndex === index ? '#2369c0' : 'white' }}
              >
                <img 
                  className={activeIndex === index ? "on" : ""} 
                  src={imgSrc} 
                  alt="" 
                />
              </button>
              <h1 className='ita-text'>
                {buttonTexts[index]} {/* 버튼에 해당하는 텍스트를 표시 */}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableMenu;
