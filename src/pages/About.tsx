import { motion } from 'framer-motion';
import { FiBook, FiBriefcase, FiUser, FiTarget, FiStar } from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const education = [
  { year: '১৯৮৫', degree: 'প্রাথমিক শিক্ষা', school: 'স্থানীয় সরকারি প্রাথমিক বিদ্যালয়' },
  { year: '১৯৯০', degree: 'মাধ্যমিক (SSC)', school: 'স্থানীয় উচ্চ বিদ্যালয়', result: 'প্রথম বিভাগ' },
  { year: '১৯৯২', degree: 'উচ্চ মাধ্যমিক (HSC)', school: 'সরকারি কলেজ', result: 'প্রথম বিভাগ' },
  { year: '১৯৯৬', degree: 'স্নাতক (BA)', school: 'বিশ্ববিদ্যালয়', result: 'দ্বিতীয় শ্রেণি' },
];

const experience = [
  {
    year: '১৯৯৮–২০০৩',
    role: 'ইউনিয়ন পরিষদ সদস্য',
    desc: 'স্থানীয় উন্নয়নে সক্রিয় ভূমিকা, রাস্তাঘাট ও পানি সরবরাহ প্রকল্প বাস্তবায়ন।',
  },
  {
    year: '২০০৩–২০০৮',
    role: 'ইউনিয়ন পরিষদ চেয়ারম্যান',
    desc: 'প্রায় ১৫টি উন্নয়নমূলক প্রকল্প বাস্তবায়ন, শিক্ষাপ্রতিষ্ঠান নির্মাণ।',
  },
  {
    year: '২০০৮–২০১৮',
    role: 'জেলা পরিষদ সদস্য',
    desc: 'জেলার সামগ্রিক উন্নয়নে গুরুত্বপূর্ণ অবদান, স্বাস্থ্যসেবা উন্নয়ন।',
  },
  {
    year: '২০১৮–বর্তমান',
    role: 'জাতীয় রাজনীতিতে সক্রিয়',
    desc: 'জাতীয় পর্যায়ে সক্রিয় রাজনৈতিক কার্যক্রম, জনকল্যাণমূলক কাজে নিবেদিত।',
  },
];

const journey = [
  { year: '১৯৯৮', event: 'রাজনীতিতে প্রবেশ', detail: 'তরুণ বয়সে স্থানীয় রাজনীতিতে যোগদান।' },
  { year: '২০০০', event: 'প্রথম নির্বাচন', detail: 'প্রথমবারের মতো নির্বাচনে অংশগ্রহণ ও জয়লাভ।' },
  { year: '২০০৫', event: 'উন্নয়ন পুরস্কার', detail: 'সেরা জনপ্রতিনিধি হিসেবে জেলা পুরস্কার লাভ।' },
  { year: '২০১০', event: 'বড় উন্নয়ন প্রকল্প', detail: '১০টি গ্রামে বিশুদ্ধ পানি সরবরাহ প্রকল্প চালু।' },
  { year: '২০১৫', event: 'শিক্ষা প্রকল্প', detail: '৫টি নতুন বিদ্যালয় ভবন নির্মাণ সম্পন্ন।' },
  { year: '২০২৫', event: 'জাতীয় নির্বাচন', detail: 'পানির কলস প্রতীকে জাতীয় নির্বাচনে প্রতিদ্বন্দ্বিতা।' },
];

const futureGoals = [
  { icon: '💧', title: 'বিশুদ্ধ পানি নিশ্চিত করা', desc: 'প্রতিটি পরিবারে নিরাপদ পানি সরবরাহ।' },
  { icon: '🏫', title: 'শিক্ষার মান উন্নয়ন', desc: 'সরকারি বিদ্যালয়গুলোতে আধুনিক সুযোগ-সুবিধা।' },
  { icon: '🏥', title: 'স্বাস্থ্যসেবা সম্প্রসারণ', desc: 'প্রতিটি ইউনিয়নে আধুনিক স্বাস্থ্যকেন্দ্র।' },
  { icon: '💼', title: 'কর্মসংস্থান সৃষ্টি', desc: 'তরুণদের জন্য নতুন কর্মসংস্থানের সুযোগ।' },
  { icon: '🌱', title: 'পরিবেশ রক্ষা', desc: 'সবুজ বাংলাদেশ গড়ার প্রতিশ্রুতি।' },
  { icon: '👴', title: 'বৃদ্ধদের কল্যাণ', desc: 'সিনিয়র নাগরিকদের জন্য বিশেষ ভাতা ও সুবিধা।' },
];

export default function About() {
  return (
    <div  className="pt-20">
      {/* Hero banner */}
      <section  className="gradient-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div style={{marginTop:"50px"}} className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-6xl block mb-4">🏺</span>
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
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-600 to-green-900 mx-auto mb-6 flex items-center justify-center text-7xl border-4 border-white shadow-xl">
                  👤
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">আব্দুল মতিন</h2>
                <p className="text-green-600 font-semibold mb-4">যুগ্ম সাধারণ সম্পাদক পদপ্রার্থী 🏺</p>
                <div className="space-y-3 text-sm text-left">
                  {[
                    { icon: <FiUser />, label: 'জন্ম', value: '১৯৭০ সাল' },
                    { icon: <FiStar />, label: 'পেশা', value: 'রাজনীতিবিদ ও সমাজসেবক' },
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
                আব্দুল মতিন ১৯৭০ সালে বাংলাদেশের একটি সাধারণ কৃষক পরিবারে জন্মগ্রহণ
                করেন। ছোটবেলা থেকেই তিনি সমাজের উন্নয়নে কাজ করার স্বপ্ন দেখতেন।
              </p>
              <p className="text-gray-600 leading-relaxed">
                শিক্ষাজীবন শেষ করার পর তিনি স্থানীয় রাজনীতিতে যোগ দেন এবং ধীরে ধীরে
                জনগণের আস্থার প্রতীক হয়ে ওঠেন। তাঁর নেতৃত্বে এলাকায় উল্লেখযোগ্য
                উন্নয়নমূলক কাজ সম্পন্ন হয়েছে।
              </p>
              <p className="text-gray-600 leading-relaxed">
                তিনি বিশ্বাস করেন যে সৎ, নিষ্ঠাবান ও দক্ষ নেতৃত্বই পারে একটি সুন্দর
                বাংলাদেশ গড়তে। পানির কলস প্রতীক তাঁর জীবনদর্শনের প্রতীক — বিশুদ্ধ,
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

      {/* Experience */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="কর্মজীবন ও অভিজ্ঞতা"
            subtitle="দশকের পর দশক জনসেবায় নিবেদিত"
          />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-red-500 hidden md:block" />
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="md:pl-24 relative"
                >
                  {/* Dot */}
                  <div className="hidden md:block absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-green-700 border-4 border-white shadow-md z-10" />
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                    <span className="text-xs font-bold text-white bg-gradient-to-r from-green-600 to-green-800 px-3 py-1 rounded-full">
                      {exp.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-800 mt-3 mb-2 flex items-center gap-2">
                      <FiBriefcase className="text-green-600" />
                      {exp.role}
                    </h3>
                    <p className="text-gray-600">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Political Journey */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="রাজনৈতিক যাত্রা" subtitle="সংগ্রাম থেকে সাফল্যের পথে" light />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all"
              >
                <span className="text-xs font-bold text-green-400 tracking-widest">{item.year}</span>
                <h3 className="text-lg font-bold text-white mt-2 mb-2">{item.event}</h3>
                <p className="text-gray-300 text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="ভবিষ্যৎ পরিকল্পনা"
            subtitle="নির্বাচিত হলে যা করার প্রতিশ্রুতি দিচ্ছি"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureGoals.map((goal, i) => (
              <Card key={i} delay={i * 0.08}>
                <div className="p-6">
                  <div className="text-4xl mb-4">{goal.icon}</div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{goal.title}</h3>
                  <p className="text-gray-500 text-sm">{goal.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
