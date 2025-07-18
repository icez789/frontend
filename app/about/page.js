// frontend/app/about/page.js

import Head from 'next/head';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา - My Website</title>
        <meta name="description" content="เรื่องราวเบื้องหลัง My Website ทีมงาน วิสัยทัศน์ และความมุ่งมั่นในการสร้างสรรค์เว็บไซต์คุณภาพ" />
        <meta name="keywords" content="เกี่ยวกับเรา, My Website, บริษัทพัฒนาเว็บ, ทีมงาน, ประวัติ, วิสัยทัศน์, พันธกิจ" />
      </Head>

      {/* ส่วน container หลัก ซึ่งถ้า body เป็นสีดำแล้ว ส่วนนี้จะอยู่บนพื้นหลังสีดำนั้น */}
      <div className="container mx-auto p-8">
        {/* Hero Section สำหรับหน้า About (อยู่บนพื้นหลังสีดำหลัก) */}
        <section className="text-center py-12 mb-12">
          {/* เปลี่ยนเป็น text-white เพื่อให้เห็นชัดบนพื้นหลังสีดำของหน้า */}
          <h1 className="text-5xl font-extrabold text-white mb-4">
            เรื่องราวของเรา
          </h1>
          {/* เปลี่ยนเป็น text-gray-300 เพื่อให้เห็นชัดบนพื้นหลังสีดำของหน้า */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            จากความมุ่งมั่นสู่การสร้างสรรค์เว็บไซต์ที่ตอบโจทย์และก้าวล้ำ
          </p>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              {/* เปลี่ยนเป็น text-white เพราะยังอยู่บนพื้นหลังสีดำหลัก */}
              <h2 className="text-4xl font-bold text-white mb-6">
                วิสัยทัศน์และพันธกิจ
              </h2>
              {/* เปลี่ยนเป็น text-gray-200 เพราะยังอยู่บนพื้นหลังสีดำหลัก */}
              <p className="text-lg text-gray-200 mb-4">
                วิสัยทัศน์: เรามุ่งมั่นที่จะเป็นผู้นำในการสร้างสรรค์เว็บไซต์และแพลตฟอร์มดิจิทัลที่เปี่ยมนวัตกรรม นำเสนอประสบการณ์ผู้ใช้ที่ยอดเยี่ยม และขับเคลื่อนการเติบโตของธุรกิจในยุคดิจิทัล
              </p>
              <p className="text-lg text-gray-200">
                พันธกิจ: เราให้บริการพัฒนาเว็บไซต์แบบครบวงจร โดยผสานความเชี่ยวชาญด้าน Next.js และ Tailwind CSS เข้ากับความเข้าใจในเป้าหมายทางธุรกิจของลูกค้า เพื่อส่งมอบผลงานที่มีคุณภาพสูง ประสิทธิภาพดีเยี่ยม และใช้งานได้จริง
              </p>
            </div>
            {/* ส่วนนี้มี bg-gray-200 h-64 ซึ่งจะสร้างกล่องสีเทาอ่อนขึ้นมา */}
            <div className="order-1 md:order-2">
               <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center text-gray-600">
                <img
                    src="./img/aboutimg/1.jpg" // <--- **ใส่ Path รูปภาพของคุณที่นี่**
                    alt="วิสัยทัศน์และพันธกิจขององค์กร"
                    className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Story / Journey Section - สังเกตว่ามี bg-blue-50 และ shadow-md */}
        {/* ถ้า background ของ section นี้เป็นสีอ่อนจริง (ตามที่ตั้งใจ) ฟอนต์ควรเป็นสีเข้ม */}
        {/* แต่จากรูปของคุณ มันดูเหมือนเป็นบล็อกสีขาวจางๆ บนพื้นหลังสีดำ
           ดังนั้นเราจะ **สมมติว่าคุณต้องการให้บล็อกนี้แสดงผลเป็นพื้นหลังสีอ่อนจริงๆ**
           ถ้าอย่างนั้น ฟอนต์ต้องเป็นสีเข้มเพื่อให้ตัดกัน
        */}
        <section className="mb-16 bg-blue-50 p-10 rounded-lg shadow-md">
          {/* เปลี่ยนเป็น text-gray-800 หรือ text-gray-900 เพื่อให้ตัดกับ bg-blue-50 */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
            เส้นทางของเรา
          </h2>
          {/* เปลี่ยนเป็น text-gray-700 เพื่อให้ตัดกับ bg-blue-50 */}
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-6">
            My Website ก่อตั้งขึ้นจากความหลงใหลในเทคโนโลยีเว็บสมัยใหม่และความต้องการที่จะเห็นธุรกิจต่างๆ ประสบความสำเร็จในโลกออนไลน์ เราเริ่มต้นจากการเป็นทีมเล็กๆ ที่เชื่อมั่นในพลังของ Next.js และความยืดหยุ่นของ Tailwind CSS และได้พัฒนาทักษะ ประสบการณ์ รวมถึงขยายทีมงานเพื่อตอบสนองความต้องการที่หลากหลายของลูกค้า
          </p>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            ตลอดระยะเวลาที่ผ่านมา เราได้ทำงานร่วมกับธุรกิจหลากหลายประเภท ตั้งแต่สตาร์ทอัพไปจนถึงองค์กรขนาดใหญ่ สร้างสรรค์โซลูชันที่ปรับแต่งได้ตามความต้องการเฉพาะ พร้อมทั้งมุ่งมั่นส่งมอบงานที่เกินความคาดหวังเสมอมา
          </p>
        </section>

        {/* Our Team Section - ตรงนี้แต่ละ Card มี bg-white อยู่แล้ว ฟอนต์ควรเป็นสีเข้ม */}
        <section className="mb-16">
          {/* เปลี่ยนเป็น text-white เพราะ h2 นี้อยู่บนพื้นหลังสีดำหลัก */}
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            พบกับทีมงานของเรา
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Member Card 1 - ส่วนนี้มี bg-white อยู่แล้ว ฟอนต์ควรเป็นสีเข้ม */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                <img
                    src="./img/contactimg/1.jpg" // <--- **ใส่ Path รูปภาพของคุณที่นี่**
                    className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                [cool doggg]
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                ตำแหน่ง CEO
              </p>
              <p className="text-gray-700 text-sm">
                บริหารธุรกิจระดับหมื่นล้าน
              </p>
            </div>
            {/* Member Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
               <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                <img
                    src="./img/contactimg/2.jpg" // <--- **ใส่ Path รูปภาพของคุณที่นี่**
                    className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                [cool cat]
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                ตำแหน่ง UX/UI Designer
              </p>
              <p className="text-gray-700 text-sm">
                สร้างสรรค์ผลงานระดับพระกาฬ
              </p>
            </div>
            {/* Member Card 3 */}
             <div className="bg-white p-6 rounded-lg shadow-md text-center">
               <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-600">
                <img
                    src="./img/contactimg/3.jpg" // <--- **ใส่ Path รูปภาพของคุณที่นี่**
                    className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                [cool bird]
              </h3>
              <p className="text-blue-600 font-medium mb-2">
                ตำแหน่ง coder
              </p>
              <p className="text-gray-700 text-sm">
                ทำทุกอย่าง
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section - ส่วนนี้มี bg-blue-600 และ text-white อยู่แล้ว ควรจะเห็นชัดเจน */}
        <section className="text-center bg-blue-600 text-white py-12 rounded-lg shadow-xl">
          <h2 className="text-4xl font-bold mb-4">
            พร้อมที่จะสร้างเว็บไซต์ในฝันของคุณหรือยัง?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ให้ทีมงานของเราช่วยนำพาธุรกิจของคุณก้าวไปอีกขั้นในโลกดิจิทัล
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out text-lg shadow-lg"
          >
            เริ่มต้นโปรเจกต์กับเรา
          </Link>
        </section>
      </div>
    </>
  );
}