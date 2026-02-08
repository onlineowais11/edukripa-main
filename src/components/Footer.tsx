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

      {/* 🔽 SEO KEYWORD SECTION (NEW) */}
      <div className="bg-gray-950 py-12 border-b border-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Academic Tuition for Classes 4 to 12 in Bengaluru
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Edukripa provides structured academic tuitions for school students
            from Classes 4 to 12 across Mathematics, Science, Languages,
            Commerce, and Computer Science. Our teaching focuses on concept
            clarity, strong fundamentals, and exam preparation to help students
            improve academic performance.
          </p>

          <p className="text-gray-400 mt-4">
            Offline tuition available in Subramanyapura, Bengaluru and online
            classes available for students across India.
          </p>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-1 rounded-lg">
                <img src={logo} alt="Edukripa Academic Tuition" style={{ width: "50px" }} />
              </div>
              <span className="text-2xl font-bold">Edukripa</span>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Academic tuition institute helping school students improve marks,
              build strong concepts, and perform confidently in exams.
            </p>

            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="bg-blue-400 p-2 rounded-lg hover:bg-blue-500 cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 cursor-pointer">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Academic Tuition</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white">About</button></li>
              <li><button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white">Subjects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact</button></li>
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subjects Offered</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Mathematics Tuition</li>
              <li>Science Tuition</li>
              <li>English Tuition</li>
              <li>Commerce Tuition</li>
              <li>Computer Science Tuition</li>
              <li>Classes 4–12 Tuition</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tuition Center Contact</h3>
            <div className="space-y-4">

              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>+91 93805 99034</p>
                  <p>+91 62065 50109</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-blue-400 mt-1" />
                <p className="text-gray-300">connect@edukripa.com</p>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                <p className="text-gray-300">
                  Edukripa Tuition Point,<br />
                  Subramanyapura,<br />
                  Bengaluru – 560061
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Edukripa Academic Tuition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
