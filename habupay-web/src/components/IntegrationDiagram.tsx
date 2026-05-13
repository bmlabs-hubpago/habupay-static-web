import React from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  Layers,
  QrCode,
  Banknote,
  MousePointerClick,
  Building2,
  Plus } from
'lucide-react';
export function IntegrationDiagram() {
  const paymentMethods = [
  {
    icon: CreditCard,
    label: 'Tarjetas',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Layers,
    label: 'Pasarelas',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: QrCode,
    label: 'QR',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Banknote,
    label: 'Transferencias',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: MousePointerClick,
    label: 'Botones de pago',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: Plus,
    label: 'Y más...',
    color: 'bg-lime-100 text-lime-700'
  }];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Decorative Dots */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
        className="absolute top-2 right-2 w-3 h-3 bg-lime rounded-full" />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1
        }}
        className="absolute bottom-2 left-2 w-2 h-2 bg-lime rounded-full" />
      

      <div className="relative w-full max-w-lg grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 md:gap-6">
        {/* SVG Connecting Lines Layer */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 100 100">
          
          {/* Left line: Tu Sistema → HABU */}
          <motion.line
            x1="15"
            y1="50"
            x2="50"
            y2="50"
            stroke="#CDDC00"
            strokeWidth="0.5"
            strokeDasharray="2 2"
            initial={{
              pathLength: 0
            }}
            animate={{
              pathLength: 1
            }}
            transition={{
              duration: 1,
              delay: 0.4
            }} />
          
          {/* Right lines: HABU → 6 payment methods */}
          {paymentMethods.map((_, i) => {
            const yPositions = [8, 25, 42, 58, 75, 92];
            return (
              <motion.line
                key={i}
                x1="50"
                y1="50"
                x2="85"
                y2={yPositions[i]}
                stroke="#D1D5DB"
                strokeWidth="0.4"
                strokeDasharray="1.5 1.5"
                initial={{
                  pathLength: 0
                }}
                animate={{
                  pathLength: 1
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7 + i * 0.1
                }} />);


          })}
        </svg>

        {/* Animated dots flowing on lines */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Left flowing dot */}
          <motion.div
            initial={{
              left: '15%'
            }}
            animate={{
              left: ['15%', '48%']
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1
            }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-lime rounded-full shadow-lg shadow-lime/50" />
          
          {/* Right flowing dots */}
          {[8, 25, 42, 58, 75, 92].map((y, i) =>
          <motion.div
            key={i}
            initial={{
              left: '50%',
              top: '50%'
            }}
            animate={{
              left: ['50%', '83%'],
              top: ['50%', `${y}%`]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1.2 + i * 0.25
            }}
            className="absolute w-1.5 h-1.5 bg-lime rounded-full shadow-md shadow-lime/50" />

          )}
        </div>

        {/* LEFT - Tu Sistema */}
        <motion.div
          initial={{
            opacity: 0,
            x: -30
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="flex flex-col items-center space-y-2 relative z-10">
          
          <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center border-2 border-gray-200 shadow-md">
            <Building2 className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 text-gray-700" />
          </div>
          <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-700 whitespace-nowrap">
            Tu Sistema
          </span>
        </motion.div>

        {/* CENTER - HABU Node */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: 0.5
          }}
          className="relative z-20">
          
          <motion.div
            animate={{
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="relative">
            
            {/* Pulse rings */}
            <motion.div
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.4, 0, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeOut'
              }}
              className="absolute inset-0 bg-lime rounded-3xl" />
            
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 bg-lime rounded-3xl flex items-center justify-center shadow-xl">
              <img
                src="/Habu_Mesa_de_trabajo_1_copia_15.png"
                alt="HABU"
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" />
              
            </div>
          </motion.div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-xs sm:text-sm font-bold text-dark-900 tracking-wide">
              HABU
            </span>
          </div>
        </motion.div>

        {/* RIGHT - Payment Methods Stack */}
        <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-2.5 relative z-10">
          {paymentMethods.map((method, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.4,
              delay: 0.7 + index * 0.1
            }}
            className="flex items-center gap-2 bg-white rounded-lg sm:rounded-xl py-1.5 sm:py-2 px-2 sm:px-2.5 md:px-3 border border-gray-200 shadow-sm hover:shadow-md hover:border-lime transition-all">
            
              <div
              className={`flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${method.color} rounded-md sm:rounded-lg flex items-center justify-center`}>
              
                <method.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
              </div>
              <span className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-700 whitespace-nowrap">
                {method.label}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>);

}