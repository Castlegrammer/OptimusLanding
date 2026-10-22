import React from 'react';
import { ArrowRight, Smartphone, ShieldCheck } from 'lucide-react';

export default function DownloadCTA({ onOpenDownloadModal }) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-lg text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
              Empieza hoy a tener el control total de tu negocio.
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Descarga Optimus360 gratis en tu teléfono y pon a prueba la rapidez en tu próximo turno de ventas.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-neutral-400 pt-1">
              <span>Android & iOS</span>
              <span>•</span>
              <span>Instalación en 2 min</span>
              <span>•</span>
              <span>Sin tarjeta</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <button
              onClick={onOpenDownloadModal}
              className="px-6 py-3 rounded-xl bg-white text-neutral-950 hover:bg-neutral-100 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
            >
              <span>Descargar ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
