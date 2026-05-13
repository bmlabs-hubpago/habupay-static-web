import React from 'react';
import { Linkedin, Youtube, Instagram, Mail } from 'lucide-react';
export function Footer() {
  const footerLinks = {
    producto: [
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
    }],

    nosotros: [
    {
      label: 'Conócenos',
      href: '#conocenos'
    },
    {
      label: 'Wiki',
      href: '#wiki'
    },
    {
      label: 'Contacto',
      href: '#contacto'
    },
    {
      label: 'Carreras',
      href: '#carreras'
    }],

    legal: [
    {
      label: 'Términos y condiciones',
      href: '#terminos'
    },
    {
      label: 'Política de privacidad',
      href: '#privacidad'
    },
    {
      label: 'Seguridad',
      href: '#seguridad'
    }]

  };
  const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/company/habu-pay',
    label: 'LinkedIn'
  },
  {
    icon: Youtube,
    href: '#',
    label: 'YouTube'
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram'
  }];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-2">
            <img
              src="/Habu_Mesa_de_trabajo_1_copia.png"
              alt="babu - integrador de medios de pago"
              className="h-12 md:h-14 w-auto mb-4" />
            
            <p className="text-gray-600 mb-6 max-w-sm">
              La plataforma de integración de pagos que simplifica tu
              integración y potencia tu crecimiento.
            </p>

            {/* Contact Email */}
            <a
              href="mailto:contacto@habupay.com"
              className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-dark-900 mb-6 group">
              
              <Mail className="w-4 h-4 text-lime-700 group-hover:text-lime transition-colors" />
              <span className="font-medium">contacto@habupay.com</span>
            </a>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) =>
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={
                social.href.startsWith('http') ?
                'noopener noreferrer' :
                undefined
                }
                aria-label={social.label}
                className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center text-gray-600 hover:text-dark-900 hover:bg-lime hover:border-lime transition-colors">
                
                  <social.icon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h3 className="font-bold text-dark-900 mb-4">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) =>
              <li key={index}>
                  <a
                  href={link.href}
                  className="text-gray-600 hover:text-lime transition-colors">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Nosotros */}
          <div>
            <h3 className="font-bold text-dark-900 mb-4">Nosotros</h3>
            <ul className="space-y-3">
              {footerLinks.nosotros.map((link, index) =>
              <li key={index}>
                  <a
                  href={link.href}
                  className="text-gray-600 hover:text-lime transition-colors">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-dark-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) =>
              <li key={index}>
                  <a
                  href={link.href}
                  className="text-gray-600 hover:text-lime transition-colors">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
          <p className="text-sm text-gray-600 text-center md:text-left">
            © {new Date().getFullYear()} HABU. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-7">
            <span className="text-sm text-gray-500 whitespace-nowrap">
              Hecho con ❤️ para simplificar pagos
            </span>
            <div className="hidden sm:block h-10 w-px bg-gray-300" />
            <a
              href="https://bmsoftware.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
              aria-label="Powered by BMSoftware">
              
              <span className="text-sm font-medium text-gray-600 group-hover:text-dark-900 transition-colors whitespace-nowrap">
                Powered by
              </span>
              <img
                src="/BM_software.png"
                alt="BMSoftware"
                className="h-16 sm:h-20 md:h-24 w-auto group-hover:scale-105 transition-transform" />
              
            </a>
          </div>
        </div>
      </div>
    </footer>);

}