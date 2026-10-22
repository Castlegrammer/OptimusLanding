import React from 'react';
import { Check, Minus } from 'lucide-react';

export default function Comparison() {
  const rows = [
    {
      label: 'Registro de ventas',
      traditional: 'Manual en papel o fórmulas frágiles en Excel',
      optimus: 'Directo en 3 toques con lector de código de barras',
    },
    {
      label: 'Control de existencias',
      traditional: 'Conteo a fin de mes; quiebres imprevistos',
      optimus: 'Descuento en tiempo real y alertas de reposición',
    },
    {
      label: 'Gestión del fiado',
      traditional: 'Notas dispersas en mostrador y cobros olvidados',
      optimus: 'Historial de saldos y recordatorios por WhatsApp',
    },
    {
      label: 'Cierre de jornada',
      traditional: '1 a 2 horas cuadrando tickets y efectivo',
      optimus: 'Cierre instantáneo con desglose por medio de pago',
    },
    {
      label: 'Disponibilidad sin internet',
      traditional: 'Inoperativo en sistemas tradicionales en la nube',
      optimus: '100% operativo sin conexión localmente',
    },
    {
      label: 'Curva de aprendizaje',
      traditional: 'Capacitación larga o software complejo de PC',
      optimus: 'Cualquier empleado aprende en menos de 10 minutos',
    },
  ];

  return (
    <section id="comparativa" className="py-20 border-b border-neutral-200/80 bg-neutral-50/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Comparativa directa
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
            El método tradicional frente a Optimus360
          </h2>
          <p className="text-neutral-600 text-sm mt-2">
            La diferencia entre perder tiempo en tareas administrativas y tener certeza diaria de tus márgenes.
          </p>
        </div>

        {/* Minimal Comparison Table */}
        <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-12 bg-neutral-100/70 p-4 border-b border-neutral-200 text-xs font-bold text-neutral-900 uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-3">Aspecto operativo</div>
            <div className="col-span-4 sm:col-span-4 text-neutral-500">Método tradicional</div>
            <div className="col-span-4 sm:col-span-5 text-neutral-950 font-black">Con Optimus360</div>
          </div>

          <div className="divide-y divide-neutral-100 text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 items-center hover:bg-neutral-50/60 transition-colors">
                <div className="col-span-4 sm:col-span-3 font-semibold text-neutral-900 pr-2">
                  {row.label}
                </div>
                <div className="col-span-4 sm:col-span-4 text-neutral-500 pr-2 text-xs">
                  {row.traditional}
                </div>
                <div className="col-span-4 sm:col-span-5 text-neutral-950 font-medium flex items-center gap-2 text-xs sm:text-sm">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{row.optimus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
