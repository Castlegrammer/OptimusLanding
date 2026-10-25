import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { WEB_APP_URL } from '../config';

export default function Navbar({ onOpenDownloadModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Simulador en vivo', href: '#simulador' },
    { name: 'Comparativa', href: '#comparativa' },
    { name: 'Planes', href: '#precios' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            360
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-900 tracking-tight text-base leading-tight">
              Optimus<span className="text-blue-600">360</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium -mt-0.5 hidden sm:block">
              Para pequeños negocios
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WEB_APP_URL}
            className="text-xs font-semibold px-3.5 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100/70 rounded-xl transition-all"
          >
            Iniciar sesión
          </a>
          
          <button
            onClick={onOpenDownloadModal}
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center gap-1.5"
          >
            <span>Descargar app</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-200" />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={WEB_APP_URL}
            className="text-xs font-semibold px-2.5 py-1.5 text-slate-700 hover:text-blue-600"
          >
            Entrar
          </a>

          <button
            onClick={onOpenDownloadModal}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs"
          >
            Descargar
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-600 hover:text-slate-900"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-xs text-slate-700 hover:text-blue-600 font-semibold rounded-lg hover:bg-blue-50/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={WEB_APP_URL}
              className="text-center text-xs font-semibold py-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            >
              Iniciar sesión en el navegador
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
