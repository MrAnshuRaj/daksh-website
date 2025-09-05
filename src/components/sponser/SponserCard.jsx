import React, { useMemo } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Data = [
  { id: "1", title: "Platinum Sponsor", description: "Skoda", imgUrl: "/sponser/skoda.webp" },
  { id: "6", title: "Gold Sponsor", description: "Brand 6", imgUrl: "/sponser/img6.webp" },
  { id: "7", title: "Gold Sponsor", description: "Brand 7", imgUrl: "/sponser/img7.webp" },
  { id: "8", title: "Silver Sponsor", description: "Brand 8", imgUrl: "/sponser/img8.webp" },
  { id: "9", title: "Silver Sponsor", description: "Brand 9", imgUrl: "/sponser/img9.webp" },
  { id: "10", title: "Sponsor", description: "Brand 10", imgUrl: "/sponser/img10.webp" },
  { id: "11", title: "Sponsor", description: "Brand 11", imgUrl: "/sponser/img11.webp" },
];
function SponserCard() {
  const settings = useMemo(() => ({
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  }), []);

  return (
    <div className="w-full mx-auto px-0">
      <Slider {...settings}>
        {Data.map(({ id, title, description, imgUrl }) => (
          <div key={id} className="p-2">
            <div className="flex flex-col items-center justify-center py-5 px-1
              rounded-2xl shadow-lg border border-lime-600/50 bg-gradient-to-b from-green-900/60 to-green-900/10
              w-full max-w-full"
            >
              <img
                src={imgUrl}
                alt={description}
                className="w-32 h-24 object-contain mb-2"
                loading="lazy"
              />
              <h4 className="text-lime-400 font-semibold text-lg mb-1 text-center">{title}</h4>
              <p className="text-white text-sm text-center">{description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SponserCard;
