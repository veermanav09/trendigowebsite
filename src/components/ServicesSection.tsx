
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, Star, TrendingUp, Users, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      title: "Instagram",
      icon: Instagram,
      color: "from-pink-500 to-red-500",
      plans: [
        {
          name: "Basic Plan",
          description: "Strategy only (no creation/posting)",
          marketPrice: "Rs. 15,000",
          trendigoPrice: "Rs. 10,000"
        },
        {
          name: "Premium Plan",
          description: "End-to-End (Strategy, Content, Posting)",
          marketPrice: "Rs. 20,000",
          trendigoPrice: "Rs. 16,000"
        }
      ]
    },
    {
      title: "Meta (Facebook & Instagram)",
      icon: Facebook,
      color: "from-blue-500 to-purple-500",
      plans: [
        {
          name: "Basic Plan",
          description: "Strategy only (no creation/posting)",
          marketPrice: "Rs. 18,000",
          trendigoPrice: "Rs. 12,000"
        },
        {
          name: "Premium Plan",
          description: "End-to-End (Strategy, Content, Posting)",
          marketPrice: "Rs. 25,000",
          trendigoPrice: "Rs. 18,000"
        }
      ]
    },
    {
      title: "Combo (All Platforms)",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      platforms: [Instagram, Facebook, Youtube, Linkedin],
      plans: [
        {
          name: "Basic Plan",
          description: "Strategy only (no creation/posting)",
          marketPrice: "Rs. 25,000",
          trendigoPrice: "Rs. 20,000"
        },
        {
          name: "Premium Plan",
          description: "End-to-End (Strategy, Content, Posting)",
          marketPrice: "Rs. 35,000",
          trendigoPrice: "Rs. 25,000"
        }
      ]
    }
  ];

  const subscriptionPackages = [
    {
      title: "Basic Plan (Any Package)",
      price: "Rs. 25,000 for 3 months",
      description: "3-Month Commitment packages"
    },
    {
      title: "Premium Plan (Any Package)",
      price: "Rs. 40,000 for 3 months",
      description: "3-Month Commitment packages"
    }
  ];

  const offerings = [
    "Social Media Management (Instagram, LinkedIn, Facebook, etc.)",
    "Influencer Marketing",
    "Content Creation (Graphics, Reels, Short-Form Video)",
    "Paid Ads & Campaign Strategy",
    "Brand Strategy & Positioning",
    "Trend Analysis & Real-Time Campaigns",
    "Analytics & Reporting"
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
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            Service Packages
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Price per month - Choose the perfect package for your brand's growth
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                   style={{ background: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}></div>
              
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${service.color} rounded-xl`}>
                    <service.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>

                {service.platforms && (
                  <div className="flex space-x-2 mb-6">
                    {service.platforms.map((Platform, idx) => (
                      <Platform key={idx} size={20} className="text-gray-400" />
                    ))}
                  </div>
                )}

                <div className="space-y-6">
                  {service.plans.map((plan, planIndex) => (
                    <div key={plan.name} className="border-t border-gray-700 pt-4 first:border-t-0 first:pt-0">
                      <h4 className="text-lg font-semibold text-white mb-2">{plan.name}</h4>
                      <p className="text-gray-400 text-sm mb-3">{plan.description}</p>
                      <div className="space-y-1">
                        <p className="text-gray-500 text-sm line-through">Market Price: {plan.marketPrice}</p>
                        <p className="text-green-400 font-semibold">Trendigo Price: {plan.trendigoPrice}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscription Packages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/30 mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">Subscription Packages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {subscriptionPackages.map((pkg, index) => (
              <div key={pkg.title} className="text-center space-y-4">
                <h4 className="text-xl font-semibold text-white">{pkg.title}</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {pkg.price}
                </p>
                <p className="text-gray-400">{pkg.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">*combo package is not included</p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-4xl font-bold text-white mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1 }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <Star size={20} className="text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{offering}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
