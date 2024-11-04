import React, { useState, ComponentProps} from 'react';
import SignupIcon from '../../assets/img/common/ico_join.png';
import SignInIcon from '../../assets/img/common/ico_login.png';
import mypage from '../../assets/img/common/ico_gnb_mypage.png';
import SitemapArrow from '../../assets/img/common/sitemap_arrow_r.png';
import gana from '../../assets/img/common/ico_tap_check.png';
import lecture from '../../assets/img/menu/menu01.png';

const Nav = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSortgana, setSortgana] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const sortingAsGana = () => {
    setSortgana(true);
  };

  const sortingAsMenu = () => {
    setSortgana(false);
  };


  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className='nav-wrap'>
      <a href="#" className='site-map-btn' onClick={togglePopup}>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div className="list">
        <a href="#" className="text" onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>수업
        </a>
        <a href="#" className='text'>연구</a>
        <a href="#" className='text'>교육정책</a>
        <a href="#" className='text'>창의적 체험활동</a>
        <a href="#" className='text'>안내</a>
        <a href="#" className='text'><img className="my-img" src={mypage} alt="" />나의 공간</a>
      </div>
      <div className='drop-menu'>
      {isDropdownVisible &&(
          <div className="dropdown-content">
          <div className="menu-header">
            <img className="drop-img" src={lecture} />
            <div className='drop-hd'>
              <div className="ani-line"></div>
            <h2 className='drop-h2'>수업</h2>
            <p className='drop-p'>초등학교와 중학교의 교과 및 범교과 자료를 제공합니다.</p>
            </div>
          </div>
          <ul className="menu-list">
            <li><h2 href="#" className="purple-text">수업·연구자료</h2></li>
            <li><h2 href="#" className="purple-text">주제별 학습자료</h2>
                
            </li>
            <li><h2 href="#" className="purple-text">디지털교과서</h2>
                
            </li>
            <li><h2 href="#" className="purple-text">e학습터</h2></li>
            <li><h2 href="#" className="purple-text">짜잔수학</h2></li>
            <li><h2 href="#" className="purple-text">잇다</h2></li>
            <li><h2 href="#" className="purple-text">위두랑</h2></li>
            <li><h2 href="#" className="purple-text">선생님들의 나눔공간</h2></li>
            <li><h2 href="#" className="purple-text">글꼴·이미지·음악·PPT</h2>

            </li>
          </ul>
          <div className='a-tags'>
          <div className="content"><a href="#">초등학교</a><a href="#">중학교</a></div>
          <div className="content"><a href="#">사회</a>
              <a href="#">과학</a>
              <a href="#">미술</a>
              <a href="#">음악</a>
              <a href="#">체육</a>
              <a href="#">기술·가정·실과</a>
              <a href="#">범교과 학습 주제</a>
          </div>
          <div className="content">
              <a href="#">서비스 이용안내</a>
              <a href="#">알림사항</a>
              <a href="#">교원연수</a>
              <a href="#">수업사례 동영상</a>
              <a href="#">교수·학습 과정안</a>
              <a href="#">연구·선도학교 보고서</a>
              <a href="#">수업연구회자료</a>
              <a href="#">실감형 콘텐츠 활용자료</a>
              <a href="#">건강하게 활용하기</a>
              <a href="#">자주하는 질문</a>
          </div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content"></div>
          <div className="content">
              <a href="#">글꼴</a>
              <a href="#">이미지(일러스트)</a>
              <a href="#">이미지(아이콘)</a>
              <a href="#">음악(배경음악)</a>
              <a href="#">음악(효과음)</a>
              <a href="#">PPT템플릿</a>
          </div>

          </div>


        </div>
        ) }
      </div>
      
      <div className="sign-wrp">
        <button className='signup'><img src={SignupIcon} alt="회원가입 아이콘" /><p>회원가입</p></button>  
        <button className='signin'><img src={SignInIcon} alt="로그인 아이콘" /><p>로그인</p></button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
         
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <div className='foot-bk'></div>
            <div className="popup-header">
              <h2>전체메뉴 보기</h2>
              <div className="menu-options">
                <button className={`gana`} onClick={sortingAsGana}>
                  <div className='img-wrap'>
                  <img className={`${isSortgana ? 'on' : 'gana-img'}`} src={gana} alt="가나다순" />
                  </div>
                  가나다순</button>
                <button  className={`gana`}  onClick={sortingAsMenu}>
                <div className='img-wrap'>
                  <img className={`  ${!isSortgana ? 'on' : 'gana-img'}`} src={gana} alt="가나다순" />
                  </div>
                  메뉴별</button>
              </div>
              <button className="close-btn" onClick={togglePopup}>X</button>
            </div>
            <div className="popup-body">
              <div className='sorting-menu'>
                <div className="menu-section">
                  <h3 className='popup-bold'>수업</h3>
                  <div className='text-list'>
                    <a href="#" className='popup-text'>수업·연구자료</a>
                    <a href="#" className='popup-text'>주제별 학습자료</a>
                    <a href="#" className='popup-text'>디지털교과서</a>
                    <a href="#" className='popup-text'>연합스터디</a>
                    <a href="#" className='popup-text'>짜잔수학</a>
                    <a href="#" className='popup-text'>잇다</a>
                    <a href="#" className='popup-text'>위두랑</a>
                    <a href="#" className='popup-text'>선생님들의 나눔공간</a>
                    <a href="#" className='popup-text'>글꼴·이미지·음악·PPT</a>
                  </div>
                </div>
                <div className="menu-section">
                  <h3 className='popup-bold'>연구</h3>
                  <div className='text-list'>
                    <a href="#" className='popup-text'>연구대회</a>
                    <a href="#" className='popup-text'>연구학교</a>
                    <a href="#" className='popup-text'>수석교사 수업나눔</a>
                    <a href="#" className='popup-text'>우수수업동영상</a>
                    <a href="#" className='popup-text'>교원연수</a>
                    <a href="#" className='popup-text'>온라인 콘텐츠 활용 교과서</a>
                    <a href="#" className='popup-text'>지식샘터</a>
                  </div>
                </div>
                <div className="menu-section">
                  <h3 className='popup-bold'>교육정책</h3>
                  <div className='text-list'>
                    <a href="#" className='popup-text'>교육과정</a>
                    <a href="#" className='popup-text'>학생평가</a>
                    <a href="#" className='popup-text'>자유학기제</a>
                    <a href="#" className='popup-text'>NCS기반 교육과정</a>
                    <a href="#" className='popup-text'>고교학점제</a>
                    <a href="#" className='popup-text'>AI·SW교육</a>
                    <a href="#" className='popup-text'>통합원문수집시스템</a>
                  </div>
                </div>
                <div className="menu-section">
                  <h3 className='popup-bold'>창의적체험활동</h3>
                  <div className='text-list'>
                    <a href="#" className='popup-text'>인성·진로·다문화</a>
                    <a href="#" className='popup-text'>주제별 사진·영상 자료</a>
                    <a href="#" className='popup-text'>사서 추천도서</a>
                    <a href="#" className='popup-text'>온라인 체험학습</a>
                    <a href="#" className='popup-text'>체험학습지도 방법특급</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-sections">
              <div className="footer-section">
                <h3 className='popup-bold'>안내</h3>
                <div className='foot-list'>
                  <a href="#" className='popup-text'>에듀넷·티-클리어란?</a>
                  <a href="#" className='popup-text'>알림정보</a>
                  <a href="#" className='popup-text'>최신교육동향</a>
                  <a href="#" className='popup-text'>기관소개</a>
                  <a href="#" className='popup-text'>관련사이트</a>
                </div>
              </div>

              <div className="footer-section">
                <button className='tomypage'>
                  <h3 className='popup-bold'>나의 공간</h3>
                  <img src={SitemapArrow } alt="" />
                </button>
              </div>

              <div className="footer-section">
                <button className='tomypage'>
                  <h3>고객센터</h3>
                  <img src={SitemapArrow } alt="" />
                </button>
              </div>

              <div className="footer-section">
                <h3 className='popup-bold'>기타</h3>
                <div className='foot-list'>
                  <a href="#" className='popup-text'>원격지원</a>
                  <a href="#" className='popup-text'>검색 API</a>
                  <a href="#" className='popup-text'>페이스북 페이지</a>
                  <a href="#" className='popup-text'>에듀넷 네이버TV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
