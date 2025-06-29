
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Star, TrendingUp, Users, BarChart, Zap, Target, Camera, Megaphone } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Social Media Management",
      icon: Instagram,
      color: "from-pink-500 to-red-500",
      description: "Complete management of your social media presence across all platforms",
      features: ["Content Strategy", "Daily Posting", "Community Management", "Analytics & Reporting"]
    },
    {
      title: "Content Creation",
      icon: Camera,
      color: "from-purple-500 to-pink-500",
      description: "High-quality graphics, reels, and short-form video content",
      features: ["Graphics Design", "Video Production", "Reel Creation", "Brand Photography"]
    },
    {
      title: "Influencer Marketing",
      icon: Users,
      color: "from-blue-500 to-purple-500",
      description: "Connect with the right influencers to amplify your brand message",
      features: ["Influencer Outreach", "Campaign Management", "Performance Tracking", "ROI Analysis"]
    },
    {
      title: "Paid Advertising",
      icon: Target,
      color: "from-green-500 to-blue-500",
      description: "Strategic paid campaigns across social media platforms",
      features: ["Ad Strategy", "Campaign Setup", "Budget Optimization", "Performance Analysis"]
    },
    {
      title: "Brand Strategy",
      icon: Zap,
      color: "from-yellow-500 to-red-500",
      description: "Comprehensive brand positioning and messaging strategy",
      features: ["Brand Positioning", "Voice & Tone", "Visual Identity", "Market Research"]
    },
    {
      title: "Trend Analysis",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500",
      description: "Real-time trend monitoring and campaign optimization",
      features: ["Trend Monitoring", "Real-time Campaigns", "Competitor Analysis", "Market Insights"]
    }
  ];

  return (
    <section id="services" ref={ref} className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6 font-mono tracking-wide"
            whileHover={{ scale: 1.05 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive social media solutions to elevate your brand presence
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-gray-600 transition-all duration-300 h-full">
                <div className="flex items-center space-x-4 mb-6">
                  <motion.div 
                    className={`p-3 bg-gradient-to-r ${service.color} rounded-xl`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon size={24} className="text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white font-mono">{service.title}</h3>
                </div>

                <p className="text-gray-400 mb-6 font-light">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <Star size={16} className="text-purple-400" />
                      <span className="text-gray-300 font-light">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
          >
            Book a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
