
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense } from 'react';

const FloatingElements = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1, 16, 16]} position={[-4, 2, -2]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            distort={0.3}
            speed={1.5}
            roughness={0.4}
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={2} floatIntensity={1}>
        <Sphere args={[0.7, 16, 16]} position={[4, -1, -1]}>
          <MeshDistortMaterial
            color="#ec4899"
            distort={0.2}
            speed={1}
            roughness={0.4}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.2} rotationIntensity={0.5} floatIntensity={3}>
        <Sphere args={[0.5, 16, 16]} position={[2, 3, -3]}>
          <MeshDistortMaterial
            color="#06b6d4"
            distort={0.25}
            speed={2}
            roughness={0.4}
          />
        </Sphere>
      </Float>
    </>
  );
};

const Hero3D = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <motion.section 
      style={{ y, opacity }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.4} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
            <FloatingElements />
            <OrbitControls 
              enableZoom={false} 
              enablePan={false} 
              autoRotate 
              autoRotateSpeed={0.5}
              enableDamping
              dampingFactor={0.05}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Background with enhanced overlay */}
      <div className="absolute inset-0 z-10">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900">
          <div 
            className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/lovable-uploads/77ca49e5-d22c-40ce-a2a3-4f8eac57b5cd.png')",
              backgroundSize: '50%',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70"></div>
        </div>
      </div>

      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 z-15">
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
        
        {/* Enhanced floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 200 * Math.sin(i), -200 * Math.cos(i), 0],
              y: [0, -200 * Math.cos(i), 200 * Math.sin(i), 0],
              scale: [1, 1.5, 0.8, 1],
              rotate: [0, 360],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 25 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
            style={{
              top: `${20 + (i * 5) % 60}%`,
              left: `${10 + (i * 7) % 80}%`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)'
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
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col items-center space-y-4 mb-8"
          >
            <motion.h1
              whileHover={{ 
                scale: 1.02,
                textShadow: "0px 0px 30px rgba(139, 92, 246, 0.8)"
              }}
              className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent cursor-default tracking-tighter leading-tight"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            >
              TrendiGo
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 font-light tracking-wide"
              style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
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
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.5)",
                y: -4
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-semibold text-lg flex items-center space-x-3 hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl"
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
                borderColor: "#8b5cf6",
                color: "#8b5cf6",
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border-2 border-gray-700 rounded-2xl text-white font-semibold text-lg flex items-center space-x-3 transition-all duration-300 backdrop-blur-sm"
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
