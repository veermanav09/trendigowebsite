
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
      {/* Softened background gradient */}
      <div className="absolute inset-0 z-10">
        <div className="w-full h-full bg-gradient-to-br from-slate-800 via-blue-900/20 to-slate-800">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
      </div>

      {/* Lightweight animated background elements */}
      <div className="absolute inset-0 z-15">
        {/* Soft central glow */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl"
        />
        
        {/* Minimal floating particles for digital feel */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 50, -50, 0],
              y: [0, -30, 30, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute w-0.5 h-0.5 rounded-full bg-blue-300/60"
            style={{
              top: `${25 + (i * 8) % 50}%`,
              left: `${15 + (i * 12) % 70}%`,
            }}
          />
        ))}

        {/* Digital grid lines - very subtle */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Subtle geometric shapes for agency vibe */}
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-300/10 rounded-lg"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/5 w-12 h-12 border border-purple-300/10 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main heading with better spacing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center space-y-6 mb-12"
          >
            <motion.h1
              whileHover={{ 
                scale: 1.02,
                textShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)"
              }}
              className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent cursor-default tracking-tighter leading-tight pb-4"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            >
              TrendiGo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light tracking-wide"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            >
              Ride the Trend. Rule the Feed.
            </motion.p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light mb-12"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            Transform your brand's digital presence with cutting-edge social media strategies. 
            We don't just follow trends—we create them, shape them, and help your brand dominate the digital landscape.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                y: -4
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white font-semibold text-lg flex items-center space-x-3 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-xl"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            >
              <span>Start Your Journey</span>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={20} />
              </motion.div>
            </motion.a>

            <motion.button
              whileHover={{ 
                scale: 1.05,
                borderColor: "#60a5fa",
                color: "#60a5fa",
                boxShadow: "0 15px 25px -5px rgba(59, 130, 246, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-gray-600 rounded-2xl text-white font-semibold text-lg flex items-center space-x-3 transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
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

      {/* Softened scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-6 h-12 border-2 border-blue-300/60 rounded-full flex justify-center hover:border-purple-300/60 transition-colors duration-300"
        >
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="w-1.5 h-4 bg-gradient-to-b from-blue-300/60 to-purple-300/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero3D;
