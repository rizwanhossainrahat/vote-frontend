import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-green-900 via-green-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                🏺
              </div>
              <div>
                <p className="font-bold text-xl">আব্দুল মতিন</p>
                <p className="text-green-300 text-sm">কলসি মার্কায় ভোট দিন</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              একটি সুন্দর, সমৃদ্ধ ও উন্নত বাংলাদেশের স্বপ্নে — আব্দুল মতিনকে
              ভোট দিন।
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-bold text-lg mb-4 text-green-300">Quick Links</p>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
                { label: 'Reward Campaign', to: '/reward' },
              
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-green-400 text-sm transition-colors"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & contact */}
          <div>
            <p className="font-bold text-lg mb-4 text-green-300">Follow Us</p>
            <div className="flex gap-4 mb-6">
              <a
  href="https://www.facebook.com/abdulmotinhabib"
  target="_blank"
  rel="noopener noreferrer"
  style={{paddingRight:"10px"}}
  className="flex items-center gap-2 px-4 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
>
  <FaFacebook className="text-xl" />
  <span>Facebook</span>
</a>
             
             
            </div>
            <p className="text-white-400 text-sm">
              📞 যোগাযোগ: <span className="text-white">+8801762121027</span>
            </p>
            <p className="text-white text-sm mt-1">
              📍  মতিন স্টিকার হাউস,নয়াবাজার
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {year} আব্দুল মতিন -কলসি মার্কায় ভোট দিন. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made by Rizwan Hossain Rahat 
          </p>
         <p>Contact:+8801861738648</p>
        </div>
         
      </div>
    </footer>
  );
}
