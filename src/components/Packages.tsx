import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Instagram, Facebook, Youtube, Linkedin, TrendingUp, Lock, CheckCircle, ArrowRight, User, Mail, Phone, Building, Target, MessageSquare } from 'lucide-react';

const Packages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showPackages, setShowPackages] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    currentFollowers: '',
    goals: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Once Supabase is connected, replace this with actual database call
    console.log('Package unlock form submitted:', formData);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
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
      title: "Instagram Mastery",
      icon: Instagram,
      color: "from-pink-500 to-red-500",
      description: "Dominate Instagram with viral content and strategic growth",
      plans: [
        {
          name: "Strategy Foundation",
          description: "Complete content strategy & growth roadmap",
          marketPrice: "₹15,000",
          trendigoPrice: "₹10,000",
          features: ["Content Strategy", "Hashtag Research", "Competitor Analysis", "Growth Roadmap"]
        },
        {
          name: "Full-Service Growth",
          description: "End-to-end Instagram management & content creation",
          marketPrice: "₹20,000",
          trendigoPrice: "₹16,000",
          features: ["Everything in Strategy", "Content Creation", "Daily Posting", "Community Management"]
        }
      ]
    },
    {
      title: "Meta Ecosystem",
      icon: Facebook,
      color: "from-blue-500 to-purple-500",
      description: "Maximize reach across Facebook & Instagram platforms",
      plans: [
        {
          name: "Strategy Foundation",
          description: "Comprehensive Meta platform strategy",
          marketPrice: "₹18,000",
          trendigoPrice: "₹12,000",
          features: ["Cross-Platform Strategy", "Audience Research", "Campaign Planning", "Analytics Setup"]
        },
        {
          name: "Full-Service Growth",
          description: "Complete Meta ecosystem management",
          marketPrice: "₹25,000",
          trendigoPrice: "₹18,000",
          features: ["Everything in Strategy", "Content Creation", "Ad Management", "Lead Generation"]
        }
      ]
    },
    {
      title: "Omnichannel Domination",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Rule every social platform with unified strategy",
      platforms: [Instagram, Facebook, Youtube, Linkedin],
      plans: [
        {
          name: "Strategy Foundation",
          description: "Unified strategy across all major platforms",
          marketPrice: "₹25,000",
          trendigoPrice: "₹20,000",
          features: ["Omnichannel Strategy", "Platform Optimization", "Content Calendar", "Performance Tracking"]
        },
        {
          name: "Full-Service Growth",
          description: "Complete social media ecosystem management",
          marketPrice: "₹35,000",
          trendigoPrice: "₹25,000",
          features: ["Everything in Strategy", "Content Creation", "Community Management", "Influencer Outreach"]
        }
      ]
    }
  ];

  return (
    <section id="packages" ref={ref} className="py-24 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900">
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
            Growth Packages
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {showPackages ? "Choose your path to digital dominance" : "Unlock exclusive packages tailored to your brand's unique needs"}
          </motion.p>
        </motion.div>

        {!showPackages ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
              <div className="text-center mb-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-auto mb-6"
                >
                  <Lock size={64} className="text-purple-400" />
                </motion.div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Unlock Your Custom Growth Plan
                </h3>
                <p className="text-gray-400 text-lg font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Tell us about your brand to reveal personalized packages and pricing
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label className="block text-gray-300 text-sm font-bold mb-3 flex items-center">
                      <User size={16} className="mr-2 text-purple-400" />
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Your brand name"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <label className="block text-gray-300 text-sm font-bold mb-3 flex items-center">
                      <Building size={16} className="mr-2 text-purple-400" />
                      Industry
                    </label>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                      <option value="">Select your industry</option>
                      <option value="ecommerce">E-commerce & Retail</option>
                      <option value="healthcare">Healthcare & Wellness</option>
                      <option value="technology">Technology & SaaS</option>
                      <option value="food">Food & Beverage</option>
                      <option value="fashion">Fashion & Lifestyle</option>
                      <option value="fitness">Fitness & Sports</option>
                      <option value="education">Education & Training</option>
                      <option value="finance">Finance & Banking</option>
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
                    <label className="block text-gray-300 text-sm font-bold mb-3 flex items-center">
                      <Mail size={16} className="mr-2 text-purple-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    <label className="block text-gray-300 text-sm font-bold mb-3 flex items-center">
                      <Phone size={16} className="mr-2 text-purple-400" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="+91 98765 43210"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label className="block text-gray-300 text-sm font-bold mb-3 flex items-center">
                    <TrendingUp size={16} className="mr-2 text-purple-400" />
                    Current Social Media Following
                  </label>
                  <select
                    name="currentFollowers"
                    value={formData.currentFollowers}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    <option value="">Select follower range</option>
                    <option value="0-1k">Just Starting (0 - 1K)</option>
                    <option value="1k-10k">Growing (1K - 10K)</option>
                    <option value="10k-50k">Established (10K - 50K)</option>
                    <option value="50k-100k">Influencer (50K - 100K)</option>
                    <option value="100k+">Celebrity (100K+)</option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label className="block text-gray-300 text-sm font-bold mb-3 flex items-center">
                    <Target size={16} className="mr-2 text-purple-400" />
                    Your Growth Goals
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your social media goals, target audience, and what success looks like for your brand..."
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  />
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Analyzing Your Brand...</span>
                    </>
                  ) : (
                    <>
                      <span>Unlock My Growth Packages</span>
                      <ArrowRight size={20} />
                    </>
                  )}
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
            <div className="text-center mb-12">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <CheckCircle size={64} className="text-green-400 mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Perfect! Here are your personalized packages:
              </h3>
              <p className="text-green-400 font-semibold" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Tailored specifically for {formData.businessName}
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={pkg.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group"
                >
                  <div className="relative bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500 shadow-2xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`p-4 bg-gradient-to-r ${pkg.color} rounded-2xl shadow-lg`}>
                        <pkg.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {pkg.title}
                        </h3>
                        <p className="text-gray-400 text-sm font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                          {pkg.description}
                        </p>
                      </div>
                    </div>

                    {pkg.platforms && (
                      <div className="flex space-x-3 mb-6">
                        {pkg.platforms.map((Platform, idx) => (
                          <div key={idx} className="p-2 bg-gray-800 rounded-lg">
                            <Platform size={16} className="text-gray-400" />
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="space-y-6">
                      {pkg.plans.map((plan, planIndex) => (
                        <div key={plan.name} className="border-t border-gray-800 pt-6 first:border-t-0 first:pt-0">
                          <h4 className="text-xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {plan.name}
                          </h4>
                          <p className="text-gray-400 text-sm mb-4 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            {plan.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 mb-4">
                            <span className="text-gray-500 text-sm line-through">
                              {plan.marketPrice}
                            </span>
                            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                              {plan.trendigoPrice}
                            </span>
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full">
                              SAVE {Math.round((1 - parseInt(plan.trendigoPrice.replace(/[^\d]/g, '')) / parseInt(plan.marketPrice.replace(/[^\d]/g, ''))) * 100)}%
                            </span>
                          </div>

                          {plan.features && (
                            <ul className="space-y-2">
                              {plan.features.map((feature, idx) => (
                                <li key={idx} className="text-gray-300 text-sm flex items-center" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                  <CheckCircle size={12} className="text-green-400 mr-2 flex-shrink-0" />
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Packages;
