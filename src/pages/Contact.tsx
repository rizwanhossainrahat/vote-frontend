
import { motion } from 'framer-motion';
import {  FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebook} from 'react-icons/fa';

import SectionTitle from '../components/SectionTitle';

const contactInfo = [
  {
    icon: <FiPhone className="text-2xl" />,
    label: 'ফোন নম্বর',
    value: '+8801762121027',
    color: 'from-green-500 to-green-700',
  },
  
  {
    icon: <FiMapPin className="text-2xl" />,
    label: 'ঠিকানা',
    value: 'মতিন স্টিকার হাউস,নয়াবাজার',
    color: 'from-amber-500 to-amber-700',
  },
];

export default function Contact() {

  return (
    <div className="pt-20">
      {/* Header */}
      <section  className=" gradient-hero py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{marginTop:"50px"}}  className="text-6xl mb-4">📬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
            <p className="text-green-200 text-xl">
              আমাদের সাথে সরাসরি যোগাযোগ করুন — আপনার মতামত আমাদের কাছে গুরুত্বপূর্ণ
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle title="আমাদের তথ্য" subtitle="যেকোনো প্রশ্নে নিঃসংকোচে যোগাযোগ করুন" center={false} />

              <div className="space-y-4 mb-10">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-800 font-semibold mt-0.5">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social media */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <p className="font-bold text-gray-800 mb-4">সোশ্যাল মিডিয়া</p>
                <div className="flex gap-3">
                  <a
  href="https://www.facebook.com/abdulmotinhabib"
  target="_blank"
  rel="noopener noreferrer"
  style={{margin:"10px",paddingLeft:"10px",paddingRight:"10px"}}
  className="flex items-center gap-2 px-4 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
>
  <FaFacebook className="text-xl" />
  <span>Facebook</span>
</a>
                
      
                </div>
              </div>

              {/* Quote */}
              <motion.div 
              style={{marginBottom:"25px"}}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-8  bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-6 text-white"
              >
                <div className="text-4xl mb-3 text-green-300">"</div>
                <p className="italic text-green-100 leading-relaxed">
                  আপনার প্রতিটি মতামত ও পরামর্শ আমাদের কাছে অমূল্য।
                  একসাথে আমরা একটি সুন্দর বাংলাদেশ গড়তে পারব।
                </p>
                <p className="flex items-center justify-center  text-green-400 font-bold mt-3">— আব্দুল মতিন</p>
              </motion.div>
            </motion.div>

          
          </div>
        </div>
      </section>
    </div>
  );
}
