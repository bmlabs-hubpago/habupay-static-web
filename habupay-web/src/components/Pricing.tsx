import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Globe, ArrowRight } from 'lucide-react';
import { useDemoModal } from './DemoModal';
export function Pricing() {
  const { open: openDemoModal } = useDemoModal();
  const plans = [
  {
    name: 'Starter',
    tagline: 'Perfecto para empezar a operar',
    price: '0,5',
    priceUnit: 'UF',
    period: '/mes',
    transactions: 'Hasta 500 transacciones',
    additional: '0,001 UF por transacción adicional',
    cta: 'Empezar',
    ctaStyle: 'outline',
    highlighted: false,
    features: [
    {
      label: 'Medios de pago',
      value: 'Básicos (1 conexión)'
    },
    {
      label: 'Conciliación',
      value: 'Manual'
    },
    {
      label: 'Soporte',
      value: 'Centro de Ayuda'
    }]

  },
  {
    name: 'Business',
    tagline: 'Para negocios en crecimiento',
    price: '1,8',
    priceUnit: 'UF',
    period: '/mes',
    transactions: 'Hasta 2.000 transacciones',
    additional: '0,002 UF por transacción adicional',
    cta: 'Empezar ahora',
    ctaStyle: 'primary',
    highlighted: true,
    badge: 'Más popular',
    features: [
    {
      label: 'Medios de pago',
      value: 'Multicanal (Todos)'
    },
    {
      label: 'Conciliación',
      value: 'Automatizada'
    },
    {
      label: 'Soporte',
      value: 'Prioritario Email/Chat'
    }]

  },
  {
    name: 'Enterprise',
    tagline: 'Sin límites, alcance internacional',
    customPrice: true,
    customPriceLabel: 'A medida',
    customPriceSubtitle: 'Cotización según tu configuración del servicio',
    transactions: 'Transacciones ilimitadas',
    additional: 'Volumen escalonado a medida',
    cta: 'Contactar ventas',
    ctaStyle: 'dark',
    highlighted: false,
    international: true,
    features: [
    {
      label: 'Medios de pago',
      value: 'Full API & Custom'
    },
    {
      label: 'Conciliación',
      value: 'Avanzada / IA',
      featureIcon: Sparkles
    },
    {
      label: 'Soporte',
      value: 'SLA & Account Manager'
    }],

    extraFeatures: [
    'Canales de pago internacionales',
    'Medios de pago internacionales',
    'Operación multimoneda']

  }];

  return (
    <section
      id="precios"
      className="py-20 md:py-28 bg-white relative overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute top-40 right-0 w-72 h-72 bg-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-lime/5 rounded-full blur-3xl" />

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
          className="text-center mb-14">
          
          <span className="inline-block px-4 py-2 bg-lime/10 rounded-full text-sm font-semibold text-dark-900 mb-4">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-4">
            Planes que crecen con tu negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Infraestructura de pagos transparente, sin sorpresas. Elige el plan
            que mejor se adapte a tu volumen y escala cuando lo necesites.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Precios expresados en Unidades de Fomento (UF)
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) =>
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
            whileHover={{
              y: -8
            }}
            className={`relative rounded-3xl p-8 flex flex-col ${plan.highlighted ? 'bg-dark-900 text-white shadow-2xl border-2 border-lime lg:scale-105' : 'bg-white border-2 border-gray-200 hover:border-lime hover:shadow-xl'} transition-all duration-300`}>
            
              {/* Badge */}
              {plan.badge &&
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-lime text-dark-900 rounded-full text-xs font-bold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    {plan.badge}
                  </div>
                </div>
            }

              {/* International indicator */}
              {plan.international &&
            <div className="absolute top-6 right-6">
                  <div className="w-10 h-10 bg-lime/20 rounded-xl flex items-center justify-center">
                    <Globe className="w-5 h-5 text-lime-700" />
                  </div>
                </div>
            }

              {/* Plan Name & Tagline */}
              <div className="mb-6">
                <h3
                className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-dark-900'}`}>
                
                  {plan.name}
                </h3>
                <p
                className={`text-sm ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                
                  {plan.tagline}
                </p>
              </div>

              {/* Price */}
              <div className="mb-6">
                {plan.customPrice ?
              <div>
                    <div className="flex items-baseline gap-2">
                      <span
                    className={`text-4xl md:text-5xl font-bold ${plan.highlighted ? 'text-lime' : 'text-dark-900'}`}>
                    
                        {plan.customPriceLabel}
                      </span>
                    </div>
                    <p
                  className={`text-sm mt-2 ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                  
                      {plan.customPriceSubtitle}
                    </p>
                  </div> :

              <>
                    {plan.priceLabel &&
                <span
                  className={`text-sm font-medium ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                  
                        {plan.priceLabel}
                      </span>
                }
                    <div className="flex items-baseline gap-2 mt-1">
                      <span
                    className={`text-5xl font-bold ${plan.highlighted ? 'text-lime' : 'text-dark-900'}`}>
                    
                        {plan.price}
                      </span>
                      <span
                    className={`text-xl font-semibold ${plan.highlighted ? 'text-white' : 'text-dark-900'}`}>
                    
                        {plan.priceUnit}
                      </span>
                      <span
                    className={`text-base ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    
                        {plan.period}
                      </span>
                    </div>
                  </>
              }
              </div>

              {/* Transactions Block */}
              <div
              className={`rounded-2xl p-4 mb-6 ${plan.highlighted ? 'bg-white/10' : 'bg-gray-50'}`}>
              
                <p
                className={`font-semibold mb-1 ${plan.highlighted ? 'text-white' : 'text-dark-900'}`}>
                
                  {plan.transactions}
                </p>
                <p
                className={`text-xs ${plan.highlighted ? 'text-gray-300' : 'text-gray-600'}`}>
                
                  {plan.additional}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {plan.features.map((feature, fIndex) =>
              <li key={fIndex} className="flex items-start gap-3">
                    <div
                  className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.highlighted ? 'bg-lime' : 'bg-lime/20'}`}>
                  
                      <Check
                    className={`w-3 h-3 ${plan.highlighted ? 'text-dark-900' : 'text-lime-700'}`}
                    strokeWidth={3} />
                  
                    </div>
                    <div className="flex-1">
                      <span
                    className={`text-xs uppercase tracking-wide block ${plan.highlighted ? 'text-gray-400' : 'text-gray-500'}`}>
                    
                        {feature.label}
                      </span>
                      <span
                    className={`text-sm font-medium inline-flex items-center gap-1.5 ${plan.highlighted ? 'text-white' : 'text-dark-900'}`}>
                    
                        {feature.value}
                        {feature.featureIcon &&
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-lime/20 rounded-md">
                            <feature.featureIcon className="w-3.5 h-3.5 text-lime-700" />
                          </span>
                    }
                      </span>
                    </div>
                  </li>
              )}
              </ul>

              {/* Extra Features for Enterprise */}
              {plan.extraFeatures &&
            <div className="mb-6 pt-6 border-t border-gray-200">
                  <p className="text-xs uppercase tracking-wide text-lime-700 font-bold mb-3 flex items-center gap-2">
                    <Globe className="w-3.5 h-3.5" />
                    Alcance internacional
                  </p>
                  <ul className="space-y-2">
                    {plan.extraFeatures.map((feature, fIndex) =>
                <li
                  key={fIndex}
                  className="flex items-start gap-2 text-sm text-gray-700">
                  
                        <Check
                    className="w-4 h-4 text-lime-600 flex-shrink-0 mt-0.5"
                    strokeWidth={3} />
                  
                        {feature}
                      </li>
                )}
                  </ul>
                </div>
            }

              {/* CTA Button */}
              <motion.button
              type="button"
              whileHover={{
                scale: 1.02
              }}
              whileTap={{
                scale: 0.98
              }}
              onClick={openDemoModal}
              className={`inline-flex items-center justify-center w-full px-6 py-3.5 rounded-full text-sm font-semibold transition-colors ${plan.ctaStyle === 'primary' ? 'bg-lime text-dark-900 hover:bg-lime-600' : plan.ctaStyle === 'dark' ? 'bg-dark-900 text-white hover:bg-dark-800' : 'bg-white text-dark-900 border-2 border-gray-300 hover:border-lime'}`}>
              
                {plan.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Footnote */}
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.4
          }}
          className="mt-12 text-center">
          
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Todos los planes incluyen integración con los códigos de comercio
            propios del cliente. ¿Necesitas algo personalizado?{' '}
            <button
              type="button"
              onClick={openDemoModal}
              className="text-dark-900 font-semibold hover:text-lime-700 underline">
              
              Hablemos
            </button>
            .
          </p>
        </motion.div>
      </div>
    </section>);

}