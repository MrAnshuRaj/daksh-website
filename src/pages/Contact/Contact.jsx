import React, { useState } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { MdLocationPin, MdMail } from 'react-icons/md';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout';

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const GlassCard = ({ children, className = '' }) => (
  <motion.div
    className={`relative bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-sm border border-lime-600 rounded-3xl shadow-md ${className} will-change-transform`}
    initial="initial"
    whileInView="animate"
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    style={{ transformStyle: 'preserve-3d' }}
  >
    <div className="relative z-10">{children}</div>
  </motion.div>
);

const Contact = () => {
  const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { Name, Email, Message } = formData;
    if (!Name.trim() || !Email.trim() || !Message.trim()) {
      alert("Please fill all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("https://team-daksh-db.firebaseio.com/messages.json", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ Name, Email, Message, timestamp: new Date().toISOString() }),
      });
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ Name: "", Email: "", Message: "" });
      } else alert("Failed to send message.");
    } catch {
      alert("An error occurred. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-green-900 to-black relative pb-24" style={{ scrollBehavior: 'smooth' }}>
        <section className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12">
          <GlassCard className="flex-1 p-10">
            <motion.h2 className="text-3xl text-lime-300 font-extrabold mb-6" variants={fadeIn} initial="initial" animate="animate">
              Let's Connect
            </motion.h2>
            <motion.p className="text-gray-300 mb-10 leading-relaxed" variants={fadeIn}>
              Feel free to reach out with inquiries or feedback. We’re committed to timely responses.
            </motion.p>
            <motion.div variants={fadeIn} className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="bg-lime-600 p-3 rounded-full text-white flex items-center justify-center" style={{ minWidth: 60, minHeight: 60 }}>
                  <MdLocationPin size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-lime-300">Address</h3>
                  <p>National Institute of Technology, Jamshedpur</p>
                  <p>Adityapur, Jamshedpur, Jharkhand 831014</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-lime-600 p-3 rounded-full text-white flex items-center justify-center" style={{ minWidth: 60, minHeight: 60 }}>
                  <BsTelephone size={28} />
                </div>
                <p className="font-medium">+91 8210258224</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="bg-lime-600 p-3 rounded-full text-white flex items-center justify-center" style={{ minWidth: 60, minHeight: 60 }}>
                  <MdMail size={28} />
                </div>
                <p className="font-medium">daksh.nit@gmail.com</p>
              </div>
            </motion.div>
          </GlassCard>

          <GlassCard className="flex-1 p-10">
            <motion.h2 className="text-3xl text-lime-300 font-extrabold mb-6" variants={fadeIn}>Send us a Message</motion.h2>
            <motion.form onSubmit={handleSubmit} variants={fadeIn} initial="initial" animate="animate" className="space-y-6" noValidate>
              <input
                name="Name"
                type="text"
                placeholder="Your Name"
                value={formData.Name}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-black/40 border border-lime-600 px-4 py-3 text-white placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
              />
              <input
                name="Email"
                type="email"
                placeholder="Your Email"
                value={formData.Email}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-black/40 border border-lime-600 px-4 py-3 text-white placeholder-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
              />
              <textarea
                name="Message"
                placeholder="Your Message"
                rows={5}
                value={formData.Message}
                onChange={handleChange}
                required
                className="w-full rounded-lg bg-black/40 border border-lime-600 px-4 py-3 text-white placeholder-lime-400 resize-none focus:outline-none focus:ring-2 focus:ring-lime-500 transition"
              />
              <button
                type="submit"
                disabled={false}
                className="w-full bg-lime-600 hover:bg-lime-700 text-black font-semibold py-3 rounded transition cursor-pointer disabled:cursor-not-allowed"
              >
                Send Message
              </button>
            </motion.form>
          </GlassCard>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
