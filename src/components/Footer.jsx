import React from 'react';

export default function Footer({ onOpenLoginModal }) {
  return (
    <footer className="border-t border-neutral-200 py-12 bg-white text-xs text-neutral-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-neutral-900 text-white font-bold text-xs flex items-center justify-center">
              360
            </div>
            <span className="font-semibold text-neutral-900 text-sm tracking-tight">
              Optimus360
            </span>
            <span className="text-neutral-400 ml-2">
              Gestión comercial para pequeños negocios
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a href="#funcionalidades" className="hover:text-neutral-900 transition-colors">Funcionalidades</a>
            <a href="#simulador" className="hover:text-neutral-900 transition-colors">Simulador</a>
            <a href="#comparativa" className="hover:text-neutral-900 transition-colors">Comparativa</a>
            <a href="#precios" className="hover:text-neutral-900 transition-colors">Precios</a>
            <a href="#faq" className="hover:text-neutral-900 transition-colors">Preguntas</a>
            <button
              onClick={onOpenLoginModal}
              className="text-neutral-900 font-semibold hover:underline underline-offset-4"
            >
              Iniciar sesión web
            </button>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-400">
          <div>
            © {new Date().getFullYear()} Optimus360. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-600 transition-colors">Privacidad</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-600 transition-colors">Términos de servicio</a>
            <span>•</span>
            <a href="https://wa.me/" target="_blank" rel="noreferrer" className="hover:text-neutral-600 transition-colors">Soporte WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
