import React from 'react';
import { WEB_APP_URL } from '../config';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 py-12 bg-white text-xs text-slate-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
              360
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 text-sm tracking-tight leading-tight">
                Optimus<span className="text-blue-600">360</span>
              </span>
              <span className="text-slate-400 text-[11px]">
                Control comercial para emprendedores y bodegas
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#funcionalidades" className="hover:text-blue-600 transition-colors font-medium">Funcionalidades</a>
            <a href="#simulador" className="hover:text-blue-600 transition-colors font-medium">Simulador</a>
            <a href="#comparativa" className="hover:text-blue-600 transition-colors font-medium">Comparativa</a>
            <a href="#precios" className="hover:text-blue-600 transition-colors font-medium">Precios</a>
            <a href="#faq" className="hover:text-blue-600 transition-colors font-medium">Preguntas</a>
            <a
              href={WEB_APP_URL}
              className="text-blue-600 font-bold hover:underline underline-offset-4"
            >
              Iniciar sesión web
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} Optimus360. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-600 transition-colors">Términos de servicio</a>
            <span>•</span>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors font-medium">
              Soporte oficial por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
