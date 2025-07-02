// frontend/app/service/page.js

import Head from 'next/head';
import Link from 'next/link';

export default function ServicePage() {
  const services = [
    {
      title: "พัฒนาเว็บไซต์ธุรกิจ (Business Websites)",
      description: "สร้างเว็บไซต์องค์กรที่ทันสมัย น่าเชื่อถือ และปรับแต่งได้ตามความต้องการของธุรกิจคุณ เพื่อนำเสนอข้อมูลบริษัท ผลิตภัณฑ์ และบริการได้อย่างมืออาชีพ",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 12H7m3 0l3-3m-3 3l3 3" />
        </svg>
      ),
    },
    {
      title: "พัฒนา Web Application (Web Apps)",
      description: "ออกแบบและพัฒนาเว็บแอปพลิเคชันที่มีฟังก์ชันการทำงานซับซ้อน เช่น ระบบจัดการข้อมูล, แพลตฟอร์มอีคอมเมิร์ซ, หรือระบบสมาชิก ด้วย Next.js ที่รวดเร็วและปลอดภัย",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1l-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "ออกแบบ UI/UX (User Interface/User Experience)",
      description: "สร้างประสบการณ์ผู้ใช้ที่เหนือกว่าด้วยการออกแบบ UI ที่สวยงามและใช้งานง่าย (Tailwind CSS) ควบคู่กับการวิเคราะห์ UX เพื่อให้เว็บไซต์ของคุณตอบโจทย์พฤติกรรมผู้ใช้",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "การทำ SEO พื้นฐาน (Basic SEO Optimization)",
      description: "ช่วยเพิ่มโอกาสให้เว็บไซต์ของคุณถูกค้นพบมากขึ้นบน Search Engine ด้วยการปรับแต่งโครงสร้าง การใช้ Meta Tags และเนื้อหาที่เหมาะสม เพื่อดึงดูดกลุ่มเป้าหมาย",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
        title: "บำรุงรักษาและปรับปรุงเว็บไซต์",
        description: "ให้บริการดูแลเว็บไซต์หลังส่งมอบ ทั้งการอัปเดตระบบ ความปลอดภัย และการปรับปรุงฟังก์ชันการทำงาน เพื่อให้เว็บไซต์ของคุณทันสมัยและทำงานได้อย่างราบรื่น",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.942 3.313.823 2.396 2.396a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.942 1.543-.823 3.313-2.396 2.396a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.942-3.313-.823-2.396-2.396a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.942-1.543.823-3.313 2.396-2.396a1.724 1.724 0 002.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
  ];

  return (
    <>
      <Head>
        <title>บริการของเรา - My Website</title>
        <meta name="description" content="สำรวจบริการพัฒนาเว็บไซต์ครบวงจร ตั้งแต่เว็บไซต์ธุรกิจ เว็บแอปพลิเคชัน ไปจนถึงการออกแบบ UI/UX" />
        <meta name="keywords" content="บริการ, พัฒนาเว็บไซต์, เว็บแอปพลิเคชัน, UI/UX, SEO, บำรุงรักษาเว็บ, Next.js, Tailwind CSS" />
      </Head>

      <div className="container mx-auto p-8">
        <section className="text-center py-12 mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            บริการของเรา
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My Website นำเสนอโซลูชันการพัฒนาเว็บไซต์ครบวงจร เพื่อตอบสนองทุกความต้องการทางธุรกิจของคุณ
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {services.map((service, index) => ( // <-- ตรงนี้ ต้องมีวงเล็บเปิด '(' ครอบ JSX ที่ Return
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out text-center">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))} {/* <-- ตรวจสอบให้แน่ใจว่าวงเล็บปิด ')' ครบถ้วน */}
        </section>

        <section className="text-center bg-blue-600 text-white py-12 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-4">
            ต้องการโซลูชันที่ปรับแต่งได้?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            หากคุณไม่พบสิ่งที่ต้องการ หรือมีโปรเจกต์เฉพาะทาง
            เราพร้อมพูดคุยเพื่อสร้างสรรค์สิ่งที่ดีที่สุดสำหรับคุณ
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg shadow-lg"
          >
            ปรึกษาโปรเจกต์ของคุณ
          </Link>
        </section>
      </div>
    </>
  );
}