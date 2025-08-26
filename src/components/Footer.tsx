import { BookOpen, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import logo from '../lib/images/Edukripa_Logo.png';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white-600 p-1 rounded-lg">
                <img 
                src={logo} 
                alt="Logo" 
                style={{ width: "50px", height: "auto" }} />
              </div>
              <span className="text-2xl font-bold">Edukripa</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students to achieve academic excellence through personalized 
              tutoring and innovative teaching methods.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 transition-colors duration-200 cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors duration-200 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors duration-200 cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-300">Mathematics</span></li>
              <li><span className="text-gray-300">Physics</span></li>
              <li><span className="text-gray-300">Chemistry</span></li>
              <li><span className="text-gray-300">Biology</span></li>
              <li><span className="text-gray-300">English</span></li>
              <li><span className="text-gray-300">Social Studies</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-600">+91 93805 99034</p>
                  <p className="text-gray-600">+91 62065 50109</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">connect@edukripa.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-600">
                    Edukripa Tuition Point,<br />
                    2nd Floor, 28-234, 4th Cross Rd, <br />
                    Jayanagar housing society layout, <br />
                    Subramanyapura, Bengaluru - 560061
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Edukripa. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                Privacy Policy
              </span>
              <span className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                Terms of Service
              </span>
              <span className="text-gray-300 hover:text-white cursor-pointer transition-colors duration-200">
                Cookie Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;