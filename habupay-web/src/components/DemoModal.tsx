import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
  ComponentType,
  useRef
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Mail,
  User,
  Building2,
  Phone,
  MessageSquare,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

// --- Contexto para controlar el Modal ---
interface DemoModalContextType {
  open: () => void;
  close: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error('useDemoModal must be used within DemoModalProvider');
  return ctx;
}

// --- Interfaces de Datos ---
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

// --- Proveedor Principal ---
export function DemoModalProvider({ children }: { children: ReactNode; }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  
  // Estados de la API
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Referencia para reCAPTCHA
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const open = () => {
    setSubmitted(false);
    setError(null);
    setFormData(initialFormData);
    setIsOpen(true);
  };
  
  const close = () => {
    if (!loading) setIsOpen(false);
  };

  // Manejo de tecla ESC y scroll
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
  }, [isOpen, loading]);

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 1. Validar Token de Captcha
    const token = recaptchaRef.current?.getValue();
    if (!token) {
      setError("Por favor, confirma que no eres un robot.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // 2. Llamada a la API (usando variable de entorno)
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
      
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          company: formData.empresa,
          phone: formData.telefono,
          message: formData.mensaje,
          captchaToken: token // Token real de Google
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Hubo un problema con la validación.');
        recaptchaRef.current?.reset(); // Resetear captcha si hay error
      }
    } catch (err) {
      setError('No se pudo conectar con el servidor. Verifica Docker y CORS.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <DemoModalContext.Provider value={{ open, close }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-900/60 backdrop-blur-sm overflow-y-auto"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl my-8"
            >
              {/* Botón Cerrar */}
              <button
                onClick={close}
                disabled={loading}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10 disabled:opacity-50"
              >
                <X className="w-5 h-5 text-dark-900" />
              </button>

              {submitted ? (
                <div className="p-8 md:p-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-lime rounded-full mb-6">
                    <CheckCircle2 className="w-10 h-10 text-dark-900" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-3">¡Solicitud enviada!</h3>
                  <p className="text-gray-600 mb-8">Te contactaremos en menos de 24 horas para agendar tu demo.</p>
                  <button onClick={close} className="w-full py-4 bg-dark-900 text-white rounded-full font-semibold hover:bg-dark-800 transition-colors">
                    Volver al sitio
                  </button>
                </div>
              ) : (
                <div className="p-6 md:p-8">
                  <div className="mb-6 pr-10">
                    <span className="inline-block px-3 py-1 bg-lime/10 rounded-full text-xs font-semibold text-dark-900 mb-3">Demo gratuita</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-dark-900 mb-2">Solicita una demo</h2>
                    <p className="text-sm text-gray-600">Completa tus datos y un especialista te guiará en la plataforma.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                      <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-xs rounded-xl animate-pulse">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField icon={User} label="Nombre" placeholder="Ej: Juan Pérez" value={formData.nombre} onChange={handleChange('nombre')} required />
                      <FormField icon={Building2} label="Empresa" placeholder="Nombre empresa" value={formData.empresa} onChange={handleChange('empresa')} required />
                    </div>

                    <FormField icon={Mail} type="email" label="Email corporativo" placeholder="juan@empresa.com" value={formData.email} onChange={handleChange('email')} required />
                    <FormField icon={Phone} type="tel" label="Teléfono" placeholder="+56 9 ..." value={formData.telefono} onChange={handleChange('telefono')} />

                    <div>
                      <label className="block text-sm font-semibold text-dark-900 mb-1.5">Mensaje (opcional)</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                        <textarea
                          rows={2}
                          placeholder="¿En qué podemos ayudarte?"
                          value={formData.mensaje}
                          onChange={handleChange('mensaje')}
                          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:border-lime focus:ring-2 focus:ring-lime/20 outline-none transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Widget de ReCaptcha */}
                    
<div className="flex justify-center py-2 scale-90 sm:scale-100">
  <ReCAPTCHA
    ref={recaptchaRef}
    // Cargamos la clave desde las variables de entorno de Vite
    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
    onChange={() => setError(null)}
  />
</div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center justify-center w-full px-6 py-4 bg-dark-900 text-white rounded-full text-base font-semibold hover:bg-dark-800 transition-all disabled:opacity-70"
                    >
                      {loading ? 'Procesando...' : 'Enviar solicitud'}
                      {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DemoModalContext.Provider>
  );
}

// --- Sub-componente de Campo de Formulario ---
interface FormFieldProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
}

function FormField({ icon: Icon, label, placeholder, value, onChange, type = 'text', required }: FormFieldProps) {
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
          className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-dark-900 focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/20 transition-all"
        />
      </div>
    </div>
  );
}