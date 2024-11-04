import React, { useState, useRef, useEffect } from 'react';
import SignupIcon from '../../assets/img/common/ico_join.png';
import SignInIcon from '../../assets/img/common/ico_login.png';
import mypage from '../../assets/img/common/ico_gnb_mypage.png';
import SitemapArrow from '../../assets/img/common/sitemap_arrow_r.png';
import gana from '../../assets/img/common/ico_tap_check.png';

const Nav = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSortgana, setSortgana] = useState(false);
  const [isLectureOpen, setIsLectureOpen] = useState(false);
  const lectureRef = useRef(null);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const sortingAsGana = () => {
    setSortgana(true);
  };

  const sortingAsMenu = () => {
    setSortgana(false);
  };

  const handleToggleLecture = () => {
    setIsLectureOpen(!isLectureOpen);
  };

  const handleClickOutside = (event) => {
    if (
      lectureRef.current &&
      !lectureRef.current.contains(event.target) &&
      !event.target.closest('.site-map-btn')
    ) {
      setIsLectureOpen(false);
      setIsPopupOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className='nav-wrap'>
      <a href="#" className='site-map-btn' onClick={togglePopup}>
        <span></span>
        <span></span>
        <span></span>
      </a>
      <div className="list">
        <a href="#" className="text" onClick={handleToggleLecture}>수업</a>
        <a href="#" className='text'>연구</a>
        <a href="#" className='text'>교육정책</a>
        <a href="#" className='text'>창의적 체험활동</a>
        <a href="#" className='text'>안내</a>
        <a href="#" className='text'><img src={mypage} alt="" />나의 공간</a>
      </div>
       {/* Lecture Dropdown */}
       {isLectureOpen && (
        <div className="dropdown-content" ref={lectureRef}>
          <div className="menu-header">
            <img src="icon.png" alt="수업 아이콘" />
            <h2>수업</h2>
            <p>초등학교와 중학교의 교과 및 범교과 자료를 제공합니다.</p>
          </div>
          <ul className="menu-list">
            <li>수업·연구자료</li>
            <li>주제별 학습자료</li>
            <li>디지털교과서</li>
            <li>e학습터</li>
            <li>짜잔수학</li>
            <li>잇다</li>
            <li>위두랑</li>
            <li>선생님들의 나눔공간</li>
            <li>글꼴·이미지·음악·PPT</li>
          </ul>
        </div>
      )}
      <div className="sign-wrp">
        <button className='signup'><img src={SignupIcon} alt="회원가입 아이콘" /><p>회원가입</p></button>  
        <button className='signin'><img src={SignInIcon} alt="로그인 아이콘" /><p>로그인</p></button>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
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
                <div>
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
                <div>
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
