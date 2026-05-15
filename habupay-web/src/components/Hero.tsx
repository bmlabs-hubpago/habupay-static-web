import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { IntegrationDiagram } from './IntegrationDiagram';
import { useDemoModal } from './DemoModal';
export function Hero() {
  const { open: openDemoModal } = useDemoModal();
  return (
    <section className="relative pt-24 md:pt-28 pb-8 md:pb-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-lime/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center lg:text-left">
            
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.2
              }}
              className="inline-block mb-4 px-4 py-2 bg-lime/10 rounded-full">
              
              <span className="text-sm font-semibold text-dark-900">
                Plataforma de integración de pagos
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 mb-6 leading-tight">
              <span className="relative">
                Una sola integración.
                <motion.div
                  initial={{
                    scaleX: 0
                  }}
                  animate={{
                    scaleX: 1
                  }}
                  transition={{
                    delay: 0.8,
                    duration: 0.6
                  }}
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-lime/30 -z-10" />
                
              </span>
              <br />
              <span className="text-lime">Todos</span> los medios de pago.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
              Gestiona y escala todos tus medios de recaudación desde un{' '}
              <span className="font-semibold text-dark-900">
                único punto de integración
              </span>
              . Contamos con una API moderna, sin complejidad y sin tocar tus
              sistemas. Cualquier medio de pago disponible en el mercado puede
              formar parte de HABU y estar disponible para tu comercio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                onClick={openDemoModal}
                className="inline-flex items-center justify-center px-8 py-4 bg-dark-900 text-white rounded-full text-base font-semibold hover:bg-dark-800 transition-colors shadow-lg">
                
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
                href="#video"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-dark-900 rounded-full text-base font-semibold border-2 border-gray-300 hover:border-lime transition-colors">
                
                <Play className="mr-2 w-5 h-5" />
                Ver cómo funciona
              </motion.a>
            </div>
          </motion.div>

          {/* Right - Integration Diagram */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="relative h-[360px] md:h-[420px] lg:h-[480px]">
            
            <IntegrationDiagram />
          </motion.div>
        </div>
      </div>
    </section>);

}