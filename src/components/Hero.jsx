import React from 'react';
import { ArrowRight, Check, WifiOff, Smartphone, ShieldCheck } from 'lucide-react';

export default function Hero({ onOpenDownloadModal }) {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-neutral-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/90 text-neutral-600 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>Versión 3.2 para iOS y Android</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-950 leading-[1.12]">
            El control total de tu negocio en la palma de tu mano.
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Gestiona ventas, compras, inventarios, deudas y finanzas sin complicaciones ni hojas de cálculo infinitas. Diseñado específicamente para comerciantes, distribuidores y pequeños negocios.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenDownloadModal}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Descargar Optimus360</span>
              <ArrowRight className="w-4 h-4 text-neutral-400" />
            </button>

            <a
              href="#simulador"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              Probar simulador interactivo
            </a>
          </div>

          {/* Micro Benefits Line */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neutral-900" />
              Funciona 100% sin internet
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neutral-900" />
              Tickets en Bluetooth o WhatsApp
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-neutral-900" />
              Sin tarjeta de crédito requerida
            </span>
          </div>
        </div>

        {/* Realistic Mobile Device Frame Showcase */}
        <div className="mt-14 max-w-sm sm:max-w-md mx-auto">
          <div className="bg-neutral-950 p-3 rounded-[40px] shadow-2xl border border-neutral-800 relative">
            
            {/* Speaker bar */}
            <div className="w-20 h-4 bg-neutral-900 rounded-full mx-auto mb-2 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-neutral-800 mr-2" />
              <div className="w-8 h-1 rounded-full bg-neutral-800" />
            </div>

            {/* Screen */}
            <div className="bg-white rounded-[32px] overflow-hidden text-neutral-900 p-4 border border-neutral-200">
              
              {/* App Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div>
                  <div className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">Abarrotes & Distribución</div>
                  <div className="text-xs font-bold text-neutral-900">Optimus360 Mobile</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-neutral-500 font-medium">En línea</span>
                </div>
              </div>

              {/* Day Sales Metric */}
              <div className="mt-3 p-3.5 bg-neutral-50 rounded-2xl border border-neutral-150">
                <div className="text-[11px] text-neutral-500 font-medium">Ventas netas de hoy</div>
                <div className="text-2xl font-bold tracking-tight text-neutral-950 mt-0.5">$3,420.50</div>
                <div className="flex justify-between items-center text-[11px] text-neutral-500 mt-2 pt-2 border-t border-neutral-200/60">
                  <span>38 transacciones</span>
                  <span className="text-emerald-700 font-medium">Margen: +33%</span>
                </div>
              </div>

              {/* Quick Actions (Minimalist) */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="p-2.5 rounded-xl border border-neutral-200 text-center bg-white">
                  <div className="text-xs font-bold text-neutral-900">Vender</div>
                  <div className="text-[10px] text-neutral-500">POS Rápido</div>
                </div>
                <div className="p-2.5 rounded-xl border border-neutral-200 text-center bg-white">
                  <div className="text-xs font-bold text-neutral-900">Escanear</div>
                  <div className="text-[10px] text-neutral-500">Cámara</div>
                </div>
                <div className="p-2.5 rounded-xl border border-neutral-200 text-center bg-white">
                  <div className="text-xs font-bold text-neutral-900">Cobrar</div>
                  <div className="text-[10px] text-neutral-500">Fiado</div>
                </div>
              </div>

              {/* Real Transactions List */}
              <div className="mt-3">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">Últimos movimientos</span>
                  <span className="text-[10px] text-neutral-500">Ver kardex</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-neutral-50 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">Ticket #1042</div>
                      <div className="text-[10px] text-neutral-500">4 productos • Efectivo</div>
                    </div>
                    <span className="font-bold text-neutral-900">+$84.00</span>
                  </div>

                  <div className="p-2 rounded-lg bg-neutral-50 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">Doña Carmen (Fiado)</div>
                      <div className="text-[10px] text-amber-700 font-medium">Pendiente de cobro</div>
                    </div>
                    <span className="font-semibold text-amber-800">$32.50</span>
                  </div>

                  <div className="p-2 rounded-lg bg-neutral-50 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-neutral-900">Ticket #1041</div>
                      <div className="text-[10px] text-neutral-500">Transferencia QR</div>
                    </div>
                    <span className="font-bold text-neutral-900">+$125.00</span>
                  </div>
                </div>
              </div>

              {/* Offline indicator bar */}
              <div className="mt-3 py-1.5 px-2 bg-neutral-100 rounded-lg flex items-center justify-between text-[10px] text-neutral-600">
                <span className="flex items-center gap-1">
                  <WifiOff className="w-3 h-3 text-neutral-500" />
                  Soporte offline activado
                </span>
                <span className="text-neutral-500">Base local segura</span>
              </div>

            </div>

            {/* Home indicator */}
            <div className="w-28 h-1 bg-neutral-700 rounded-full mx-auto mt-2" />
          </div>
        </div>

      </div>
    </section>
  );
}
