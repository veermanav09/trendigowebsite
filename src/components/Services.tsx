
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, TrendingUp, Users, Target, Zap, BarChart, MessageCircle, Camera, Edit3 } from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Camera,
      title: "Content Creation",
      description: "Stunning visuals and compelling copy that stops the scroll and drives engagement across all platforms.",
      features: ["Professional Photography", "Graphic Design", "Video Production", "Copywriting"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: TrendingUp,
      title: "Strategy & Planning",
      description: "Data-driven strategies tailored to your brand's unique voice and goals for maximum impact.",
      features: ["Content Strategy", "Brand Positioning", "Competitive Analysis", "Growth Planning"],
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Build and nurture engaged communities that convert followers into loyal customers.",
      features: ["Daily Engagement", "Community Building", "Influencer Relations", "Crisis Management"],
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Target,
      title: "Paid Advertising",
      description: "Precision-targeted campaigns that maximize ROI and accelerate your growth trajectory.",
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Campaign Optimization"],
      color: "from-green-500 to-blue-500"
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Comprehensive insights and actionable data to continuously improve your social media performance.",
      features: ["Performance Tracking", "ROI Analysis", "Competitor Monitoring", "Monthly Reports"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Trend Monitoring",
      description: "Stay ahead of the curve with real-time trend analysis and rapid content adaptation.",
      features: ["Trend Analysis", "Viral Content Creation", "Platform Updates", "Market Research"],
      color: "from-purple-500 to-blue-500"
    }
  ];

  const platforms = [
    { name: "Instagram", icon: Instagram, description: "Visual storytelling that captivates and converts" },
    { name: "Facebook", icon: Facebook, description: "Community building and targeted reach" },
    { name: "YouTube", icon: Youtube, description: "Video content that educates and entertains" },
    { name: "LinkedIn", icon: Linkedin, description: "Professional networking and B2B growth" },
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tighter"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            whileHover={{ scale: 1.02 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive digital marketing solutions designed to elevate your brand and dominate your market
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500 h-full shadow-2xl">
                <div className={`p-4 bg-gradient-to-r ${service.color} rounded-2xl w-fit mb-6 shadow-lg`}>
                  <service.icon size={32} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-6 font-light leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-purple-900/20 rounded-3xl p-12 border border-purple-500/30"
        >
          <h3 className="text-4xl font-bold text-center text-white mb-12 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Platforms We Master
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="bg-gray-800/50 rounded-2xl p-6 group-hover:bg-gray-800/70 transition-all duration-300">
                  <platform.icon size={48} className="mx-auto mb-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  <h4 className="text-xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {platform.name}
                  </h4>
                  <p className="text-gray-400 text-sm font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    {platform.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
