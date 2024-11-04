import React, { useState } from 'react';
import map from '../../../assets/img/main/visual_netmap.png';
import bangkok from '../../../assets/img/main/logo_netmap.png';
import bangarr from '../../../assets/img/main/ico_arr_r.png';

const Third = () => {
    const [activeButton, setActiveButton] = useState(null); // 선택된 버튼 상태

    const handleButtonClick = (button) => {
        setActiveButton(button); // 선택된 버튼을 업데이트
    };

    const places = [
        {
          id: 1729,
          name: "월봉서원",
          pay: "무료",
          address: "(62200) 광주광역시 광산구 광곡길 133(광산동) 월봉서원",
          tel: "062-960-8255",
        },
        {
          id: 1728,
          name: "LG디스커버리랩",
          pay: "무료",
          address: "(07789) 서울특별시 강서구 마곡중앙로 136(마곡동) LG디스커버리랩 서울",
          tel: "--",
        },
        {
          id: 1722,
          name: "동북아역사재단 독도체험관",
          pay: "무료",
          address: "(07305) 서울특별시 영등포구 영중로 15(영등포동4가) 지하 2층 독도체험관",
          tel: "02-2068-6101",
        },
        {
          id: 1716,
          name: "KSPO 스포츠가치센터",
          pay: "무료",
          address: "(52848) 경상남도 진주시 내동면 삼계로 360 KSPO 스포츠가치센터",
          tel: "055-790-9379",
        },
        {
          id: 1719,
          name: "민주화운동기념공원",
          pay: "무료",
          address: "(17406) 경기도 이천시 모가면 공원로 30 민주화운동기념공원",
          tel: "031-8011-9713",
        },
    ];

    return (
        <div className='Third-wrap'>
            <div className="left-wrap">
                <div className='map-ab'>
                    <img src={map} alt="" />
                </div>
                <div className='left-hd'>
                    <h2>함께 만드는 체험학습지도</h2>
                    <h1>체험학습장소</h1>
                </div>
                <div className='right-hd'>
                    <img src={bangkok} alt="" />
                </div>
                <button className='tobangkok'>
                    <h2>체험학습<b> 등록하러가기</b></h2> <img src={bangarr} alt="" />
                </button>
            </div>
            <div className="right-wrap">
                <div className='buttons-wrap'>
                    <button
                        className={activeButton === 'recent' ? 'on' : ''}
                        onClick={() => handleButtonClick('recent')}
                    >
                        최근 등록된 장소
                    </button>
                    <button
                        className={activeButton === 'rating' ? 'on' : ''}
                        onClick={() => handleButtonClick('rating')}
                    >
                        별점/후기 많은 장소
                    </button>
                    <button
                        className={activeButton === 'recommend' ? 'on' : ''}
                        onClick={() => handleButtonClick('recommend')}
                    >
                        추천 많은 장소
                    </button>
                </div>
                <ul className="j-netmap_list">
                    {places.map((place) => (
                        <li key={place.id}>
                            <a
                                href={`https://netmap.edunet.net/netmap/map.do?in_div=edunet&placeIdx=${place.id}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <dl>
                                    <dt>
                                        <strong className="title">{place.name}</strong>
                                        <span className="pay">{place.pay}</span>
                                    </dt>
                                    <dd className="adress">{place.address}</dd>
                                    <dd className="tel">{place.tel}</dd>
                                </dl>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Third;
