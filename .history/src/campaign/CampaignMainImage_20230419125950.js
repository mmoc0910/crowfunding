import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { Pagination, Thumbs } from "swiper";
import { v4 as uuidv4 } from "uuid";

const images = [
  "https://images.unsplash.com/photo-1681697390349-ce67ad7014e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1681483476977-322d81693e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1681797485212-7491d3f3619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1681809696628-05af14d27c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1908&q=80",
  "https://images.unsplash.com/photo-1681785886872-6599ee1ed228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1681057575594-4c14762a6520?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
];
const CampaignMainImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
      {images.length > 0 ? (
        <>
          <Swiper
            // loop={true}
            spaceBetween={10}
            grabCursor={true}
            // onSwiper={(swiper) => {
            //   //   setTimeout(() => {
            //   //     swiper.params.navigation.prevEl = navigationPrevRef.current;
            //   //     swiper.params.navigation.nextEl = navigationNextRef.current;
            //   //     swiper.navigation.destroy();
            //   //     swiper.navigation.init();
            //   //     swiper.navigation.update();
            //   //   });
            // }}
            modules={[Pagination, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="w-full"
          >
            {images.length >= 2 &&
              images.map((item) => (
                <SwiperSlide key={uuidv4()} className="w-full">
                  <img
                    src={item}
                    alt=""
                    className="rounded-[25px] h-[400px] w-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <Swiper
            // loop={true}
            spaceBetween={20}
            slidesPerView={4}
            modules={[Thumbs]}
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            className="w-full campaign-thumps"
          >
            {images &&
              images.map((item) => (
                <SwiperSlide key={uuidv4()} className="!w-[90px] !h-[70px]">
                  <img
                    src={item}
                    alt=""
                    className="object-cover w-full h-full rounded-md"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
        </>
      ) : (
        <div className="w-full max-h-[400px] rounded-lg bg-[#d7d7d6] h-full"></div>
      )}
    </>
  );
};

export default CampaignMainImage;
