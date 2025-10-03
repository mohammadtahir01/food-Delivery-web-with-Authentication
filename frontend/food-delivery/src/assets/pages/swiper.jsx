import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../css/swiper.css';
//images
import img1 from "../images/nav3.jpg";
import img2 from "../images/nav4.jpg";
import img3 from "../images/nav5.jpg";
import img4 from "../images/nav6.jpg";
import img5 from "../images/nav7.jpg";
import img6 from "../images/nav8.jpg";
import img7 from "../images/nav9.jpg";
import img8 from "../images/nav10.jpg";
import img9 from "../images/nav11.jpg";


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function SwiperNavigation() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
