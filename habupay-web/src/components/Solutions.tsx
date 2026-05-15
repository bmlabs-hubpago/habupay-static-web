import React from 'react'
import { motion } from 'framer-motion'
import {
  GraduationCap,
  ShoppingBag,
  Repeat,
  Globe2,
  ArrowUpRight,
  Check,
  ToggleRight,
  Link2,
  RotateCcw,
  Hash,
  Sparkles,
} from 'lucide-react'

export function Solutions() {
  const solutions = [
    {
      icon: GraduationCap,
      title: 'Universidades e instituciones educativas',
      description:
        'Centraliza la recaudación de matrículas, aranceles y servicios académicos con múltiples canales de pago activos en paralelo.',
      features: [
        'Alta concurrencia en periodos de matrícula',
        'Múltiples botones de pago activos en simultáneo',
        'Conciliación por carrera, sede o concepto',
      ],
      idealFor: 'Universidades, institutos, colegios',
      iconBg: 'bg-blue-500',
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce y retail',
      description:
        'Optimizamos tu checkout para que conviertas más. Si un pago falla, el usuario puede reintentar con otro medio sin volver al sitio del comercio.',
      features: [
        'Checkout optimizado para conversión',
        'Reintentos en línea sin perder al usuario',
        'Cambio de medio de pago en el mismo flujo',
      ],
      idealFor: 'Tiendas online, retail omnicanal',
      iconBg: 'bg-purple-500',
    },
    {
      icon: Repeat,
      title: 'Cobranza recurrente y servicios',
      description:
        'Gestiona cobros periódicos, suscripciones y servicios recurrentes con conciliación inteligente y notificaciones automáticas.',
      features: [
        'Reintentos automáticos en cobros fallidos',
        'Notificaciones a tus usuarios',
        'Reportería centralizada',
      ],
      idealFor: 'SaaS, servicios, telecomunicaciones',
      iconBg: 'bg-orange-500',
    },
    {
      icon: Globe2,
      title: 'Cobros internacionales',
      description:
        'Opera en múltiples mercados con pasarelas internacionales y operación multimoneda desde una sola integración.',
      features: [
        'Pasarelas internacionales',
        'Multimoneda nativa',
        'Cumplimiento regional',
      ],
      idealFor: 'Empresas con expansión global',
      iconBg: 'bg-lime text-dark-900',
      highlighted: true,
    },
  ]

  const crossCuttingFeatures = [
    {
      icon: Hash,
      title: 'Tu propio número de comercio',
      description:
        'Integramos con tus códigos de comercio existentes. No necesitas crear ni migrar a nuevos.',
    },
    {
      icon: ToggleRight,
      title: 'Activa o desactiva con un click',
      description:
        'Habilita o pausa cada medio de pago en segundos según te convenga. Sin tocar tu sistema.',
    },
    {
      icon: Link2,
      title: 'Link de pago directo',
      description:
        'Genera y entrega links de pago para cobrar por email, WhatsApp o cualquier canal.',
    },
    {
      icon: RotateCcw,
      title: 'Reintentos sin fricción',
      description:
        'Si falla un pago, el usuario reintenta con otro medio dentro del mismo checkout.',
    },
  ]

  return (
    <section
      id="soluciones"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-lime/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-lime/10 rounded-full text-sm font-semibold text-dark-900 mb-4">
            Soluciones
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Soluciones para la recaudación digital
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conectamos cualquier medio de pago digital —botones de pago, pasarelas
            y nuevos canales que aparezcan en el mercado— bajo{' '}
            <span className="font-semibold text-dark-900">tu propio número de comercio</span>.
            Tú decides qué medios activar y cuándo, con un solo click.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-lime hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div
                  className={`w-14 h-14 ${solution.iconBg} ${
                    solution.highlighted ? '' : 'text-white'
                  } rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <solution.icon className="w-7 h-7" />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 group-hover:bg-lime flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-dark-900 transition-colors" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-dark-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-5 leading-relaxed">
                {solution.description}
              </p>

              <ul className="space-y-2 mb-5">
                {solution.features.map((feature, fIndex) => (
                  <li
                    key={fIndex}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <Check
                      className="w-4 h-4 text-lime-700 flex-shrink-0 mt-0.5"
                      strokeWidth={3}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-1">
                  Ideal para
                </p>
                <p className="text-sm font-medium text-dark-900">
                  {solution.idealFor}
                </p>
              </div>

              <div className="absolute top-4 right-4 w-2 h-2 bg-lime rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Cross-Cutting Features Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-dark-900 rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-6 right-6 w-3 h-3 bg-lime rounded-full" />
          <div className="absolute bottom-6 left-6 w-2 h-2 bg-lime rounded-full" />

          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime/10 rounded-full text-xs font-semibold text-lime mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Funcionalidades transversales
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Capacidades incluidas en todas las soluciones
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No importa el caso de uso, estas funcionalidades vienen incluidas
              para que operes con la máxima flexibilidad.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {crossCuttingFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                className="group"
              >
                <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-dark-900" strokeWidth={2.5} />
                </div>
                <h4 className="text-base font-bold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}