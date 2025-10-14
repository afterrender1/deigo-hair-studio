import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Cut1 from "../assets/cut1.webp";
import Cut2 from "../assets/cut2.webp";
import Cut3 from "../assets/cut3.webp";
import Cut4 from "../assets/cut4.webp";
import Cut5 from "../assets/cut5.webp";
import Cut6 from "../assets/cut6.jpg";

export default function TypesOfCut() {
  const cuts = [
    { img: Cut1, title: "Fade Cut", step: "Blend sides gradually for clean fade." },
    { img: Cut2, title: "Taper Cut", step: "Taper the neckline & sideburns smoothly." },
    { img: Cut3, title: "Buzz Cut", step: "Use clippers evenly across all sides." },
    { img: Cut4, title: "Crew Cut", step: "Trim top slightly longer for structure." },
    { img: Cut5, title: "Pompadour", step: "Lift top hair upward with volume." },
    { img: Cut6, title: "Undercut", step: "Keep top long and sides short & sharp." },
  ];

  return (
    <section className="py-20  backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-sky-700 mb-4">
          Types of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-pink-500">Cuts</span>
        </h2>
        <p className="text-slate-700 mb-12 max-w-2xl mx-auto">
          Discover different haircut styles and learn the steps behind each technique. Swipe through to explore Deigo’s signature looks.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {cuts.map((cut, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative group">
                  <img
                    src={cut.img}
                    alt={cut.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-lg font-semibold drop-shadow-lg">
                    {cut.title}
                  </h3>
                </div>
                <div className="p-4 bg-sky-50">
                  <p className="text-slate-700 text-sm font-medium">{cut.step}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
