
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Fashion Forward Co.",
      role: "CEO",
      content: "Trendigo transformed our social media presence completely. Our engagement increased by 400% in just 3 months!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "TechStart Inc.",
      role: "Marketing Director",
      content: "The strategies they implemented helped us gain 50K followers organically. Their content creation is top-notch!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Priya Sharma",
      company: "Wellness Hub",
      role: "Founder",
      content: "From zero to viral - Trendigo made our brand a household name. The ROI has been incredible!",
      rating: 5,
      avatar: "PS"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-slate-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tighter"
            style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            whileHover={{ scale: 1.02 }}
          >
            Success Stories
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            See how we've helped brands achieve extraordinary growth
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 group-hover:border-purple-500/50 transition-all duration-500 h-full">
                <Quote className="text-purple-400 mb-4" size={32} />
                
                <p className="text-gray-300 text-lg mb-6 font-light leading-relaxed" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
