import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle, FiPhone,  FiMapPin } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import heroImg from '../assets/hero.png';
import banner from '../assets/banner.jpeg';



const achievements = [
  'বছরের ব্যবসায়িক জীবন',
  'সততা ও নিষ্ঠার সাথে জনসেবা',
];

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* ─── Hero Section ─── */}
      <section  className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        

        {/* Floating symbols */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {['🏺', '🗳️', '🌿', '⭐', '🏺', '🌙'].map((sym, i) => (
            <motion.span
              key={i}
              className="absolute text-2xl opacity-20"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
              animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.5 }}
            >
              {sym}
            </motion.span>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6"
              >
               
               
              </motion.div> */}

              {/* Symbol */}
             
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{marginTop:"65px"}}
                className="md:text-xl lg:text-2xl font-bold text-white leading-tight mb-4 "
              >
                
                আসন্ন বৃহত্তর পেপার মার্চেন্ট বহুমুখী সমবায় সমিতি লিমিটেড নির্বাচন(২০২৬-২০২৯) 
    
              
              </motion.h1>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{marginTop:"10px"}}
                className=" mx-auto text-center md:text-xl lg:text-2xl font-bold text-white leading-tight"
              >
                
               আসসালামু আলাইকুম
    
              
              </motion.h1>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{marginTop:"25px"}}
                className="text-5xl  md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 "
              >
                
                আমি আব্দুল মতিন
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-yellow-400">
                   যুগ্ম সাধারণ সম্পাদক পদপ্রার্থী
                </span>
              
              </motion.h1>

              {/* Slogan */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-green-200 font-medium italic mb-6"
              >
                "পরিবর্তনের পথে, উন্নয়নের স্বপ্নে"
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
              >
                একজন অভিজ্ঞ ও সৎ যুগ্ম সাধারণ সম্পাদক পদপ্রার্থী যিনি জনগণের সেবায় নিবেদিত।
                আপনার ব্যবসা প্রতিষ্ঠানের জন্য, আপনার মার্কেটের সার্বিক উন্নয়নের জন্য — 🏺 কলসি মার্কায় ভোট দিন।
              </motion.p>

              {/* CTA buttons */}
              <motion.div
              style={{marginBottom:"5px"}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/about">
                
                  <Button size="lg" variant="primary">
                    আরও জানুন <FiArrowRight />
                  </Button>
                </Link>
                <Link to="/reward">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-black hover:text-green-800">
                    🎁 Reward Campaign
                  </Button>
                </Link>
              </motion.div>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-6 mt-8"
              >
               
                  
                
                <p className="text-green-200 text-sm">
                  <span className="text-white font-bold">2500+</span> সমর্থক আমাদের সাথে
                </p>
              </motion.div>
            </motion.div>

            {/* Candidate photo */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 to-red-500 blur-2xl opacity-40 scale-110" />


                <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <img
                    src={heroImg}
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


                {/* Symbol badge */}
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{marginBottom:"30px",padding:"5px"}}
                  className=" absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-xl flex items-center gap-2"
                >
                  <span className="text-2xl">🏺</span>
                  <span className="text-green-800 font-bold text-sm ">কলসি মার্কা</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
      
        </div>
      </section>

      {/* ─── About Preview ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle
                title="প্রার্থী পরিচিতি"
                subtitle="আব্দুল মতিন — একজন অভিজ্ঞ, সৎ ও জনদরদী ব্যক্তি"
                center={false}
              />
              <p className="text-gray-600 leading-relaxed mb-6">
               আমি দীর্ঘদিন ধরে ব্যবসায়ী সমাজ ও সমিতির সদস্যদের কল্যাণে কাজ করে আসছি। সমিতির উন্নয়ন, ব্যবসায়িক পরিবেশের অগ্রগতি এবং সকল সদস্যের স্বার্থ রক্ষায় নিজেকে নিবেদিত রাখতে চাই।
                    
              </p>
              <br />
              <p className="text-gray-600 leading-relaxed mb-6">আপনাদের মূল্যবান ভোট ও সমর্থনই হবে উন্নয়নের পথকে আরও শক্তিশালী করার অনুপ্রেরণা।</p>
              <ul className="space-y-3 mb-8">
                {achievements.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FiCheckCircle className="text-green-600 text-xl flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link  className="flex justify-center" to="/about">
                <Button>সম্পূর্ণ জীবনী পড়ুন <FiArrowRight /></Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: '২০+', label: 'বছরের ব্যবসায়িক জীবন', color: 'from-green-500 to-green-700' },
               
                { num: '10000+', label: 'সমর্থক', color: 'from-amber-500 to-amber-700' },
                { num: '১০০%', label: 'প্রতিশ্রুতি', color: 'from-blue-500 to-blue-700' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${stat.color} rounded-2xl p-6 text-white text-center shadow-lg`}
                >
                  <p className="text-4xl font-bold mb-1">{stat.num}</p>
                  <p className="text-sm opacity-90">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Campaign Goals ─── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="আমাদের নির্বাচনী প্রতিশ্রুতি"
            subtitle="স্বচ্ছতা, জবাবদিহিতা ও উন্নয়নের ধারাবাহিকতা বজায় রেখে সমিতিকে আরও এগিয়ে নেওয়াই আমার মূল লক্ষ্য।"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
          </div>
        </div>
      </section>

      {/* ─── Reward Campaign Banner ─── */}
      <section  className=" py-20 bg-gradient-to-br from-green-700 via-green-600 to-red-700 relative overflow-hidden">
        <div  className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-6xl mb-4">🎁</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              রিওয়ার্ড ক্যাম্পেইনে যোগ দিন!
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
              ফেসবুকে শেয়ার করুন, স্ক্রিনশট জমা দিন এবং আকর্ষণীয় পুরস্কার জিতে নিন।
              আজই অংশগ্রহণ করুন!
            </p>
            <p>🎁 প্রতিদিন জিতুন আকর্ষণীয় পুরস্কার! 🎁

আগামী ২১/০৮/২০২৬ তারিখ পর্যন্ত আমরা প্রতিদিন একটি করে পুরস্কার প্রদান করবো।

আপনিও হতে পারেন আমাদের ভাগ্যবান বিজয়ী! 🏆
শুধু আমাদের পোস্টটি <span><a
  href="https://www.facebook.com/permalink.php?story_fbid=pfbid021tbHVbX7LYzEnAr21XENabqwHVitk7QpLxuLh7SqLqzdGqbGAjumnKoTdkG15qUNl&id=61592072703107"
  target="_blank"
  rel="noopener noreferrer"
  className='underline text-blue-900'
>
   
   Facebook Post
</a></span> টি শেয়ার করুন অথবা  <span><a
  href={banner}
  download
  
  rel="noopener noreferrer"
  className='underline text-red-700'
>
   
   ব্যানারটি ডাউনলোড
</a></span>  করে আপনার ফেসবুক থেকে পোস্ট করুন এবং পোস্টের স্ক্রিনশটসহ আপনার নাম ও মোবাইল নম্বর নিচের ফর্মে জমা দিন।

 </p>
<p>📢 প্রতিদিন রাত ৮টায় লটারির ড্র অনুষ্ঠিত হবে।

🏆 প্রতিদিন একজন সৌভাগ্যবান বিজয়ীকে আকর্ষণীয় পুরস্কার প্রদান করা হবে।

📍 স্থান: মতিন স্টিকার হাউস
🕗 সময়: প্রতিদিন রাত ৮:০০টা</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link style={{padding:"20px"}} to="/reward">
                <Button  className="bg-black text-green-800 hover:bg-green-50 border-white ">
                  🎁 এখনই অংশগ্রহণ করুন
                </Button>
              </Link>
              <Link to="/draw">
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Contact Preview ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="যোগাযোগ করুন"
            subtitle="আমাদের সাথে সরাসরি যোগাযোগ করতে নিচের তথ্য ব্যবহার করুন"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: <FiPhone className="text-2xl" />, label: 'ফোন', value: '+8801762121027', color: 'green' },
      
              { icon: <FiMapPin className="text-2xl" />, label: 'ঠিকানা', value: ' মতিন স্টিকার হাউস,নয়াবাজার', color: 'amber' },
            ].map((item, i) => (
              <Card key={i} delay={i * 0.1}>
                <div className="p-6 flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}-100 text-${item.color}-600 flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-gray-800 font-semibold mt-1">{item.value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="flex flex-wrap gap-4 justify-center mb-6">
             
             <a
  href="https://www.facebook.com/abdulmotinhabib"
  target="_blank"
  rel="noopener noreferrer"
  style={{margin:"10px"}}
  className="flex items-center gap-2 px-4 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
>
  <FaFacebook className="text-xl" />
  <span>Facebook</span>
</a>
                
              
            </div>
            <Link to="/contact">
              <Button size="lg">
                বার্তা পাঠান <FiArrowRight />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
