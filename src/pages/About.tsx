import { motion } from 'framer-motion';
import { FiBook, FiUser, FiTarget, FiStar } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';

import hero from '../assets/hero.png'

const education = [
  { year: '১৯৯৫', degree: 'প্রাথমিক শিক্ষা', school: 'স্থানীয় সরকারি প্রাথমিক বিদ্যালয়' },
  { year: '২০০৭', degree: 'মাধ্যমিক (SSC)', school: 'স্থানীয় উচ্চ বিদ্যালয়', result: 'প্রথম বিভাগ' },
  { year: '২০০৯', degree: 'উচ্চ মাধ্যমিক (HSC)', school: 'লক্ষ্মীপুর সরকারি কলেজ', result: 'প্রথম বিভাগ' },
  { year: '২০১৩', degree: 'স্নাতক (BA)', school: 'লক্ষ্মীপুর সরকারি কলেজ', result: 'দ্বিতীয় শ্রেণি' },
];


export default function About() {
  return (
    <div  className="pt-20">
      {/* Hero banner */}
      <section  className="gradient-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div style={{marginTop:"50px"}} className=" relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className=" text-6xl block mb-4">🏺</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">আব্দুল মতিন</h1>
            <p className="text-xl text-green-200">
              প্রার্থী পরিচিতি — একজন সৎ, দক্ষ ও অভিজ্ঞ জনপ্রতিনিধি
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Photo card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 text-center shadow-lg border border-green-200">
                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src={hero}
                    alt="আব্দুল মতিন"
                    className="w-full h-full "
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-green-700 to-green-900 flex items-center justify-center"><span class="text-8xl">👤</span></div>';
                      }
                    }}
                  />
                </div>

                <h2 className="text-2xl font-bold text-gray-800 mb-1">আব্দুল মতিন</h2>
                <p className="text-green-600 font-semibold mb-4">যুগ্ম সাধারণ সম্পাদক পদপ্রার্থী 🏺</p>
                <div className="space-y-3 text-sm text-left">
                  {[
                    { icon: <FiUser />, label: 'জন্ম', value: '১৯৯০ সাল' },
                    { icon: <FiStar />, label: 'পেশা', value: 'ব্যবসায়ী ও সমাজসেবক' },
                    { icon: <FiBook />, label: 'শিক্ষা', value: 'স্নাতক (BA)' },
                    { icon: <FiTarget />, label: 'লক্ষ্য', value: 'জনকল্যাণ ও উন্নয়ন' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3">
                      <span className="text-green-600">{item.icon}</span>
                      <div>
                        <span className="text-gray-400 text-xs">{item.label}</span>
                        <p className="text-gray-700 font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <SectionTitle title="জীবন পরিচয়" center={false} />
              <p className="text-gray-600 leading-relaxed text-lg">
                আব্দুল মতিন ১৯৯০ সালে বাংলাদেশের একটি সাধারণ পরিবারে জন্মগ্রহণ
                করেন। ছোটবেলা থেকেই তিনি সমাজের উন্নয়নে কাজ করার স্বপ্ন দেখতেন।
              </p>
              <p className="text-gray-600 leading-relaxed">
                শিক্ষাজীবন শেষ করার পর তিনি স্থানীয় ব্যবসায় যোগ দেন। তাঁর নেতৃত্বে এলাকায় উল্লেখযোগ্য
                উন্নয়নমূলক কাজ সম্পন্ন হয়েছে।
              </p>
              <p className="text-gray-600 leading-relaxed">
                তিনি বিশ্বাস করেন যে সৎ, নিষ্ঠাবান ও দক্ষ নেতৃত্বই পারে একটি সুন্দর
                বাংলাদেশ গড়তে।  কলস প্রতীক তাঁর জীবনদর্শনের প্রতীক — বিশুদ্ধ,
                স্বচ্ছ ও জীবনদায়ী।
              </p>
              <div className="bg-gradient-to-r from-green-50 to-red-50 border-l-4 border-green-600 rounded-r-xl p-5">
                <p className="text-gray-700 italic text-lg font-medium">
                  "আমার লক্ষ্য শুধু ক্ষমতা নয়, আমার লক্ষ্য জনগণের জীবনমান উন্নত করা
                  এবং একটি সুন্দর বাংলাদেশ গড়ে তোলা।"
                </p>
                <p className="text-green-700 font-bold mt-2">— আব্দুল মতিন</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="শিক্ষাগত যোগ্যতা"
            subtitle="জ্ঞান ও শিক্ষার পথে আব্দুল মতিনের যাত্রা"
          />
          <div className="space-y-4">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-white shadow-md">
                  <FiBook size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">{edu.year}</span>
                    {edu.result && (
                      <span className="text-xs font-bold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">{edu.result}</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-500 text-sm">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
