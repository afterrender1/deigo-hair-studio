import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 🔹 Local Images
import timg1 from "../assets/timg1.jpg";
import timg2 from "../assets/timg2.jpg";
import timg3 from "../assets/timg3.jpg";
import timg4 from "../assets/timg4.jpg";
import timg5 from "../assets/timg5.jpg";
import timg6 from "../assets/timg6.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Tutorials() {
  const [openVideo, setOpenVideo] = useState(null);
  const sectionRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Fade Cut Tutorial",
      img: timg1,
      video: "https://www.youtube.com/embed/FESVATkAGv8?si=R3X-cp8270eUmJxc",
    },
    {
      id: 2,
      title: "Layered Hair Styling",
      img: timg2,
      video: "https://www.youtube.com/embed/lTRiuFIWV54",
    },
    {
      id: 3,
      title: "Beard Trim Perfection",
      img: timg3,
      video: "https://www.youtube.com/embed/VYOjWnS4cMY",
    },
    {
      id: 4,
      title: "Classic Scissor Cut",
      img: timg4,
      video: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
    {
      id: 5,
      title: "Men’s Taper Cut",
      img: timg5,
      video: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    },
    {
      id: 6,
      title: "Salon Finish Techniques",
      img: timg6,
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  // 🔹 GSAP Animation
  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      id="tutorials"
      ref={sectionRef}
      className="w-full py-20 text-white overflow-hidden"
    >
      {/* 🔹 Header */}
      <div className="text-center mb-12 animate__animated animate__fadeInDown">
        <h2 className="text-2xl sm:text-5xl font-bold text-sky-500 drop-shadow-lg">
          YouTube Tutorials
        </h2>
        <p className="text-slate-600 text-base sm:text-lg mt-2">
          Watch, learn & style like a pro with Diego
        </p>
      </div>

      {/* 🔹 Swiper Carousel */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          className="pb-12 mt-7"
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="card text-black rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 pb-7">
                {/* 🔹 Thumbnail */}
                <figure className="relative h-60">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setOpenVideo(card.video)}
                    className="absolute inset-0 flex justify-center items-center hover:bg-black/60 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="white"
                      className="w-14 h-14 opacity-90 hover:scale-110 transition-transform"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8 5v14l11-7z"
                      />
                    </svg>
                  </button>
                </figure>

                {/* 🔹 Card Body */}
                <div className="card-body px-5 py-4 flex flex-col justify-between">
                  <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
                    {card.title}
                  </h2>
                  <button
                    className="w-full py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-all"
                    onClick={() => setOpenVideo(card.video)}
                  >
                    Watch Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* 🔹 Custom Nav Buttons */}
        <button
          className="swiper-button-prev-custom hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 duration-300 hover:text-white hover:bg-sky-700 text-sky-400 rounded-full p-3 shadow-lg z-10"
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          className="swiper-button-next-custom hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 duration-300 hover:text-white hover:bg-sky-700 text-sky-400 rounded-full p-3 shadow-lg z-10"
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 🔹 Video Modal */}
      {openVideo && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box max-w-3xl bg-black/90 text-white backdrop-blur-md border border-sky-700">
            <iframe
              width="100%"
              height="400"
              src={openVideo + "?autoplay=1"}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
            <div className="modal-action">
              <button
                className="btn btn-outline text-white btn-error"
                onClick={() => setOpenVideo(null)}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </section>
  );
}
