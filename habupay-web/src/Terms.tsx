import React from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTopButton } from './components/ScrollToTopButton'

export function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <Header />
      <main className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-gray-500 mb-8">Última actualización: 24 de julio de 2024</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Bienvenido a HabuPay. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web y los servicios de HabuPay. Al acceder a este sitio web y utilizar nuestros servicios, aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de HabuPay si no aceptas todos los términos y condiciones establecidos en esta página.
            </p>

            <h2>1. Definiciones</h2>
            <p>
              <strong>"Servicio"</strong> se refiere a la plataforma de integración de pagos y servicios relacionados proporcionados por HabuPay.
              <br />
              <strong>"Cliente"</strong> o <strong>"Tú"</strong> se refiere a la empresa o individuo que se registra para usar nuestro Servicio.
              <br />
              <strong>"Usuario Final"</strong> se refiere al cliente de nuestro Cliente que realiza un pago a través del Servicio.
            </p>

            <h2>2. Uso del Servicio</h2>
            <p>
              El Cliente se compromete a utilizar el Servicio de HabuPay de acuerdo con la ley, la moral, el orden público y lo dispuesto en estos Términos y Condiciones. El Cliente es el único responsable de la legalidad de sus productos, servicios y transacciones.
            </p>
            <p>
              HabuPay actúa como un intermediario tecnológico para facilitar las transacciones de pago. No somos parte de la relación contractual entre el Cliente y su Usuario Final.
            </p>

            <h2>3. Cuentas y Registro</h2>
            <p>
              Para acceder a nuestros servicios, debes registrarte y crear una cuenta. Eres responsable de mantener la confidencialidad de tu información de inicio de sesión y de todas las actividades que ocurran en tu cuenta. Debes notificarnos inmediatamente sobre cualquier uso no autorizado de tu cuenta.
            </p>

            <h2>4. Comisiones y Pagos</h2>
            <p>
              Las comisiones por el uso del Servicio se detallan en nuestra sección de Precios. HabuPay se reserva el derecho de modificar sus comisiones, notificando al Cliente con una antelación razonable.
            </p>

            <h2>5. Propiedad Intelectual</h2>
            <p>
              El sitio web y su contenido original, características y funcionalidad son propiedad de HabuPay y están protegidos por leyes de derechos de autor y propiedad intelectual. No se te otorga ninguna licencia para usar nuestra marca o logos sin nuestro consentimiento previo por escrito.
            </p>

            <h2>6. Limitación de Responsabilidad</h2>
            <p>
              En la máxima medida permitida por la ley, HabuPay no será responsable por ningún daño indirecto, incidental, especial, consecuente o punitivo, o cualquier pérdida de beneficios o ingresos, ya sea incurrida directa o indirectamente, o cualquier pérdida de datos, uso, fondo de comercio u otras pérdidas intangibles, resultantes de (i) tu acceso o uso o incapacidad para acceder o usar el servicio; (ii) cualquier conducta o contenido de un tercero en el servicio.
            </p>

            <h2>7. Modificaciones a los Términos</h2>
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos entren en vigencia. Lo que constituye un cambio material se determinará a nuestra sola discreción.
            </p>

            <h2>8. Ley Aplicable</h2>
            <p>
              Estos Términos se regirán e interpretarán de acuerdo con las leyes de Chile, sin tener en cuenta sus disposiciones sobre conflicto de leyes.
            </p>

            <h2>9. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en <a href="mailto:legal@habupay.com">legal@habupay.com</a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}