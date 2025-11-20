import 'react-toastify/dist/ReactToastify.css';

import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhone } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

import Button from '../components/Button';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { socialMedia } from '../data/socialMedia';
import { useState } from 'react';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields!');
      return;
    }

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      toast.error('Email service is temporarily unavailable. Please try again later.');
      return;
    }

    setIsLoading(true);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Ravidu Peiris'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'ravidupeiris2002@gmail.com',
      link: 'mailto:ravidupeiris2002@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '(+94) 77 050 7510',
      link: 'tel:+94770507510'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Panadura, Sri Lanka',
      link: null
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom section-padding">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card>
            <motion.form
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Send Me a Message
              </h3>

              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Annon Smith"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="annon@example.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full"
                icon={<FaPaperPlane />}
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </Button>
            </motion.form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                Contact Information
              </h3>

              {/* Contact Info Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} hover={false}>
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                          <Icon className="text-primary-600 dark:text-primary-400 text-xl" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-900 dark:text-gray-100 font-semibold hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-gray-100 font-semibold">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Social Media Links */}
              <Card className="bg-gradient-to-br from-primary-500 to-blue-600 text-white">
                <h4 className="text-xl font-bold mb-4">Connect With Me</h4>
                <p className="mb-6 opacity-90">
                  Follow me on social media for updates and more content
                </p>
                <div className="flex flex-wrap gap-4">
                  {socialMedia.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                        aria-label={social.name}
                      >
                        <Icon size={24} />
                      </motion.a>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Contact;
