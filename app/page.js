// frontend/app/page.js

'use client'; // จำเป็นสำหรับ React Hooks เช่น useState และ useEffect

// import Head from 'next/head'; // ไม่จำเป็นต้อง import Head อีกต่อไปถ้าใช้ metadata ใน layout.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HomePage() {
  // ข้อมูลสำหรับส่วน Card (Features)
  const features = [
    {
      title: "ประสิทธิภาพเหนือระดับ",
      description: "ด้วย Next.js เว็บไซต์ของคุณจะโหลดได้รวดเร็วทันใจ พร้อมประสบการณ์ผู้ใช้ที่ไร้รอยต่อ",
      image: '/img/card/1.jpg',
    },
    {
      title: "ออกแบบสวยงามทันสมัย",
      description: "ใช้ Tailwind CSS เพื่อสร้างดีไซน์ที่ตอบสนองทุกอุปกรณ์และมีความยืดหยุ่นสูง ปรับแต่งได้ตามแบรนด์ของคุณ",
      image: '/img/card/2.jpg',
    },
    {
      title: "ปรับแต่งได้ตามต้องการ",
      description: "เราทำงานร่วมกับคุณเพื่อสร้างเว็บไซต์ที่ตรงกับวิสัยทัศน์และเป้าหมายทางธุรกิจของคุณในทุกรายละเอียด",
      image: '/img/card/3.jpeg',
    },
    {
      title: "รองรับการทำ SEO",
      description: "ปรับแต่งเว็บไซต์ของคุณให้พร้อมสำหรับการจัดอันดับบน Search Engine เพื่อให้ลูกค้าค้นหาคุณเจอได้ง่ายขึ้น",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: "ปลอดภัยและน่าเชื่อถือ",
      description: "เราให้ความสำคัญกับความปลอดภัยของข้อมูล และสร้างเว็บไซต์ที่มั่นคงแข็งแรง",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: "บริการหลังการขายที่ดีเยี่ยม",
      description: "เราพร้อมให้คำปรึกษาและสนับสนุนหลังจากส่งมอบเว็บไซต์ เพื่อให้คุณมั่นใจในการใช้งาน",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 0a3 3 0 10-4.243 4.243m4.243-4.243L21 12m-8.485-3.536a3 3 0 11-4.243-4.243m4.243 4.243L3 12m3.536 12.364l3.536-3.536m0 0a3 3 0 104.243-4.243m-4.243 4.243L12 21m-3.536-12.364a3 3 0 11-4.243 4.243m4.243-4.243L12 3" />
        </svg>
      ),
    },
  ];

  const images = [
    '/img/slider/1.jpg',
    '/img/slider/2.jpg',
    '/img/slider/3.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      {/* <Head> ไม่จำเป็นต้องใช้แล้วถ้าใช้ metadata ใน layout.js */}
      {/*
      <Head>
        <title>My Website - สร้างสรรค์เว็บไซตส์คุณภาพ</title>
        <meta name="description" content="บริการพัฒนาเว็บไซต์ Next.js และ Tailwind CSS สร้างประสบการณ์ผู้ใช้ที่รวดเร็วและสวยงาม" />
        <meta name="keywords" content="Next.js, Tailwind CSS, เว็บไซต์, พัฒนาเว็บไซต์, ออกแบบเว็บ, เว็บไซต์ธุรกิจ, เว็บแอปพลิเคชัน" />
      </Head>
      */}

      {/* Hero Section - ใส่ container mx-auto px-4 เพื่อจำกัดความกว้างเนื้อหา */}
      <div className="text-center py-16 px-4">
        <div className="container mx-auto"> {/* เพิ่ม div นี้เพื่อจำกัดความกว้างเนื้อหา */}
          <h1 className="text-5xl font-extrabold text-white mb-6">
            สร้างเว็บไซต์แห่งอนาคต <br className="hidden sm:inline" />ด้วย Next.js และ Tailwind CSS
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            เราคือผู้เชี่ยวชาญในการพลิกโฉมไอเดียของคุณให้กลายเป็นเว็บไซต์ที่สวยงาม รวดเร็ว และใช้งานง่าย ด้วยเทคโนโลยีล้ำสมัย
          </p>
          <div className="space-x-4">
            <Link
              href="/service"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-lg"
            >
              ดูบริการของเรา
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-lg"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div> {/* สิ้นสุด div container */}
      </div>

      {/* **** ส่วน Carousel - ปรับปรุงตรงนี้ **** */}
      {/* ลบ 'max-w-5xl', 'mx-auto', 'rounded-lg', 'shadow-xl' ออกทั้งหมด */}
      <section className="relative w-full my-12 overflow-hidden">
        <div className="relative h-[500px]">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Carousel image ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          {/* Arrow navigation - ปุ่มซ้าย */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {/* Arrow navigation - ปุ่มขวา */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          {/* Dot navigation (optional) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                } hover:bg-white transition-colors duration-300 focus:outline-none`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* ส่วน Card (Features) - มี container อยู่แล้ว */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            ทำไมต้องเลือกเรา?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out text-center">
                {/* ตรวจสอบว่ามี 'image' property หรือไม่ หากมี ให้แสดงรูปภาพ */}
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-md mb-4 mx-auto"
                  />
                )}
                {/* ถ้าไม่มี 'image' property (แต่มี 'icon') ให้แสดง icon เหมือนเดิม */}
                {!feature.image && feature.icon}
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* อาจจะเพิ่ม Testimonials, Call to Action เพิ่มเติมได้ที่นี่ */}
    </>
  );
}