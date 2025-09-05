import React from 'react';
import { Link } from 'react-router-dom';
import { BsTelephone } from 'react-icons/bs';
import { MdLocationPin, MdMail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer 
      className="relative bg-gradient-to-t from-black/90 via-green-900/70 to-black/90 backdrop-blur-md text-gray-200"
      style={{ borderTop: '1.5px solid rgba(101, 163, 13, 0.4)' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-wrap md:flex-nowrap justify-between gap-12">
          {/* Quick Links */}
          <div className="flex-1">
            <h3 className="text-lime-400 uppercase tracking-widest font-semibold mb-6 text-lg">
              Quick Links
            </h3>
            <nav className="flex flex-wrap gap-4 text-gray-200">
              {[
                { name: 'Home', to: '/' },
                { name: 'About', to: '/about' },
                { name: 'Team', to: '/ourteam' },
                { name: 'Achievements', to: '/achivements' },
                { name: 'Contact Us', to: '/contact' }
              ].map(({ name, to }) => (
                <Link 
                  key={to} 
                  to={to} 
                  className="hover:text-lime-500 transition-colors duration-300 font-medium"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* About Section */}
          <div className="flex-1 max-w-md">
            <h3 className="text-lime-400 uppercase tracking-widest font-semibold mb-6 text-lg">
              About
            </h3>
            <p className="text-gray-300 leading-relaxed">
              We participate in SAE Collegiate competitions like BAJA SAEINDIA & 
              BAJA SAE International, pushing boundaries and engineering excellence.
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex-1 max-w-sm">
            <h3 className="text-lime-400 uppercase tracking-widest font-semibold mb-6 text-lg">
              Contact Info
            </h3>
            <address className="not-italic text-gray-300 space-y-4">
              <div className="flex items-start gap-4">
                <MdLocationPin className="text-lime-500 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p>National Institute of Technology Jamshedpur</p>
                  <p>Adityapur, Jamshedpur, Jharkhand 831014</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <BsTelephone className="text-lime-500 flex-shrink-0" size={20} />
                <a 
                  href="tel:+918210258224" 
                  className="hover:text-lime-500 transition-colors duration-300"
                >
                  +91 8210258224
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <MdMail className="text-lime-500 flex-shrink-0" size={20} />
                <a 
                  href="mailto:daksh.nitjsr@nitjsr.ac.in" 
                  className="hover:text-lime-500 transition-colors duration-300"
                >
                  daksh.nitjsr@nitjsr.ac.in
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-lime-600/40 mt-12 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">
          <span>
            Designed & Developed by{' '}
            <a href="#" className="text-lime-400 hover:text-lime-300 hover:underline transition-colors duration-300">
              Anshu Raj (Web Head, Team Daksh)
            </a>
          </span>
          
          <span>
            © 2024 NIT Jamshedpur —{' '}
            <a 
              href="https://www.teamdaksh.com" 
              target="_blank" 
              rel="noreferrer" 
              className="text-lime-400 hover:text-lime-300 hover:underline transition-colors duration-300"
            >
              www.teamdaksh.com
            </a>
          </span>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a 
              href="https://www.facebook.com/teamdaksh.nitjsr/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-lime-500 transition-colors duration-300" 
              aria-label="Facebook"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/team.daksh/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-lime-500 transition-colors duration-300" 
              aria-label="Instagram"
            >
              <svg fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            
            <a 
              href="https://in.linkedin.com/company/teamdaksh" 
              target="_blank" 
              rel="noreferrer" 
              className="text-gray-400 hover:text-lime-500 transition-colors duration-300" 
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
