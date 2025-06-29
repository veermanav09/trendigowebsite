import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, TrendingUp, Lock, CheckCircle, ArrowRight } from 'lucide-react';

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPackages, setShowPackages] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    currentFollowers: '',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setShowPackages(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const packages = [
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

  return (
    <section id="packages" ref={ref} className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            Packages & Pricing
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {showPackages ? "Choose the perfect package for your brand's growth" : "Tell us about your business to unlock our exclusive packages"}
          </motion.p>
        </motion.div>

        {!showPackages ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700">
              <div className="text-center mb-8">
                <Lock size={48} className="mx-auto text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2 font-mono">Unlock Your Custom Packages</h3>
                <p className="text-gray-400 font-light">Share your business details to see personalized pricing</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                      placeholder="Your business name"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Industry</label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300"
                    >
                      <option value="">Select your industry</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="technology">Technology</option>
                      <option value="food">Food & Beverage</option>
                      <option value="fashion">Fashion</option>
                      <option value="fitness">Fitness</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-gray-300 text-sm font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                      placeholder="+91 your phone number"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Current Social Media Followers</label>
                  <select
                    name="currentFollowers"
                    value={formData.currentFollowers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white focus:border-purple-500 focus:outline-none transition-all duration-300"
                  >
                    <option value="">Select follower range</option>
                    <option value="0-1k">0 - 1K</option>
                    <option value="1k-10k">1K - 10K</option>
                    <option value="10k-50k">10K - 50K</option>
                    <option value="50k-100k">50K - 100K</option>
                    <option value="100k+">100K+</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label className="block text-gray-300 text-sm font-semibold mb-2">Your Goals</label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your social media goals..."
                  ></textarea>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl text-white font-semibold text-lg flex items-center justify-center space-x-2 hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <span>Unlock My Packages</span>
                  <ArrowRight size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-8">
              <CheckCircle size={48} className="mx-auto text-green-400 mb-4" />
              <p className="text-green-400 font-semibold">Thank you! Here are your personalized packages:</p>
            </div>

            {/* Service Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-20">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 group-hover:border-gray-600 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-3 bg-gradient-to-r ${pkg.color} rounded-xl`}>
                        <pkg.icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white font-mono">{pkg.title}</h3>
                    </div>

                    {pkg.platforms && (
                      <div className="flex space-x-2 mb-6">
                        {pkg.platforms.map((Platform, idx) => (
                          <Platform key={idx} size={20} className="text-gray-400" />
                        ))}
                      </div>
                    )}

                    <div className="space-y-6">
                      {pkg.plans.map((plan, planIndex) => (
                        <div key={plan.name} className="border-t border-gray-700 pt-4 first:border-t-0 first:pt-0">
                          <h4 className="text-lg font-semibold text-white mb-2 font-mono">{plan.name}</h4>
                          <p className="text-gray-400 text-sm mb-3 font-light">{plan.description}</p>
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-3xl p-8 border border-purple-500/30"
            >
              <h3 className="text-3xl font-bold text-center text-white mb-8 font-mono">Subscription Packages</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {subscriptionPackages.map((pkg, index) => (
                  <div key={pkg.title} className="text-center space-y-4">
                    <h4 className="text-xl font-semibold text-white font-mono">{pkg.title}</h4>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      {pkg.price}
                    </p>
                    <p className="text-gray-400 font-light">{pkg.description}</p>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 mt-6 text-sm">*combo package is not included</p>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Packages;
