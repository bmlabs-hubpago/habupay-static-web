import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Lightbulb, HandshakeIcon, Target, Sparkles } from 'lucide-react'

export function AboutUs() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Simplicidad',
      description:
        'Reducimos lo complejo a lo esencial. Una integración debe ser tan simple como conectar.',
    },
    {
      icon: Heart,
      title: 'Transparencia',
      description:
        'Precios claros, sin sorpresas. Todo lo que necesitas saber, siempre a la vista.',
    },
    {
      icon: HandshakeIcon,
      title: 'Acompañamiento',
      description:
        'No solo entregamos tecnología. Te acompañamos en cada paso del proceso.',
    },
  ]

  const stats = [
    { value: '2024', label: 'Año de fundación' },
    { value: '24/7', label: 'Soporte dedicado' },
    { value: '100%', label: 'Enfoque en pagos' },
  ]

  return (
    <section
      id="conocenos"
      className="py-20 md:py-28 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Two-column intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-lime/10 rounded-full text-sm font-semibold text-dark-900 mb-4">
              Conócenos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
              Más que tecnología,{' '}
              <span className="relative inline-block">
                somos tu socio
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-1 left-0 right-0 h-3 bg-lime/30 -z-10 origin-left"
                />
              </span>{' '}
              en pagos.
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                HABU nace de una convicción simple: integrar pagos no debería ser
                un proyecto de meses ni requerir tocar tus sistemas cada vez que
                aparece un nuevo medio en el mercado.
              </p>
              <p>
                Construimos una <span className="font-semibold text-dark-900">plataforma única de integración</span>{' '}
                que centraliza todos los medios de recaudación bajo una sola API.
                Mientras tu equipo se enfoca en hacer crecer el negocio, nosotros
                nos encargamos de mantener todos los canales de pago al día.
              </p>
              <p>
                Somos un equipo apasionado por la simplicidad, la transparencia y
                el acompañamiento real a cada uno de nuestros clientes.
              </p>
            </div>

            <div className="mt-8 inline-flex items-center gap-3 px-5 py-3 bg-white border-2 border-lime/30 rounded-full">
              <Target className="w-5 h-5 text-lime-700" />
              <span className="text-sm font-semibold text-dark-900">
                Nuestra misión: simplificar pagos para todos
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-lime/10 rounded-3xl blur-2xl" />

            <div className="relative bg-dark-900 rounded-3xl p-8 md:p-10 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-lime rounded-full" />
                <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                  La plataforma
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Hecha por personas,
              </h3>
              <h3 className="text-2xl md:text-3xl font-bold text-lime mb-8">
                pensada para escalar.
              </h3>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl md:text-3xl font-bold text-lime mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-lime" />
                <span className="text-sm text-gray-300">
                  Powered by{' '}
                  <a
                    href="https://bmsoftware.uk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold hover:text-lime transition-colors"
                  >
                    BMSoftware
                  </a>
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-3">
            Nuestros valores
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Tres principios que guían cada decisión, cada línea de código y cada
            conversación con nuestros clientes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-lime hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-lime rounded-2xl mb-5">
                <value.icon className="w-7 h-7 text-dark-900" />
              </div>
              <h4 className="text-xl font-bold text-dark-900 mb-3">
                {value.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}