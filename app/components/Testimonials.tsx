"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#064e3b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#fbbf24] mb-12">Success Stories</h3>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="pb-12"
        >
          {["James D.", "Sarah L.", "Marcus K."].map((name, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#022c22] p-8 rounded-3xl border border-[#fbbf24]/10 h-full group">
                <p className="text-[#fbbf24]/80 mb-6 italic">"Professional, secure, and highly profitable."</p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-[#fbbf24] rounded-full flex items-center justify-center text-[#022c22] font-bold">{name[0]}</div>
                  <h5 className="font-bold text-white">{name}</h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}