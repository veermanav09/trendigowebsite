
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Target, Users, Zap, Star, Award } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const values = [
    {
      icon: TrendingUp,
      title: "Trend-Driven",
      description: "We stay ahead, spotting and leveraging trends before they go mainstream."
    },
    {
      icon: Zap,
      title: "Creativity with Purpose",
      description: "Every design and caption serves a clear business goal."
    },
    {
      icon: Target,
      title: "Agility",
      description: "We adapt fast in the ever-changing digital world."
    },
    {
      icon: Award,
      title: "Transparency",
      description: "We believe in clear communication and measurable results."
    },
    {
      icon: Users,
      title: "Growth-Oriented",
      description: "We focus on delivering real business growth, not just likes."
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6"
          >
            About Us
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Welcome to Trendigo - the social media agency that lives where the trends live.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Our Purpose</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Trendigo helps brands stay ahead of the curve by creating data-driven, trend-focused, 
                and impactful social media strategies.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To empower businesses of all sizes to grow their online presence by leveraging 
                current trends, creative storytelling, and strategic social media campaigns that 
                drive real engagement and results.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Vision</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                To become the leading force in trend-based digital marketing, known for turning 
                brands into movements and stories into influence.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our Core Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-start space-x-4 group"
                  >
                    <div className="p-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <value.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{value.title}</h4>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
            Let's trend together.
          </h3>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
