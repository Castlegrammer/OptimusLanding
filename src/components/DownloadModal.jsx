import React, { useState } from 'react';
import { X, Check, Smartphone, Download, ArrowRight } from 'lucide-react';

export default function DownloadModal({ isOpen, onClose }) {
  const [phone, setPhone] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setPhone('');
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-w-md w-full relative shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-500 text-white font-bold flex items-center justify-center text-xs mb-3 shadow-md shadow-blue-500/25">
            360
          </div>
          <h3 className="text-xl font-bold tracking-tight text-slate-900">
            Descargar Optimus360
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Comienza a controlar tus ventas, vueltos e inventario en minutos.
          </p>
        </div>

        {/* Store Links */}
        <div className="space-y-2.5 mb-6">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 border border-slate-200 hover:border-blue-400 rounded-2xl transition-all group bg-white hover:bg-blue-50/20 shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs border border-emerald-100">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Google Play Store</div>
                <div className="text-[11px] text-slate-400">Para teléfonos y tablets Android</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="https://apple.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 border border-slate-200 hover:border-blue-400 rounded-2xl transition-all group bg-white hover:bg-blue-50/20 shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs border border-slate-200">
                <Smartphone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Apple App Store</div>
                <div className="text-[11px] text-slate-400">Para iPhone y iPad</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href="./Optimus.apk"
            download="Optimus360.apk"
            className="flex items-center justify-between p-3.5 border border-slate-200 hover:border-blue-400 rounded-2xl transition-all group bg-white hover:bg-blue-50/20 shadow-2xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs border border-blue-100">
                <Download className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Descarga directa (.APK)</div>
                <div className="text-[11px] text-slate-400">Instalación rápida para cualquier Android</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Send to mobile */}
        <div className="pt-4 border-t border-slate-100">
          <div className="text-xs text-slate-600 font-semibold mb-2">
            O recibe el enlace de descarga directo en tu WhatsApp:
          </div>

          {sent ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>¡Enlace enviado a tu WhatsApp con éxito!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="tel"
                placeholder="+58 412 123 4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all font-medium"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-blue-500/20"
              >
                Enviar
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
