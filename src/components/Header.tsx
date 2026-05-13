import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [
  {
    label: 'Soluciones',
    href: '#soluciones'
  },
  {
    label: 'Servicios',
    href: '#servicios'
  },
  {
    label: '¿Por qué HABU?',
    href: '#beneficios'
  },
  {
    label: 'Precios',
    href: '#precios'
  },
  {
    label: 'Conócenos',
    href: '#conocenos'
  }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img
              src="/Sin_titulo-4_Mesa_de_trabajo_1.svg"
              alt="HABU"
              className="h-8 md:h-10 w-auto" />
            
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-dark-900 transition-colors">
              
                {item.label}
              </a>
            )}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://backoffice.habupay.com/dashboard"
              className="px-6 py-2.5 bg-lime text-dark-900 rounded-full text-sm font-semibold hover:bg-lime-600 transition-colors">
              
              Acceder
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu">
            
            {isMobileMenuOpen ?
            <X className="w-6 h-6 text-dark-900" /> :

            <Menu className="w-6 h-6 text-dark-900" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          transition={{
            duration: 0.2
          }}
          className="md:hidden bg-white border-t border-gray-200">
          
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) =>
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-700 hover:text-dark-900 transition-colors">
              
                  {item.label}
                </a>
            )}
              <a
              href="https://backoffice.habupay.com/dashboard"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full px-6 py-3 bg-lime text-dark-900 rounded-full text-center text-sm font-semibold hover:bg-lime-600 transition-colors">
              
                Acceder
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}