import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs } from "swiper";
import { v4 as uuidv4 } from "uuid";

const images = [
  "https://images.unsplash.com/photo-1681483476977-322d81693e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1681797485212-7491d3f3619c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
  "https://images.unsplash.com/photo-1681809696628-05af14d27c84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1908&q=80",
];
const CampaignMainImage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      {images.length > 0 ? (
        <>
          <Swiper
            loop={true}
            spaceBetween={20}
            grabCursor={true}
            navigation={{
              nextEl: navigationNextRef.current,
              prevEl: navigationPrevRef.current,
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            modules={[Navigation, Thumbs]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="w-full"
          >
            {images &&
              images.map((item) => (
                <SwiperSlide key={uuidv4()} className="w-full">
                  <img
                    src={item}
                    alt=""
                    className="rounded-[25px] h-[400px] w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            {/* <div
              ref={navigationPrevRef}
              className="absolute z-10 text-white cursor-pointer left-5 bottom-3"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </span>
            </div>
            <div
              ref={navigationNextRef}
              className="absolute z-10 text-white cursor-pointer right-5 bottom-3"
            >
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </span>
            </div> */}
          </Swiper>
          <Swiper
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            onSwiper={(swiper) => {
              setThumbsSwiper(swiper);
            }}
            className="product-pictures-thumbs"
          >
            {images &&
              images.map((item) => (
                <SwiperSlide key={uuidv4()}>
                  <div className="relative w-full h-0 pb-[70%] cursor-pointer select-none">
                    <img
                      src={item}
                      alt=""
                      className="absolute inset-0 w-full h-full rounded-md"
                    />
                  </div>
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
