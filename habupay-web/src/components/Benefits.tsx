import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Shield,
  BarChart3,
  DollarSign,
  RefreshCw,
  TrendingUp } from
'lucide-react';
export function Benefits() {
  const benefits = [
  {
    icon: Zap,
    title: 'Integración única',
    description:
    'Una API, todos los medios de pago. Olvídate de mantener decenas de integraciones.',
    color: 'bg-lime text-dark-900'
  },
  {
    icon: RefreshCw,
    title: 'Conciliación automática',
    description:
    'Centraliza pagos y conciliación en tiempo real desde un solo panel.',
    color: 'bg-blue-500 text-white'
  },
  {
    icon: BarChart3,
    title: 'Reportes en tiempo real',
    description:
    'Visualiza tus transacciones, ingresos y métricas al instante.',
    color: 'bg-purple-500 text-white'
  },
  {
    icon: DollarSign,
    title: 'Reducción de costos',
    description:
    'Disminuye costos operativos y de desarrollo significativamente.',
    color: 'bg-green-500 text-white'
  },
  {
    icon: Shield,
    title: 'Seguridad y cumplimiento',
    description: 'Cifrado de extremo a extremo y estándares PCI DSS.',
    color: 'bg-red-500 text-white'
  },
  {
    icon: TrendingUp,
    title: 'Escalabilidad inmediata',
    description: 'Agrega nuevos medios de pago sin cambios en tu sistema.',
    color: 'bg-orange-500 text-white'
  }];

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return (
    <section id="beneficios" className="pt-10 md:pt-12 pb-20 md:pb-28 bg-white">
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
          className="text-center mb-12 md:mb-14">
          
          <span className="inline-block px-4 py-2 bg-lime/10 rounded-full text-sm font-semibold text-dark-900 mb-4">
            Beneficios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Por qué elegir HABU
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una plataforma completa diseñada para simplificar y potenciar tus
            pagos
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {benefits.map((benefit, index) =>
          <motion.div
            key={index}
            variants={item}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.2
              }
            }}
            className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-lime hover:shadow-xl transition-all duration-300">
            
              {/* Icon */}
              <div
              className={`w-14 h-14 ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
              
                <benefit.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-dark-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Dot */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>);

}