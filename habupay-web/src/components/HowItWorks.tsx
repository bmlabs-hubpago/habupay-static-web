import React from 'react';
import { motion } from 'framer-motion';
import { Plug, Settings, Zap, TrendingUp } from 'lucide-react';
export function HowItWorks() {
  const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'Conéctate a HABU',
    description: 'Una integración API simple y documentada'
  },
  {
    number: '02',
    icon: Settings,
    title: 'Configura tus medios',
    description: 'Selecciona y activa los métodos que necesitas'
  },
  {
    number: '03',
    icon: Zap,
    title: 'Empieza a cobrar',
    description: 'Recibe pagos y consulta todo desde un único panel'
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Crece sin límites',
    description: 'Agregamos nuevos medios sin tocar tu sistema'
  }];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Integraciones simplificadas
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuatro pasos simples para transformar tu gestión de pagos
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gray-200">
            <motion.div
              initial={{
                scaleX: 0
              }}
              whileInView={{
                scaleX: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                delay: 0.5
              }}
              className="h-full bg-lime origin-left" />
            
          </div>

          {steps.map((step, index) =>
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
              delay: index * 0.15
            }}
            className="relative">
            
              <div className="flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-lime rounded-2xl flex items-center justify-center shadow-lg relative z-10">
                    <step.icon className="w-10 h-10 text-dark-900" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}