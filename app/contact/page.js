// frontend/app/contact/page.js

import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>ติดต่อเรา - My Website</title>
        <meta name="description" content="ช่องทางการติดต่อ My Website ส่งข้อความถึงเรา หรือโทรศัพท์/อีเมลสอบถามข้อมูล" />
        <meta name="keywords" content="ติดต่อ, ติดต่อเรา, เบอร์โทร, อีเมล, ฟอร์มติดต่อ, สอบถาม, ที่อยู่" />
      </Head>

      <div className="container mx-auto p-8">
        <section className="text-center py-12 mb-12">
          {/* เปลี่ยน text-gray-900 เป็น text-white */}
          <h1 className="text-5xl font-extrabold text-white mb-4">
            ติดต่อเรา
          </h1>
          {/* เปลี่ยน text-gray-700 เป็น text-gray-300 */}
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            เรายินดีรับฟังทุกคำถาม ข้อเสนอแนะ หรือความต้องการของคุณ
            โปรดอย่าลังเลที่จะติดต่อเรา
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form - ส่วนนี้มีพื้นหลังสีขาว (bg-white) อยู่แล้ว ฟอนต์ควรเป็นสีเข้ม */}
          <div>
            {/* เปลี่ยน text-gray-800 เป็น text-white หรือ text-gray-100 ถ้าต้องการให้หัวข้อเป็นสีอ่อน */}
            {/* แต่ถ้ายังใช้ bg-white สำหรับ form, หัวข้อควรเป็นสีเข้ม (text-gray-800) เพื่อตัดกับสีขาวของ form */}
            <h2 className="text-3xl font-bold text-white mb-6"> {/* สมมติว่าหัวข้ออยู่บนพื้นหลังดำ */}
              ส่งข้อความถึงเรา
            </h2>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              {/* ฟอนต์ใน form ที่อยู่บนพื้นหลังสีขาว ให้คงเป็น text-gray-700 หรือ text-gray-900 */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
                  ชื่อของคุณ
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900" /* เพิ่ม text-gray-900 ให้ input */
                  placeholder="ชื่อ-นามสกุล"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
                  อีเมล
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900" /* เพิ่ม text-gray-900 ให้ input */
                  placeholder="your@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg font-medium text-gray-700 mb-2">
                  หัวข้อ
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900" /* เพิ่ม text-gray-900 ให้ input */
                  placeholder="หัวข้อเรื่องที่คุณต้องการสอบถาม"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  ข้อความ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-lg text-gray-900" /* เพิ่ม text-gray-900 ให้ textarea */
                  placeholder="รายละเอียดที่คุณต้องการสอบถาม..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out text-lg shadow-md"
                >
                  ส่งข้อความ
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information - ส่วนนี้มีพื้นหลังสีฟ้าอ่อน (bg-blue-50) อยู่แล้ว ฟอนต์ควรเป็นสีเข้ม */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ข้อมูลการติดต่อ
            </h2>
            {/* ฟอนต์ข้อมูลติดต่อที่อยู่บน bg-blue-50 ให้คงเป็น text-gray-700 หรือ text-gray-800 */}
            <div className="space-y-6 text-gray-700 text-lg">
              <p>
                <span className="font-semibold text-blue-600">โทรศัพท์:</span> <br />
                <a href="tel:+66123456789" className="hover:underline">**+66 (0) 12 345 6789**</a> (ตัวอย่าง)
              </p>
              <p>
                <span className="font-semibold text-blue-600">อีเมล:</span> <br />
                <a href="mailto:info@mywebsite.com" className="hover:underline">**info@mywebsite.com**</a> (ตัวอย่าง)
              </p>
              <p>
                <span className="font-semibold text-blue-600">ที่อยู่:</span> <br />
                **123/45 ถนนนิมมานเหมินท์** <br />
                **ตำบลสุเทพ, อำเภอเมือง** <br />
                **เชียงใหม่ 50200, ประเทศไทย** (ตัวอย่าง)
              </p>
              <p>
                <span className="font-semibold text-blue-600">เวลาทำการ:</span> <br />
                **จันทร์ - ศุกร์: 9:00 น. - 17:00 น.**
              </p>
            </div>
            {/* Optional: Social Media Links */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                ติดตามเรา
              </h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-3xl">
                  <i className="fab fa-facebook-square"></i> {/* ถ้าใช้ Font Awesome */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.815c-3.235 0-4.185 1.986-4.185 4.081v2.919z"/></svg>
                </a>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-3xl">
                  <i className="fab fa-twitter-square"></i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.417 0-6.178 2.761-6.178 6.179 0 .484.054.954.129 1.407-5.144-.258-9.637-2.731-12.69-6.471-.524.89-.83 1.933-.83 3.036 0 2.132 1.084 4.037 2.732 5.147-.807-.025-1.567-.248-2.228-.616v.086c0 2.996 2.132 5.485 4.97 6.075-.515.137-1.052.223-1.612.223-.393 0-.776-.038-1.149-.111.793 2.474 3.076 4.26 5.82 4.31-.212.164-.43.31-.655.445 1.096.855 2.378 1.359 3.774 1.359.883 0 1.73-.081 2.545-.246 1.13-.88 2.064-2.013 2.599-3.328 1.637-2.083 2.59-4.764 2.59-7.755 0-.214-.007-.427-.02-.639.897-.643 1.677-1.446 2.309-2.362z"/></svg>
                </a>
                {/* เพิ่มลิงก์โซเชียลมีเดียอื่นๆ ที่นี่ */}
              </div>
            </div>
          </div>
        </section>

        {/* Optional: Google Map Embed - หัวข้อนี้อยู่บนพื้นหลังดำ */}
        <section className="mb-16">
          {/* เปลี่ยน text-gray-800 เป็น text-white หรือ text-gray-100 */}
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            แผนที่
          </h2>
          <div className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%', height: 0 }}>
            {/* แทนที่ iframe ด้านล่างด้วย embed code จาก Google Maps ของคุณ */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.421676673552!2d98.96677931499525!3d18.79093838724773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da278a536f90ab%3A0x6339a6e1c2a1e1e!2sNimmanahaeminda%20Rd%2C%20Tambon%20Suthep%2C%20Amphoe%20Mueang%20Chiang%20Mai%2C%20Chiang%20Mai%2050200%2C%20Thailand!5e0!3m2!1sen!2sth!4v1678888888888!5m2!1sen!2sth" /* ตัวอย่าง Google Map Embed ของถนนนิมมานเหมินท์ */
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
}