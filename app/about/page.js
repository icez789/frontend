// frontend/app/about/page.js
import Link from 'next/link';
// ไม่จำเป็นต้อง import Head ใน Next.js App Router (v13+)

export const metadata = {
  title: "เกี่ยวกับเรา - My Website",
  description: "เรื่องราวเบื้องหลัง My Website ทีมงาน วิสัยทัศน์ และความมุ่งมั่นในการสร้างสรรค์เว็บไซต์คุณภาพ",
  keywords: "เกี่ยวกับเรา, My Website, บริษัทพัฒนาเว็บ, ทีมงาน, ประวัติ, วิสัยทัศน์, พันธกิจ",
};

export default function AboutPage() {
  return (
    <main className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-fade-in-down mb-4">
            เรื่องราวของเรา
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto animate-fade-in-up">
            จากความมุ่งมั่นสู่การสร้างสรรค์เว็บไซต์ที่ตอบโจทย์และก้าวล้ำ
          </p>
        </section>

        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">
                วิสัยทัศน์และพันธกิจ
              </h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">
                <span className="font-semibold text-blue-300">วิสัยทัศน์:</span> เรามุ่งมั่นที่จะเป็นผู้นำในการสร้างสรรค์เว็บไซต์และแพลตฟอร์มดิจิทัลที่เปี่ยมนวัตกรรม นำเสนอประสบการณ์ผู้ใช้ที่ยอดเยี่ยม และขับเคลื่อนการเติบโตของธุรกิจในยุคดิจิทัล
              </p>
              <p className="text-lg text-gray-200 leading-relaxed">
                <span className="font-semibold text-blue-300">พันธกิจ:</span> เราให้บริการพัฒนาเว็บไซต์แบบครบวงจร โดยผสานความเชี่ยวชาญด้าน Next.js และ Tailwind CSS เข้ากับความเข้าใจในเป้าหมายทางธุรกิจของลูกค้า เพื่อส่งมอบผลงานที่มีคุณภาพสูง ประสิทธิภาพดีเยี่ยม และใช้งานได้จริง
              </p>
            </div>
            <div className="order-1 md:order-2 animate-slide-in-right">
              <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/img/aboutimg/1.jpg"
                  alt="วิสัยทัศน์และพันธกิจขององค์กร"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20 bg-gray-800 p-12 rounded-3xl shadow-2xl animate-fade-in">
          <h2 className="text-4xl font-bold text-center text-white mb-8">
            เส้นทางของเรา
          </h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto mb-6 leading-relaxed">
            My Website ก่อตั้งขึ้นจากความหลงใหลในเทคโนโลยีเว็บสมัยใหม่และความต้องการที่จะเห็นธุรกิจต่างๆ ประสบความสำเร็จในโลกออนไลน์ เราเริ่มต้นจากการเป็นทีมเล็กๆ ที่เชื่อมั่นในพลังของ Next.js และความยืดหยุ่นของ Tailwind CSS และได้พัฒนาทักษะ ประสบการณ์ รวมถึงขยายทีมงานเพื่อตอบสนองความต้องการที่หลากหลายของลูกค้า
          </p>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed">
            ตลอดระยะเวลาที่ผ่านมา เราได้ทำงานร่วมกับธุรกิจหลากหลายประเภท ตั้งแต่สตาร์ทอัพไปจนถึงองค์กรขนาดใหญ่ สร้างสรรค์โซลูชันที่ปรับแต่งได้ตามความต้องการเฉพาะ พร้อมทั้งมุ่งมั่นส่งมอบงานที่เกินความคาดหวังเสมอมา
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            พบกับทีมงานของเรา
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Member 1 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300 animate-fade-in-up-delay-1">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-400">
                <img
                  src="/img/contactimg/1.jpg"
                  alt="[cool doggg]"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                [cool doggg]
              </h3>
              <p className="text-blue-400 font-medium mb-2">
                ตำแหน่ง CEO
              </p>
              <p className="text-gray-400 text-sm">
                บริหารธุรกิจระดับหมื่นล้าน
              </p>
            </div>

            {/* Member 2 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300 animate-fade-in-up-delay-2">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-400">
                <img
                  src="/img/contactimg/2.jpg"
                  alt="[cool cat]"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                [cool cat]
              </h3>
              <p className="text-blue-400 font-medium mb-2">
                ตำแหน่ง UX/UI Designer
              </p>
              <p className="text-gray-400 text-sm">
                สร้างสรรค์ผลงานระดับพระกาฬ
              </p>
            </div>

            {/* Member 3 */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-xl text-center transform hover:scale-105 transition-transform duration-300 animate-fade-in-up-delay-3">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-blue-400">
                <img
                  src="/img/contactimg/3.jpg"
                  alt="[cool bird]"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                [cool bird]
              </h3>
              <p className="text-blue-400 font-medium mb-2">
                ตำแหน่ง coder
              </p>
              <p className="text-gray-400 text-sm">
                ทำทุกอย่าง
              </p>
            </div>
          </div>
        </section>

        <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 rounded-3xl shadow-2xl animate-scale-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            พร้อมที่จะสร้างเว็บไซต์ในฝันของคุณหรือยัง?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            ให้ทีมงานของเราช่วยนำพาธุรกิจของคุณก้าวไปอีกขั้นในโลกดิจิทัล
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 hover:bg-blue-100 font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out text-lg shadow-lg transform hover:scale-105"
          >
            เริ่มต้นโปรเจกต์กับเรา
          </Link>
        </section>
      </div>
    </main>
  );
}