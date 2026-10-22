import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { WEB_APP_URL } from '../config';

export default function Navbar({ onOpenDownloadModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Funcionalidades', href: '#funcionalidades' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Comparativa', href: '#comparativa' },
    { name: 'Precios', href: '#precios' },
    { name: 'Preguntas', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-neutral-950 text-white flex items-center justify-center font-bold text-sm tracking-tight">
            360
          </div>
          <span className="font-semibold text-neutral-950 tracking-tight text-base">
            Optimus<span className="text-neutral-500 font-normal">360</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={WEB_APP_URL}
            className="text-xs font-semibold px-3.5 py-2 text-neutral-700 hover:text-neutral-950 transition-colors"
          >
            Iniciar sesión
          </a>
          
          <button
            onClick={onOpenDownloadModal}
            className="text-xs font-semibold px-4 py-2 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Descargar app</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={WEB_APP_URL}
            className="text-xs font-medium px-2.5 py-1.5 text-neutral-700 hover:text-neutral-950"
          >
            Ingresar
          </a>

          <button
            onClick={onOpenDownloadModal}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-neutral-950 text-white"
          >
            Descargar
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-neutral-600 hover:text-neutral-950"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 py-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-neutral-700 hover:text-neutral-950 font-medium rounded-lg hover:bg-neutral-100"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-2 border-t border-neutral-100 mt-2">
            <a
              href={WEB_APP_URL}
              className="block w-full text-left px-3 py-2 text-sm font-semibold text-neutral-900 hover:bg-neutral-100 rounded-lg"
            >
              Iniciar sesión en la web &rarr;
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
