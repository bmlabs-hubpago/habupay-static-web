import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { useDemoModal } from './DemoModal';
export function CTASection() {
  const { open: openDemoModal } = useDemoModal();
  return (
    <section className="py-20 md:py-28 bg-dark-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
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
          }}>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            ¿Listo para simplificar tus pagos?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Una sola integración. Todos los medios. Cero complicaciones.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              type="button"
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={openDemoModal}
              className="inline-flex items-center justify-center px-8 py-4 bg-lime text-dark-900 rounded-full text-base font-semibold hover:bg-lime-600 transition-colors shadow-lg">
              
              Solicitar demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
            <motion.a
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              href="mailto:contacto@habupay.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full text-base font-semibold border-2 border-white hover:bg-white hover:text-dark-900 transition-colors">
              
              <Mail className="mr-2 w-5 h-5" />
              Contactar ventas
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>);

}