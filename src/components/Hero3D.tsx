
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero3D = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section 
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with logo image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
          <div 
            className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/lovable-uploads/77ca49e5-d22c-40ce-a2a3-4f8eac57b5cd.png')",
              backgroundSize: '40%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 blur-3xl"
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, -100, 0],
              y: [0, -100, 100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-60`}
            style={{
              top: `${20 + i * 10}%`,
              left: `${10 + i * 15}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Logo and brand centered */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center space-y-4 mb-8"
          >
            <motion.h1
              whileHover={{ 
                scale: 1.05,
                textShadow: "0px 0px 30px rgba(139, 92, 246, 0.8)"
              }}
              className="text-7xl md:text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent cursor-default tracking-tighter"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Trendigo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Ride the Trend. Rule the Feed.
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Transform your brand's digital presence with cutting-edge social media strategies. 
            We don't just follow trends—we create them, shape them, and help your brand dominate the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
                y: -4
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold text-lg flex items-center space-x-3 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <span>Start Your Journey</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "#8b5cf6",
                color: "#8b5cf6",
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-gray-700 rounded-2xl text-white font-semibold text-lg flex items-center space-x-3 transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <Play size={20} />
              </motion.div>
              <span>View Our Work</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ scale: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-12 border-2 border-purple-400 rounded-full flex justify-center hover:border-pink-400 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero3D;
