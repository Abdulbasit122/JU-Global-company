import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <img
              src="/ju global logo blue.pdf"
              alt="JU GLOBAL"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted sourcing and trade service partner in China
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#why-us" className="text-gray-400 hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Industry Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Chemical & Textile</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Consumer Electronics</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Home Goods</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Machinery</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Food Processing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Packaging</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400 text-sm">Century Avenue 100, IFC, Pudong Shanghai</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+86 189 1690 9892</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">juglobal2022@gmail.com</span>
              </li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} JU GLOBAL. All rights reserved. | Global Vision · China Resources · Efficient Connection</p>
        </div>
      </div>
    </footer>
  );
}
