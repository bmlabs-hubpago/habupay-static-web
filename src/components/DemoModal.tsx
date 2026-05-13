import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  Component } from
'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  User,
  Building2,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight } from
'lucide-react';
interface DemoModalContextType {
  open: () => void;
  close: () => void;
}
const DemoModalContext = createContext<DemoModalContextType | undefined>(
  undefined
);
export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx)
  throw new Error('useDemoModal must be used within DemoModalProvider');
  return ctx;
}
interface FormData {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  mensaje: string;
}
const initialFormData: FormData = {
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  mensaje: ''
};
export function DemoModalProvider({ children }: {children: ReactNode;}) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const open = () => {
    setSubmitted(false);
    setFormData(initialFormData);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);
  // ESC key handler
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  const handleChange =
  (field: keyof FormData) =>
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated submission — no backend
    setSubmitted(true);
  };
  return (
    <DemoModalContext.Provider
      value={{
        open,
        close
      }}>
      
      {children}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.2
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-900/60 backdrop-blur-sm overflow-y-auto"
          onClick={close}>
          
            <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            transition={{
              duration: 0.25,
              ease: 'easeOut'
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl my-8">
            
              {/* Close Button */}
              <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10">
              
                <X className="w-5 h-5 text-dark-900" />
              </button>

              {submitted ?
            <motion.div
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.3
              }}
              className="p-8 md:p-10 text-center">
              
                  <motion.div
                initial={{
                  scale: 0
                }}
                animate={{
                  scale: 1
                }}
                transition={{
                  type: 'spring',
                  delay: 0.1,
                  duration: 0.5
                }}
                className="inline-flex items-center justify-center w-20 h-20 bg-lime rounded-full mb-6">
                
                    <CheckCircle2
                  className="w-10 h-10 text-dark-900"
                  strokeWidth={2.5} />
                
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-3">
                    ¡Solicitud enviada!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Gracias por tu interés en HABU. Nuestro equipo se pondrá en
                    contacto contigo en menos de 24 horas.
                  </p>
                  <button
                onClick={close}
                className="inline-flex items-center justify-center px-8 py-3 bg-dark-900 text-white rounded-full text-sm font-semibold hover:bg-dark-800 transition-colors">
                
                    Cerrar
                  </button>
                </motion.div> :

            <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-6 pr-10">
                    <span className="inline-block px-3 py-1 bg-lime/10 rounded-full text-xs font-semibold text-dark-900 mb-3">
                      Demo gratuita
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-2">
                      Solicita una demo
                    </h2>
                    <p className="text-sm text-gray-600">
                      Cuéntanos sobre tu proyecto y te contactamos en menos de
                      24 horas.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                    icon={User}
                    label="Nombre"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={handleChange('nombre')}
                    required />
                  
                      <FormField
                    icon={Building2}
                    label="Empresa"
                    placeholder="Nombre de tu empresa"
                    value={formData.empresa}
                    onChange={handleChange('empresa')}
                    required />
                  
                    </div>

                    <FormField
                  icon={Mail}
                  type="email"
                  label="Email corporativo"
                  placeholder="tu@empresa.com"
                  value={formData.email}
                  onChange={handleChange('email')}
                  required />
                

                    <FormField
                  icon={Phone}
                  type="tel"
                  label="Teléfono"
                  placeholder="+56 9 1234 5678"
                  value={formData.telefono}
                  onChange={handleChange('telefono')} />
                

                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-1.5">
                        ¿Cómo podemos ayudarte?{' '}
                        <span className="text-gray-400 font-normal">
                          (opcional)
                        </span>
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                        <textarea
                      rows={3}
                      placeholder="Cuéntanos sobre tu proyecto..."
                      value={formData.mensaje}
                      onChange={handleChange('mensaje')}
                      className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-dark-900 placeholder:text-gray-400 focus:outline-none focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/20 transition-all resize-none" />
                    
                      </div>
                    </div>

                    <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-dark-900 text-white rounded-full text-base font-semibold hover:bg-dark-800 transition-colors mt-2">
                  
                      Enviar solicitud
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </button>

                    <p className="text-xs text-gray-500 text-center pt-1">
                      Al enviar aceptas nuestros{' '}
                      <a
                    href="#terminos"
                    className="underline hover:text-dark-900">
                    
                        términos y política de privacidad
                      </a>
                      .
                    </p>
                  </form>
                </div>
            }
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </DemoModalContext.Provider>);

}
// Reusable form field component
interface FormFieldProps {
  icon: ComponentType<{
    className?: string;
  }>;
  label: string;
  placeholder: string;
  value: string;
  onChange: (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  => void;
  type?: string;
  required?: boolean;
}
function FormField({
  icon: Icon,
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required
}: FormFieldProps) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark-900 mb-1.5">
        {label} {required && <span className="text-lime-700">*</span>}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        <input
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-dark-900 placeholder:text-gray-400 focus:outline-none focus:border-lime focus:bg-white focus:ring-2 focus:ring-lime/20 transition-all" />
        
      </div>
    </div>);

}