import React, { useState } from 'react';

// 이미지 폴더에서 이미지 가져오기
const images = require.context('../../../assets/img/main/likemenu', false, /\.(png|jpe?g|svg)$/);

const texts = [
    "수업·연구자료",
    <span>선생님들의<br />나눔공간</span>,
    <span>주제별<br />학습자료</span>,
    <span>우수수업<br />동영상</span>,
    <span>주제별<br />사진·영상 자료</span>,
    <span>인성·진로<br />다문화</span>,
    "교육과정",
    <span>2022<br />개정 교육과정</span>,
    <span>2015<br />개정 교육과정</span>,
    "학생평가",
    "자유학기제",
    <span>NCS<br />기반 교육과정</span>,
    "고교학점제",
    "AI-SW 교육",
    <span>스마트교육<br />이해</span>,
    "연구학교",
    "연구대회",
    "교원연수",
    <span>에듀넷<br />소식</span>,
    <span>사서<br />추천도서</span>,
    <span>온라인 콘텐츠<br />활용 교과서</span>,
    <span>글꼴·이미지<br />·음악·PPT</span>,
    "온라인 체험학습",
    <span>체험학습지도<br />방방콕콕</span>,
    <span>수석교사<br />수업나눔</span>,
    <span>통합원문수집<br />시스템</span>
  ];

const LikeMenu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className='LikeMenu-wrap'>
      <div className='likeMenu-hd'>
        <h1>즐겨찾는 메뉴</h1>
      </div>
      <div className={`likeMenu-body ${open ? 'on' : ''}`}>
        {images.keys().map((imagePath, index) => (
          <div className='item-btn' key={index}>
            <img className="item-img" src={images(imagePath)} alt={`Item ${index + 1}`} />
            <h1 className='item-h1'>{texts[index]}</h1>
          </div>
        ))}
      </div>
      <button className='open-btn' onClick={handleOpen}>{open ? '더보기' : '접기'}</button>
    </div>
  );
}

export default LikeMenu;
