import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'

export function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Política de Privacidad
          </h1>
          <p className="text-sm text-gray-500 mb-8">Última actualización: 24 de julio de 2024</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              En HabuPay, nos tomamos muy en serio tu privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos, protegemos y tratamos tu información personal cuando utilizas nuestros servicios.
            </p>

            <h2>1. Información que Recopilamos</h2>
            <p>
              Podemos recopilar la siguiente información:
            </p>
            <ul>
              <li>
                <strong>Información de registro:</strong> Cuando creas una cuenta, recopilamos información como tu nombre, nombre de la empresa, dirección de correo electrónico y número de teléfono.
              </li>
              <li>
                <strong>Información de transacciones:</strong> Para procesar pagos, recopilamos detalles de la transacción. Es importante destacar que HabuPay no almacena información sensible de tarjetas de crédito o débito; esta información es manejada directamente por las pasarelas de pago que cumplen con el estándar PCI DSS.
              </li>
              <li>
                <strong>Información técnica:</strong> Recopilamos información técnica como la dirección IP, tipo de navegador y sistema operativo para mantener la seguridad y el buen funcionamiento de nuestros servicios.
              </li>
            </ul>

            <h2>2. Cómo Usamos tu Información</h2>
            <p>
              Utilizamos la información que recopilamos para:
            </p>
            <ul>
              <li>Proveer, operar y mantener nuestros servicios.</li>
              <li>Procesar transacciones y enviar información relacionada, como confirmaciones y facturas.</li>
              <li>Mejorar, personalizar y ampliar nuestros servicios.</li>
              <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, para servicio al cliente, para proporcionarte actualizaciones y otra información relacionada con el servicio.</li>
              <li>Prevenir el fraude y garantizar la seguridad de nuestra plataforma.</li>
            </ul>

            <h2>3. Cómo Compartimos tu Información</h2>
            <p>
              No vendemos, comercializamos ni alquilamos tu información personal a terceros. Podemos compartir información con:
            </p>
            <ul>
              <li>
                <strong>Proveedores de servicios:</strong> Compartimos información con terceros que nos ayudan a operar nuestro negocio, como pasarelas de pago y proveedores de infraestructura en la nube, siempre bajo estrictos acuerdos de confidencialidad.
              </li>
              <li>
                <strong>Cumplimiento legal:</strong> Podemos divulgar tu información si así lo exige la ley o en respuesta a solicitudes válidas de las autoridades públicas.
              </li>
            </ul>

            <h2>4. Seguridad de los Datos</h2>
            <p>
              Implementamos una variedad de medidas de seguridad para mantener la seguridad de tu información personal. Todas las comunicaciones con nuestros servidores están cifradas mediante la tecnología Secure Socket Layer (SSL).
            </p>

            <h2>5. Tus Derechos</h2>
            <p>
              Tienes derecho a acceder, corregir o eliminar tu información personal. También puedes oponerte al procesamiento de tus datos. Para ejercer estos derechos, por favor contáctanos.
            </p>

            <h2>6. Cambios a esta Política</h2>
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.
            </p>

            <h2>7. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos en <a href="mailto:privacidad@habupay.com">privacidad@habupay.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}