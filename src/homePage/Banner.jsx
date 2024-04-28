// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        style={{height:'60vh'}}
        className="mySwiper "
      >
        <SwiperSlide >
          <img
            className=" rounded-xl"
            src={"https://i.ibb.co/gttWtmm/slide1.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            className=" rounded-xl"
            src={"https://i.ibb.co/rcDnpnR/slide2.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide >
          <img
            className=" rounded-xl"
            src={"https://i.ibb.co/pfzc4St/slide3.jpg"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
