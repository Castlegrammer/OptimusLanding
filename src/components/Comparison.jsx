import React from 'react';
import { Check, X } from 'lucide-react';

export default function Comparison() {
  const rows = [
    {
      label: 'Cobro y cálculo de cambio',
      traditional: 'Calcular mentalmente o en papel, arriesgando perder dinero con la tasa',
      optimus: 'Calculadora multitasas automática en Dólares, Bolívares y Pago Móvil',
    },
    {
      label: 'Control de la libreta de fiado',
      traditional: 'Cuadernos con tachones, deudas olvidadas y sin respaldo de abonos',
      optimus: 'Historial cronológico de deudas y abonos con recibo por WhatsApp',
    },
    {
      label: 'Registro de ventas',
      traditional: 'Anotaciones manuales lentas o tablas de Excel complejas',
      optimus: 'Cobro express en 3 toques con lector de código de barras en cámara',
    },
    {
      label: 'Control de inventario',
      traditional: 'Te enteras de que no hay mercancía cuando el cliente la pide',
      optimus: 'Descuento en tiempo real y avisos antes de que se agote el stock',
    },
    {
      label: 'Cierre y cuadre de caja',
      traditional: 'Horas cuadrando tickets, billetes sueltos y capturas de transferencias',
      optimus: 'Cierre instantáneo desglosado por $, efectivo Bs y Pago Móvil',
    },
    {
      label: 'Disponibilidad sin internet',
      traditional: 'Los sistemas web en la nube se cuelgan cuando falla la red',
      optimus: 'Funciona 100% localmente sin internet ni demoras en mostrador',
    },
  ];

  return (
    <section id="comparativa" className="py-20 border-b border-slate-200/80 bg-slate-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Diferencias claras</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            El método tradicional frente a Optimus360
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            La diferencia entre perder tiempo y dinero en cuentas manuales o tener la tranquilidad diaria de tus ganancias.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xl shadow-slate-900/5">
          <div className="grid grid-cols-12 bg-slate-100/70 p-4 sm:p-5 border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
            <div className="col-span-4 sm:col-span-4 text-slate-800">Aspecto de tu negocio</div>
            <div className="col-span-4 sm:col-span-4 text-slate-500">Método en papel / manual</div>
            <div className="col-span-4 sm:col-span-4 text-blue-700 font-extrabold flex items-center gap-1.5">
              <span>Con Optimus360</span>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-50/70 transition-colors gap-2">
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-800 pr-2">
                  {row.label}
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-500 pr-2 text-xs flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-rose-500 mt-0.5 shrink-0" />
                  <span>{row.traditional}</span>
                </div>
                <div className="col-span-4 sm:col-span-4 text-slate-800 font-semibold flex items-start gap-2 text-xs sm:text-sm">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
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
