import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Activity, Clock, Shield } from 'lucide-react';
export function Stats() {
  const stats = [
  {
    icon: CreditCard,
    value: '+50',
    label: 'Medios de pago integrados'
  },
  {
    icon: Activity,
    value: '99.9%',
    label: 'Uptime garantizado'
  },
  {
    icon: Clock,
    value: '< 5 días',
    label: 'Para go-live'
  },
  {
    icon: Shield,
    value: 'PCI DSS',
    label: 'Compliant'
  }];

  return (
    <section className="py-16 md:py-20 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) =>
          <motion.div
            key={index}
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
              duration: 0.6,
              delay: index * 0.1
            }}
            className="text-center">
            
              <div className="inline-flex items-center justify-center w-12 h-12 bg-lime/10 rounded-xl mb-4">
                <stat.icon className="w-6 h-6 text-lime-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-lime mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}