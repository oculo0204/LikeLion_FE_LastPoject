import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider01 from '../../../assets/img/main/noticeSlider/01CA5088-FEAA-E87A-D285-2544A185C933.png';
import Slider02 from '../../../assets/img/main/noticeSlider/29C39FDD-07A7-09CE-8EDE-6E6CAC083675.png';
import Slider03 from '../../../assets/img/main/noticeSlider/88C21458-0237-9FEC-9D83-729D268B7821.png';
import Slider04 from '../../../assets/img/main/noticeSlider/9B6A2540-4BD7-AD02-FA14-816FE1D04BD1.png';
import Slider05 from '../../../assets/img/main/noticeSlider/F2A8BC80-8541-348D-01BE-286123D5E83D.png';

const Notice = () => {
  const [activeTab, setActiveTab] = useState('ongoing'); // 기본 상태: 'ongoing'

  return (
    <div className="notice-wrap">
      <div className="left-wrap">
        <h1>똑똑알림</h1>
        <Swiper
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          className="slide-wrap"
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide className="slide-content">
            <button><img src={Slider01} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide className="slide-content">
            <button><img src={Slider02} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide className="slide-content">
            <button><img src={Slider03} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide className="slide-content">
            <button><img src={Slider04} alt="" /></button>
          </SwiperSlide>
          <SwiperSlide className="slide-content">
            <button><img src={Slider05} alt="" /></button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="right-wrap">
        <div className="select-com">
          <button
            className={`ongoing-com ${activeTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => setActiveTab('ongoing')}
          >
            <p>공지사항</p>
          </button>
          <button
            className={`all-com ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <p>최신교육동향</p>
          </button>
          <div className={`slider-bg ${activeTab === 'all' ? 'move-right' : 'move-left'}`}></div>
        </div>
        <div className="right-hd">
          <div className='main-notice-wrp'>
            <div className='date'>
              <h1>05</h1>
              <span>2024.11</span>
            </div>
          <div className='main-notice'>
              <span className="vAlign"></span>
              <a href="/nedu/boardsvc/selectBoardForm.do?boardNum=1&amp;menu_id=7041&amp;catNum=1&amp;atclNum=72574" title="글 내용보기">
                <span className="title">[안내] 2024년 모두의 한국어 한글날 맞이 참여 이벤트 2종</span>
                <span className="info">안녕하세요, 한국교육학술정보원(KERIS)입니다. 다문화학생 한국어 교육 지원 서비스「모두의 한국어」에서 제578돌 한글날을 맞이하여 교사 및 학생 회원을 대상으로「모두의</span>
              </a>
          </div>
          </div>
        
          <ul className="j-board_list1" style={{ display: 'block' }}>
            
            <li>
              <span className="vAlign"></span>
              <a href="/nedu/eventsvc/selectEventNewsData.do?menu_id=7051&amp;banner_seq=56" title="글 내용보기">
                <span className="title">[만족도조사] 여러분의 목소리로 더 나은 에듀넷·티-클리어와 함께 해주세요!</span>
                <span className="info noDisplay"></span>
                <span className="date">2024<i>.</i><span>-</span>11<strong><span>-</span>04</strong></span>
              </a>
            </li>
            <li>
              <span className="vAlign"></span>
              <a href="/nedu/boardsvc/selectBoardForm.do?boardNum=1&amp;menu_id=7041&amp;catNum=1&amp;atclNum=72514" title="글 내용보기">
                <span className="title">[안내] 사이버폭력 예방교육 종합서비스 도란도란 신규개통</span>
                <span className="info noDisplay"></span>
                <span className="date">2024<i>.</i><span>-</span>10<strong><span>-</span>29</strong></span>
              </a>
            </li>
            <li>
              <span className="vAlign"></span>
              <a href="/nedu/eventsvc/selectEventNewsData.do?menu_id=7051&amp;banner_seq=54" title="글 내용보기">
                <span className="title">[이벤트] 교육디지털원패스 연동하고, 상품받자! (~11/10)</span>
                <span className="info noDisplay"></span>
                <span className="date">2024<i>.</i><span>-</span>10<strong><span>-</span>28</strong></span>
              </a>
            </li>
            <li>
              <span className="vAlign"></span>
              <a href="/nedu/boardsvc/selectBoardForm.do?boardNum=1&amp;menu_id=7041&amp;catNum=1&amp;atclNum=72454" title="글 내용보기">
                <span className="title">[안내] e학습터 교육용 콘텐츠 개발진 공모(~10.30)</span>
                <span className="info">내가 만든 콘텐츠로 널리 e학습터를 이롭게 하리라~ e.익.인.간의 뜻을 펼쳐주실 선생님을 찾습니다! e학습터에서는 현장 선생님들의 교수학습자료 제작 경험을 기반으로</span>
                <span className="date">2024<i>.</i><span>-</span>10<strong><span>-</span>23</strong></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Notice;
