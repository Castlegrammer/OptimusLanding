import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const questions = [
    {
      q: '¿Cómo funciona exactamente si me quedo sin señal o internet?',
      a: 'Optimus360 utiliza almacenamiento SQLite local y seguro en tu dispositivo. Puedes registrar ventas, cobrar, consultar stock e imprimir tickets sin conexión alguna. En cuanto tu teléfono se conecta a Wi-Fi o datos móviles, la app envía las novedades a la nube de manera transparente.',
    },
    {
      q: '¿Qué impresoras térmicas son compatibles?',
      a: 'Cualquier impresora térmica estándar con conectividad Bluetooth o de red local, ya sea de formato 58mm o 80mm. Si no dispones de impresora, puedes compartir el comprobante en PDF por WhatsApp directamente al cliente.',
    },
    {
      q: '¿Puedo importar mis productos si los tengo actualmente en Excel?',
      a: 'Sí. Dispones de un importador web muy simple en el que subes tu archivo CSV o Excel con columnas de nombre, precio, costo y código de barras. Tu inventario queda listo en minutos.',
    },
    {
      q: '¿Qué ocurre si cambio de teléfono móvil o lo extravío?',
      a: 'Tu base de datos está respaldada en servidores seguros. Simplemente descargas la app en tu nuevo teléfono, inicias sesión con tu usuario y contraseña, y recuperas toda tu información intacta.',
    },
    {
      q: '¿Puedo ocultar los costos de compra a mis empleados o cajeros?',
      a: 'Sí. Puedes asignar roles limitados para que el personal en mostrador solo pueda cobrar y buscar productos, sin tener visibilidad sobre costos de proveedores, balances de caja globales o utilidades de la empresa.',
    },
  ];

  return (
    <section id="faq" className="py-20 border-b border-neutral-200/80 bg-neutral-50/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-12 text-left">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Preguntas frecuentes
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
            Dudas comunes sobre la aplicación
          </h2>
        </div>

        {/* Minimal Accordion */}
        <div className="divide-y divide-neutral-200 border-y border-neutral-200">
          {questions.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between text-left py-1 text-sm sm:text-base font-semibold text-neutral-950 focus:outline-none"
                >
                  <span className="pr-4">{item.q}</span>
                  <span className="p-1 text-neutral-500 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed pr-8">
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
