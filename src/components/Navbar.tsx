import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <img
              src="/ju global logo blue.pdf"
              alt="JU GLOBAL"
              className="h-12 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#why-us" className="text-gray-700 hover:text-blue-600 transition-colors">Why Choose Us</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <a href="#home" className="block py-2 text-gray-700 hover:text-blue-600">Home</a>
            <a href="#services" className="block py-2 text-gray-700 hover:text-blue-600">Services</a>
            <a href="#about" className="block py-2 text-gray-700 hover:text-blue-600">About</a>
            <a href="#experience" className="block py-2 text-gray-700 hover:text-blue-600">Experience</a>
            <a href="#why-us" className="block py-2 text-gray-700 hover:text-blue-600">Why Choose Us</a>
            <a href="#contact" className="block py-2 text-blue-600 font-semibold">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}
