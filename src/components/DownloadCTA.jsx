import React from 'react';
import { ArrowRight, Smartphone, ShieldCheck, Sparkles, Laptop } from 'lucide-react';
import { WEB_APP_URL } from '../config';

export default function DownloadCTA({ onOpenDownloadModal }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-600/25 relative overflow-hidden">
          
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-900/20 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

          <div className="space-y-3.5 max-w-lg text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-xs text-white text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Pruébalo gratis hoy mismo</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Pon en orden las cuentas y ventas de tu negocio.
            </h2>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Descarga Optimus360 en tu teléfono celular y comprueba la tranquilidad de tener tus vueltos exactos, inventario al día y libreta de fiado bajo control.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-blue-100 pt-1 font-medium">
              <span className="flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-blue-200" /> Android & iPhone
              </span>
              <span>•</span>
              <span>Instalación en 1 minuto</span>
              <span>•</span>
              <span>Sin tarjeta bancaria</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0 relative z-10">
            <button
              onClick={onOpenDownloadModal}
              className="px-6 py-3.5 rounded-xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5"
            >
              <span>Descargar ahora</span>
              <ArrowRight className="w-4 h-4 text-blue-700" />
            </button>

            <a
              href={WEB_APP_URL}
              className="px-5 py-3.5 rounded-xl bg-white/15 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-xs border border-white/20 hover:-translate-y-0.5"
            >
              <Laptop className="w-4 h-4" />
              <span>Abrir versión Web</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
