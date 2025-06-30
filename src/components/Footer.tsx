
import { motion } from 'framer-motion';
import { Instagram, Facebook, Youtube, Linkedin, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black to-slate-900 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight" 
                  style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
                Trendigo
              </h3>
              <p className="text-gray-400 mt-2 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Digital Growth Agency
              </p>
            </div>
            <p className="text-gray-400 leading-relaxed font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
              Transforming brands through innovative social media strategies and cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Youtube, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Social Media Strategy',
                'Content Creation',
                'Influencer Marketing',
                'Paid Advertising',
                'Analytics & Reporting',
                'Brand Consulting'
              ].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#services"
                    whileHover={{ x: 5, color: "#a855f7" }}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 font-light"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Services', href: '#services' },
                { name: 'Packages', href: '#packages' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'Contact', href: '#contact' },
                { name: 'Privacy Policy', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#a855f7" }}
                    className="text-gray-400 hover:text-purple-400 transition-all duration-300 font-light"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, Inter, system-ui, sans-serif' }}>
              Get in Touch
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    hello@trendigo.com
                  </p>
                  <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    support@trendigo.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  Global Digital Agency<br />
                  Serving Worldwide
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="text-purple-400 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-400 font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  24/7 Support Available
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm font-light" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            © {currentYear} Trendigo. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <motion.a
              href="#"
              whileHover={{ color: "#a855f7" }}
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors font-light"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ color: "#a855f7" }}
              className="text-gray-400 hover:text-purple-400 text-sm transition-colors font-light"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
