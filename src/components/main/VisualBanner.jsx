import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider01 from '../../assets/img/main/swiper/2A04E60F-412E-C93E-C6F0-927B54655A66.png';
import Slider02 from '../../assets/img/main/swiper/2D97A1BC-92AA-C543-A8E3-DF996DC5324C.png';
import Slider03 from '../../assets/img/main/swiper/5AF638FD-2BF2-40CF-4345-87FDFF78C30C.png';
import Slider04 from '../../assets/img/main/swiper/B9EDA436-EEAB-00A6-E148-ED92B9FE5AA0.png';
import Slider05 from '../../assets/img/main/swiper/855D1C24-D83F-DAAC-EDB7-7F1FCB431CA1.png';

const VisualBanner = () => {
  return (
    <div className='visual-banner-wrap'>
      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        scrollbar={{
          hide: false,
          draggable: true,
        }}
        pagination={{
          type: 'fraction', clickable:true,
        }}
        className='slide-wrap'
        modules={[Scrollbar, Autoplay, Pagination]}
      >
        <SwiperSlide className='slide-content'>
          <button><img src={Slider01} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider02} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider03} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider04} alt="" /></button>
        </SwiperSlide>
        <SwiperSlide className='slide-content'>
          <button><img src={Slider05} alt="" /></button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default VisualBanner;
