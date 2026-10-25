import React from 'react';
import { ArrowRight, Check, WifiOff, Calculator, BookOpen, ShoppingBag, Sparkles, TrendingUp } from 'lucide-react';

export default function Hero({ onOpenDownloadModal }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-36 md:pb-28 border-b border-slate-200/80 bg-gradient-to-b from-blue-50/60 via-indigo-50/20 to-slate-50/50">
      
      {/* Subtle decorative glow elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-400/15 to-indigo-400/15 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-emerald-400/10 blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        
        {/* Editorial Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-800">Diseñado para emprendedores, bodegas y pequeños negocios</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.12]">
            El control total de tus ventas, inventario y{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              libreta de fiado
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Vende en segundos, calcula el cambio exacto en multimoneda (Dólares, Bolívares y Pago Móvil) y lleva el registro detallado de abonos del fiado. Sin fórmulas enredadas y 100% operativo sin internet.
          </p>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenDownloadModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
            >
              <span>Descargar Optimus360 Gratis</span>
              <ArrowRight className="w-4 h-4 text-blue-200" />
            </button>

            <a
              href="#simulador"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-xs hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              Probar simulador interactivo
            </a>
          </div>

          {/* Micro Benefits Line */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              Calculadora multitasas (BCV / USDT)
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              Fiado con historial de abonos
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-4 h-4 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                <Check className="w-3 h-3 stroke-[3]" />
              </span>
              Opera 100% sin internet
            </span>
          </div>
        </div>

        {/* Realistic Mobile Device Frame Showcase */}
        <div className="mt-14 max-w-sm sm:max-w-md mx-auto">
          <div className="bg-slate-900 p-3 sm:p-3.5 rounded-[42px] shadow-2xl shadow-blue-900/20 border border-slate-800 relative">
            
            {/* Speaker bar / Dynamic Island */}
            <div className="w-24 h-4 bg-slate-800/90 rounded-full mx-auto mb-2.5 flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-slate-700" />
              <div className="w-7 h-1.5 rounded-full bg-slate-700" />
            </div>

            {/* Screen */}
            <div className="bg-white rounded-[32px] overflow-hidden text-slate-800 p-4 border border-slate-200/80 shadow-inner">
              
              {/* App Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-[10px]">
                    360
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Bodega & Víveres</div>
                    <div className="text-xs font-bold text-slate-800 leading-tight">La Bendición</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    BCV: 42.10
                  </span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>

              {/* Day Sales Metric Card */}
              <div className="mt-3 p-3.5 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl text-white shadow-md shadow-emerald-500/20">
                <div className="flex items-center justify-between text-[11px] text-emerald-100 font-medium">
                  <span>Ventas netas de hoy</span>
                  <span className="flex items-center gap-1 text-white bg-white/20 px-2 py-0.5 rounded-full text-[10px]">
                    <TrendingUp className="w-3 h-3" /> +36%
                  </span>
                </div>
                <div className="text-2xl font-black tracking-tight text-white mt-1">
                  $142.50 <span className="text-xs font-semibold text-emerald-100">≈ Bs 6,000.25</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-emerald-100 mt-2 pt-2 border-t border-emerald-400/30 font-medium">
                  <span>38 ventas registradas</span>
                  <span>Efectivo + Pago Móvil</span>
                </div>
              </div>

              {/* Quick Actions (Lively & Minimalist) */}
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="p-2.5 rounded-xl border border-blue-100 bg-blue-50/50 text-center hover:bg-blue-50 transition-colors">
                  <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center mx-auto mb-1 shadow-xs">
                    <ShoppingBag className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-slate-800">POS Rápido</div>
                  <div className="text-[9px] text-slate-500">Cobrar en caja</div>
                </div>

                <div className="p-2.5 rounded-xl border border-emerald-100 bg-emerald-50/50 text-center hover:bg-emerald-50 transition-colors">
                  <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white flex items-center justify-center mx-auto mb-1 shadow-xs">
                    <Calculator className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-slate-800">Calc. Vuelto</div>
                  <div className="text-[9px] text-slate-500">Multimoneda</div>
                </div>

                <div className="p-2.5 rounded-xl border border-amber-100 bg-amber-50/50 text-center hover:bg-amber-50 transition-colors">
                  <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center mx-auto mb-1 shadow-xs">
                    <BookOpen className="w-3 h-3" />
                  </div>
                  <div className="text-xs font-bold text-slate-800">Fiado</div>
                  <div className="text-[9px] text-slate-500">Ver abonos</div>
                </div>
              </div>

              {/* Real Transactions List */}
              <div className="mt-3">
                <div className="flex justify-between items-center mb-2 px-0.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Últimos movimientos</span>
                  <span className="text-[10px] text-blue-600 font-semibold cursor-pointer">Ver historial</span>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800 text-[11px]">Ticket #1042</div>
                      <div className="text-[9px] text-slate-400">Harina PAN + Queso Llanero • Efectivo $</div>
                    </div>
                    <span className="font-bold text-emerald-600 text-xs">+$12.50</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/70 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-amber-900 text-[11px] flex items-center gap-1">
                        <span>Doña Carmen</span>
                        <span className="text-[9px] bg-amber-200/80 text-amber-800 px-1.5 py-0.2 rounded-full font-semibold">Abonó $15</span>
                      </div>
                      <div className="text-[9px] text-amber-700">Resta por pagar: $8.50 • WhatsApp</div>
                    </div>
                    <span className="font-semibold text-amber-800 text-xs">$8.50</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-slate-800 text-[11px]">Ticket #1041</div>
                      <div className="text-[9px] text-slate-400">Arroz 1kg + Aceite • Pago Móvil</div>
                    </div>
                    <span className="font-bold text-emerald-600 text-xs">+$8.00</span>
                  </div>
                </div>
              </div>

              {/* Offline indicator bar */}
              <div className="mt-3 py-1.5 px-2.5 bg-blue-50/80 border border-blue-100 rounded-xl flex items-center justify-between text-[10px] text-blue-700 font-medium">
                <span className="flex items-center gap-1.5">
                  <WifiOff className="w-3 h-3 text-blue-600" />
                  Soporte offline 100% activo
                </span>
                <span className="text-[9px] text-blue-500 font-semibold">Base local SQLite</span>
              </div>

            </div>

            {/* Home indicator */}
            <div className="w-28 h-1 bg-slate-700 rounded-full mx-auto mt-2.5" />
          </div>
        </div>

      </div>
    </section>
  );
}
