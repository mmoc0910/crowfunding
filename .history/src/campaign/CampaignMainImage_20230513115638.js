import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import { Pagination, Thumbs } from "swiper";
import { v4 as uuidv4 } from "uuid";
import { defaultImg } from "constants/global";

const CampaignMainImage = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  return (
    <>
      {images.length > 0 ? (
        <>
          <Swiper
            loop={true}
            spaceBetween={10}
            grabCursor={true}
            pagination={true}
            modules={[Pagination, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="w-full campaign-view-image"
          >
            {images.length >= 2 &&
              images.map((item) => (
                <SwiperSlide key={uuidv4()} className="w-full">
                  <img
                    src={item}
                    alt=""
                    className="rounded-[15px] lg:rounded-[25px] h-[210px] md:h-[400px] w-full object-cover"
                  />
                </SwiperSlide>
              ))}
          </Swiper>
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            modules={[Thumbs]}
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            className="campaign-thumps"
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
        <img
          src={defaultImg}
          alt=""
          className="rounded-[15px] lg:rounded-[25px] h-[210px] md:h-[400px] w-full object-cover"
        ></img>
      )}
    </>
  );
};

export default CampaignMainImage;
