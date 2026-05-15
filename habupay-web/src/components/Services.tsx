import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Rocket, Layers } from 'lucide-react';
export function Services() {
  const services = [
  {
    icon: Rocket,
    title: 'Onboarding de medios de pago',
    description:
    'Te ayudamos a habilitar y configurar cada medio de pago — desde la negociación con el adquirente hasta la puesta en producción. Tú te enfocas en tu negocio, nosotros en los pagos.',
    features: [
    'Activación rápida',
    'Configuración guiada',
    'Pruebas y certificación',
    'Soporte dedicado durante todo el proceso'],

    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Layers,
    title: 'Integración de nuevos medios desde HABU',
    description:
    'Cuando aparezca un nuevo medio de pago, lo integramos directamente en HABU. Tu sistema sigue intacto — la nueva opción se habilita automáticamente desde tu mismo punto de conexión.',
    features: [
    'Cero cambios en tu código',
    'Sin nuevas integraciones',
    'Activación en minutos',
    'Mantente siempre actualizado con el mercado'],

    badge: 'Sin tocar tus sistemas',
    color: 'from-purple-500 to-purple-600'
  }];

  return (
    <section
      id="servicios"
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="text-center mb-16">
          
          <span className="inline-block px-4 py-2 bg-lime/10 rounded-full text-sm font-semibold text-dark-900 mb-4">
            Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Te acompañamos en todo el proceso
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Más que una plataforma, somos tu socio en pagos. Nos encargamos de
            la integración, el onboarding y la incorporación de nuevos medios —
            sin que tengas que tocar tus sistemas.
          </p>
        </motion.div>

        {/* Services Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2
            }}
            whileHover={{
              y: -8
            }}
            className="relative bg-white rounded-3xl p-8 md:p-10 shadow-lg border-2 border-gray-200 hover:border-lime transition-all duration-300">
            
              {/* Badge */}
              {service.badge &&
            <div className="absolute top-6 right-6">
                  <span className="px-4 py-2 bg-lime text-dark-900 rounded-full text-xs font-bold">
                    {service.badge}
                  </span>
                </div>
            }

              {/* Icon */}
              <div
              className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
              
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-dark-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) =>
              <li key={featureIndex} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0 mt-0.5 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
              )}
              </ul>

              {/* Decorative Corner Dot */}
              <div className="absolute bottom-6 right-6 w-3 h-3 bg-lime rounded-full" />
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}