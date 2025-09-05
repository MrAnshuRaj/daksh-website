import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import './Gallery2.css';

const GalleryCard = ({ item }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {item.map((gallerySet, idx) => (
        <div
          key={idx}
          className="bg-black bg-opacity-25 rounded-3xl border border-lime-700 backdrop-blur-md p-3 shadow-lg shadow-lime-900"
          style={{ willChange: 'transform' }}
        >
          <Swiper
            modules={[EffectCube, Pagination, Autoplay]}
            effect="cube"
            grabCursor
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.9,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            className="rounded-3xl"
          >
            {gallerySet.map((img, i) => (
              <SwiperSlide key={i} className="bg-transparent">
                <img
                  src={img.imgUrl}
                  alt={`Gallery image ${i + 1}`}
                  loading="lazy"
                  className="w-full object-cover rounded-3xl shadow-lg shadow-lime-800 max-h-60"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default GalleryCard;
