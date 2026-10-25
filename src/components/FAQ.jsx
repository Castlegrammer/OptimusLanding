import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      q: '¿Cómo funciona si no hay internet o se va la luz en mi zona?',
      a: 'Optimus360 guarda toda tu información en una base de datos local y segura en tu propio teléfono móvil (SQLite). Puedes seguir registrando ventas, cobrando en efectivo o Pago Móvil, registrando abonos de fiado e imprimiendo recibos con total normalidad. Cuando vuelva la conexión Wi-Fi o datos, los datos se sincronizan automáticamente.',
    },
    {
      q: '¿Cómo me ayuda con el cálculo del vuelto y las tasas de cambio?',
      a: 'La aplicación cuenta con una calculadora de cambio multitasas integrada. Puedes consultar en segundos la tasa oficial del BCV o USDT, ingresar con cuánto te paga el cliente (en dólares en efectivo, bolívares en efectivo o Pago Móvil) y la app te dirá con exactitud matemática cuánto vuelto debes dar, evitando pérdidas de dinero por confusiones de cálculo.',
    },
    {
      q: '¿Cómo funciona la libreta de fiado con el registro de abonos?',
      a: 'Cada vez que le fíes a un cliente recurrente, se anota en su ficha. Si el cliente viene días después y te abona una parte (por ejemplo $10 de una deuda de $25), el sistema resta automáticamente el abono, actualiza el saldo a $15 y te permite mandarle el comprobante actualizado directo a su WhatsApp con un solo toque.',
    },
    {
      q: '¿Necesito comprar una computadora cara o una impresora especial?',
      a: 'No, todo funciona directamente en tu teléfono Android o iPhone. Si quieres imprimir comprobantes físicos en papel, puedes conectarle por Bluetooth cualquier mini impresora térmica estándar de 58mm o 80mm (las económicas que venden en cualquier tienda de tecnología). Y si no tienes impresora, envías el recibo digital por WhatsApp.',
    },
    {
      q: '¿Puedo dejar a un familiar o cajero atendiendo sin que vea mis ganancias?',
      a: 'Totalmente. Puedes crear un perfil de "Cajero / Ayudante". Con ese perfil, ellos solo pueden buscar productos, cobrar y emitir tickets en mostrador, pero nunca tendrán acceso a ver tus costos de compra, márgenes de ganancia ni el total acumulado en caja.',
    },
    {
      q: '¿Qué ocurre si cambio de teléfono o se me daña el celular?',
      a: 'Toda tu información cuenta con respaldo cifrado en la nube. Tan pronto como descargues la app en tu nuevo dispositivo e inicies sesión con tu cuenta, tu inventario, tus ventas y tu libreta de fiado se restablecen de inmediato exactamente como los dejaste.',
    },
  ];

  return (
    <section id="faq" className="py-20 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Respuestas a tus dudas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Preguntas frecuentes sobre Optimus360
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Todo lo que necesitas saber antes de empezar a usarlo en tu mostrador.
          </p>
        </div>

        {/* Minimal Accordion */}
        <div className="divide-y divide-slate-200 border-y border-slate-200 bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-slate-200/80">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 first:pt-2 last:pb-2">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left py-1 text-sm sm:text-base font-bold text-slate-800 hover:text-blue-600 focus:outline-none transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className={`p-1.5 rounded-xl shrink-0 transition-colors ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed pr-8">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
