import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'

export function SecurityPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Seguridad en HabuPay
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            La seguridad de nuestros clientes y sus usuarios es nuestra máxima prioridad. Hemos construido nuestra plataforma desde cero con las mejores prácticas de la industria para proteger cada transacción y cada dato.
          </p>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-dark-900">Cumplimiento PCI DSS</h2>
              <p>
                HabuPay opera en un entorno que cumple con el estándar de seguridad de datos de la industria de tarjetas de pago (PCI DSS). No almacenamos, procesamos ni transmitimos datos sensibles de tarjetas de crédito en nuestros sistemas. Toda la información de tarjetas es tokenizada y manejada directamente por las pasarelas de pago, que cuentan con la certificación PCI DSS Nivel 1, el nivel más alto de seguridad.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark-900">Cifrado de Datos</h2>
              <p>
                <strong>En tránsito:</strong> Toda la comunicación entre tu sistema, nuestros servidores y las pasarelas de pago está cifrada utilizando TLS 1.2 o superior. Esto garantiza que los datos no puedan ser interceptados por terceros.
              </p>
              <p>
                <strong>En reposo:</strong> La información sensible que necesitamos almacenar, como las claves de API, se cifra utilizando algoritmos robustos como AES-256 antes de ser guardada en nuestra base de datos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark-900">Seguridad de la Infraestructura</h2>
              <p>
                Nuestra infraestructura se encuentra alojada en proveedores de nube líderes a nivel mundial, que ofrecen capas de seguridad física y de red de primer nivel. Implementamos firewalls, sistemas de detección de intrusos y monitoreo constante para proteger nuestra plataforma de accesos no autorizados y ataques.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark-900">Autenticación y Control de Acceso</h2>
              <p>
                El acceso a nuestro backoffice y API está protegido mediante autenticación segura. Recomendamos a nuestros clientes utilizar claves de API únicas y robustas, y rotarlas periódicamente. Implementamos políticas de control de acceso estrictas para asegurar que solo el personal autorizado tenga acceso a los sistemas críticos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark-900">Reporte de Vulnerabilidades</h2>
              <p>
                La seguridad es un esfuerzo colaborativo. Si crees que has encontrado una vulnerabilidad de seguridad en nuestros sistemas, te agradecemos que nos lo comuniques de manera responsable. Por favor, envía un correo electrónico a <a href="mailto:seguridad@habupay.com">seguridad@habupay.com</a> con los detalles y trabajaremos contigo para resolver el problema rápidamente.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}