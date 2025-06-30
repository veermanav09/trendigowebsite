
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store contact form data in Supabase
      const response = await fetch('/api/store-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact form submitted successfully');
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        console.error('Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
    
    setIsSubmitting(false);
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 tracking-tighter"
            style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
            whileHover={{ scale: 1.02 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your digital presence? Let's discuss your vision and create something extraordinary together.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                Get in Touch
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Whether you're a startup looking to make your mark or an established brand ready to dominate social media, we're here to help you achieve extraordinary results.
              </p>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="p-3 bg-purple-600 rounded-xl">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                    Email Us
                  </h4>
                  <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    hello@trendigo.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="p-3 bg-pink-600 rounded-xl">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                    Global Reach
                  </h4>
                  <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Serving clients worldwide
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-center space-x-4 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50 backdrop-blur-sm"
              >
                <div className="p-3 bg-cyan-600 rounded-xl">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                    Response Time
                  </h4>
                  <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Within 24 hours
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                    Message Sent!
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="John Doe"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                        placeholder="john@example.com"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300"
                      placeholder="Let's discuss my project"
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm font-bold mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-5 py-4 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, goals, and how we can help you achieve extraordinary results..."
                      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-3 shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={20} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
