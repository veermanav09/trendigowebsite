
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="/lovable-uploads/77ca49e5-d22c-40ce-a2a3-4f8eac57b5cd.png" 
                alt="Trendigo Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-wide">
                Trendigo
              </h1>
              <p className="text-xs text-gray-400 font-light italic">Ride the Trend. Rule the Feed.</p>
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
                  scale: 1.1,
                  y: -2,
                  textShadow: "0px 0px 8px rgba(168, 85, 247, 0.8)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-gray-300 hover:text-white transition-all duration-300 relative group font-medium"
              >
                {item.name}
                <motion.span 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-sm hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
            >
              Book a Call
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
                className="block py-2 text-gray-300 hover:text-white transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-sm w-full"
            >
              Book a Call
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
