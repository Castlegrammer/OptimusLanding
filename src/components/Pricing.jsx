import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Pricing({ onOpenDownloadModal }) {
  const [annualBilling, setAnnualBilling] = useState(true);

  const tiers = [
    {
      name: 'Inicial',
      description: 'Para pequeños comerciantes que quieren dar el primer paso digital.',
      monthly: 0,
      annual: 0,
      features: [
        'Hasta 50 productos en catálogo',
        'Hasta 120 ventas registradas al mes',
        'Modo 100% offline activo',
        'Lector de código de barras con cámara',
        'Cuadre de caja básico',
        '1 dispositivo móvil',
      ],
      buttonText: 'Comenzar gratis',
      highlighted: false,
    },
    {
      name: 'Pro Negocio',
      description: 'Para comercios en marcha que necesitan operar sin ningún límite.',
      monthly: 18,
      annual: 14,
      features: [
        'Ventas y catálogo ilimitados',
        'Recordatorios de cobro por WhatsApp',
        'Impresión Bluetooth (58mm y 80mm)',
        'Alertas de quiebre de stock mínimo',
        'Reportes de utilidad neta y márgenes',
        'Hasta 3 usuarios con roles',
        'Respaldos automáticos en la nube',
      ],
      buttonText: 'Prueba de 14 días gratis',
      highlighted: true,
    },
    {
      name: 'Distribución & Sucursales',
      description: 'Para distribuidores con rutas de calle o comercios con múltiples cajas.',
      monthly: 35,
      annual: 28,
      features: [
        'Múltiples sucursales y bodegas',
        'Usuarios y cajeros ilimitados',
        'Toma de pedidos offline en ruta',
        'Listas de precio mayorista / minorista',
        'Exportación contable a Excel y PDF',
        'Soporte técnico prioritario',
      ],
      buttonText: 'Contratar plan',
      highlighted: false,
    },
  ];

  return (
    <section id="precios" className="py-20 border-b border-neutral-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-10">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Planes y tarifas
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
            Precios directos, sin contratos forzosos
          </h2>
          <p className="text-neutral-600 text-sm mt-2">
            Puedes cambiar de plan o cancelar en cualquier momento desde la misma aplicación.
          </p>

          {/* Minimal Billing Toggle */}
          <div className="mt-6 inline-flex p-1 rounded-xl bg-neutral-100 border border-neutral-200 text-xs font-semibold">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                !annualBilling ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              Pago mensual
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                annualBilling ? 'bg-white text-neutral-950 shadow-xs' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              <span>Pago anual</span>
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-bold">
                -20%
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
                className={`p-7 rounded-2xl flex flex-col justify-between transition-all ${
                  t.highlighted
                    ? 'border-2 border-neutral-950 bg-white shadow-md relative'
                    : 'border border-neutral-200 bg-neutral-50/50'
                }`}
              >
                {t.highlighted && (
                  <span className="absolute -top-3 left-6 px-2.5 py-0.5 rounded-full bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider">
                    Más elegido
                  </span>
                )}

                <div>
                  <h3 className="text-lg font-bold text-neutral-950">{t.name}</h3>
                  <p className="text-xs text-neutral-500 mt-1 mb-6 leading-relaxed">
                    {t.description}
                  </p>

                  <div className="pb-6 mb-6 border-b border-neutral-200">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950">
                        ${price}
                      </span>
                      <span className="text-xs text-neutral-500 font-medium">USD / mes</span>
                    </div>
                    {annualBilling && price > 0 && (
                      <span className="text-[11px] text-neutral-500 mt-1 block">Facturado anualmente</span>
                    )}
                    {price === 0 && (
                      <span className="text-[11px] text-neutral-500 mt-1 block">Gratuito para siempre</span>
                    )}
                  </div>

                  <ul className="space-y-2.5 text-xs text-neutral-700 mb-8">
                    {t.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-neutral-900 mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenDownloadModal}
                  className={`w-full py-2.5 rounded-xl font-semibold text-xs transition-colors ${
                    t.highlighted
                      ? 'bg-neutral-950 hover:bg-neutral-800 text-white shadow-sm'
                      : 'bg-white hover:bg-neutral-100 text-neutral-900 border border-neutral-300'
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
