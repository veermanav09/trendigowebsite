
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import BookCallDialog from './BookCallDialog';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBookCall, setShowBookCall] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tighter" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Trendigo
                </h1>
                <p className="text-xs text-gray-500 font-light tracking-wide" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Digital Growth Agency</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {[
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Packages', href: '#packages' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium tracking-wide"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowBookCall(true)}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-sm hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center space-x-2 shadow-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <Phone size={16} />
                <span>Book a Call</span>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              {[
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Packages', href: '#packages' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, color: "#a855f7" }}
                  className="block py-3 text-gray-300 hover:text-white transition-all duration-300 font-medium tracking-wide"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => {
                  setShowBookCall(true);
                  setIsOpen(false);
                }}
                className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-semibold text-sm w-full flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
              >
                <Phone size={16} />
                <span>Book a Call</span>
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.nav>
      
      <BookCallDialog 
        isOpen={showBookCall}
        onClose={() => setShowBookCall(false)}
      />
    </>
  );
};

export default Navigation;
