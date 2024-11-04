import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Slider01 from '../../../assets/img/main/pickSlider/1AFBB30A-3224-6255-3B5F-F6465C9E42DE.png';
import Slider02 from '../../../assets/img/main/pickSlider/7561D3A7-5713-E40D-F4A3-09403B109009.png';
import Slider03 from '../../../assets/img/main/pickSlider/B711FB88-DF7A-9949-9721-1473A22BC7A3.png';
import Slider04 from '../../../assets/img/main/pickSlider/DF454EDE-C2AD-6810-93B4-36278B7726C8.png';
import Slider05 from '../../../assets/img/main/pickSlider/FFF4D4D3-1CDB-BF22-AC7D-CF181DB659A8.png';

const PickSlider = () => {
  return (
    <div className='pickslider-wrap'>
      <div className='hd-pick-wrap'> 
      <h1 className='pick-hd'>에듀넷's Pick</h1>
      <div class="button-container">
            <h1 class="custom-button"><b>11월</b> 계기자료</h1>/
            <h2 class="custom-button" >MY PICK</h2>/
            <button class="custom-button">수업·연구 자료</button>/
            <button class="custom-button">선생님들의 나눔공간</button>/
            <button class="custom-button">주제별 학습자료</button>/
            <button class="custom-button">교육과정</button>
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        navigation={true}
        className='slide-wrap'
        modules={[Navigation]}
      >
        <SwiperSlide className='slide-content'>
          <button><img src={Slider01} alt="Slide 1" /></button>
          <h1>학생독립운동기념일</h1>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider02} alt="Slide 2" /></button>
          <h1>점자의 날</h1>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider03} alt="Slide 3" /></button>
          <h1>종의 기원</h1>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider04} alt="Slide 4" /></button>
          <h1>소방의 날</h1>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider05} alt="Slide 5" /></button>
          <h1>순국선열의 날</h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PickSlider;
