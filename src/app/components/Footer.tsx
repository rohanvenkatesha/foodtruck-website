import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      {/* Contact & Hours Section */}
      <section id="contact" className="bg-gray-100 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            Find Us & Contact
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Contact Info */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong>{' '}
                <a href="mailto:masalamagicbyanita@gmail.com" className="text-blue-600 hover:underline">
                  masalamagicbyanita@gmail.com
                </a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong>{' '}
                <a href="tel:+12313138934" className="text-blue-600 hover:underline">
                  (231) 313-8934
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Location:</strong>
                <br />
                11595 US-31 S <br />
                Williamsburg MI 49690 <br />
                At Townline Ciderworks
              </p>
              <p className="mt-4 text-gray-600 text-sm">
                For definitions of many Indian food terms, see our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  glossary
                </a>
                . (Note: Link is a placeholder)
              </p>
            </motion.div>

            {/* Hours */}
            <motion.div
              className="bg-white p-8 rounded-xl shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">Operating Hours</h3>
              <ul className="text-gray-700 space-y-2">
                <li><strong className="w-24 inline-block">Monday:</strong> 3 - 6 pm</li>
                <li><strong className="w-24 inline-block">Thursday:</strong> 3 - 8 pm</li>
                <li><strong className="w-24 inline-block">Friday:</strong> 3 - 8 pm</li>
                <li><strong className="w-24 inline-block">Saturday:</strong> 12 - 8 pm</li>
                <li><strong className="w-24 inline-block">Sunday:</strong> 12 - 6 pm</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <p>Copyright © {new Date().getFullYear()} Masala Magic by Anita. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Follow us on social media for daily updates!</p>
          {/* Add social media icons/links here */}
        </div>
      </footer>
    </>
  );
}