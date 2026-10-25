import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing({ onOpenDownloadModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const tiers = [
    {
      name: 'Inicial',
      description: 'Ideal para quienes van comenzando su emprendimiento o negocio casero.',
      monthly: 0,
      annual: 0,
      features: [
        'Hasta 50 productos en catálogo',
        'Hasta 150 ventas al mes',
        'Calculadora de vuelto multimoneda',
        'Modo 100% offline activo',
        'Lector de código de barras con cámara',
        '1 dispositivo móvil',
      ],
      buttonText: 'Comenzar gratis',
      highlighted: false,
    },
    {
      name: 'Emprendedor Pro',
      description: 'Para bodegas y comercios que atienden a diario y necesitan cero límites.',
      monthly: 12,
      annual: 9,
      features: [
        'Ventas y catálogo 100% ilimitados',
        'Libreta de Fiado con registro de abonos',
        'Envío de comprobantes por WhatsApp',
        'Calculadora multitasas (BCV, USDT, Euro)',
        'Impresión Bluetooth (58mm y 80mm)',
        'Alertas automáticas de stock bajo',
        'Reporte de ganancia neta y cuadre de caja',
      ],
      buttonText: 'Prueba de 14 días gratis',
      highlighted: true,
    },
    {
      name: 'Negocio Familiar / Multi-Caja',
      description: 'Para locales con varios ayudantes o atención en más de un mostrador.',
      monthly: 24,
      annual: 19,
      features: [
        'Hasta 5 dispositivos sincronizados',
        'Cajeros con permisos y roles limitados',
        'Ocultación de costos de mercadería a cajeros',
        'Cierre de caja por turno y cajero',
        'Exportación a Excel y respaldos diarios',
        'Soporte técnico directo por WhatsApp',
      ],
      buttonText: 'Elegir plan Multi-Caja',
      highlighted: false,
    },
  ];

  return (
    <section id="precios" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Precios justos para tu bolsillo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Planes accesibles, sin sorpresas ni amarres
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Puedes empezar completamente gratis y actualizar a medida que tu negocio vaya creciendo.
          </p>

          {/* Billing Toggle */}
          <div className="mt-6 inline-flex p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 rounded-xl transition-all ${
                !annualBilling ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pago mensual
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                annualBilling ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Pago anual</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">
                Ahorra 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {tiers.map((t, idx) => {
            const price = annualBilling ? t.annual : t.monthly;
            return (
              <div
                key={idx}
                className={`p-7 rounded-3xl flex flex-col justify-between transition-all ${
                  t.highlighted
                    ? 'border-2 border-blue-600 bg-white shadow-xl shadow-blue-500/10 ring-4 ring-blue-500/5 relative'
                    : 'border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-md'
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-wider shadow-md shadow-blue-500/25 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Más recomendado
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{t.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6 leading-relaxed">
                    {t.description}
                  </p>

                  <div className="pb-6 mb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                        ${price}
                      </span>
                      <span className="text-xs text-slate-500 font-semibold">USD / mes</span>
                    </div>
                    {annualBilling && price > 0 && (
                      <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">Facturado anualmente ($108/año)</span>
                    )}
                    {price === 0 && (
                      <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">100% gratis para siempre</span>
                    )}
                  </div>

                  <ul className="space-y-3 text-xs text-slate-700 mb-8">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span className="font-medium text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenDownloadModal}
                  className={`w-full py-3 rounded-xl font-bold text-xs transition-all ${
                    t.highlighted
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:-translate-y-0.5'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-2xs hover:-translate-y-0.5'
                  }`}
                >
                  {t.buttonText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
