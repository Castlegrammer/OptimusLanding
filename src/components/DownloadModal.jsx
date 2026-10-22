import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/40 backdrop-blur-xs">
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-8 max-w-md w-full relative shadow-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="w-9 h-9 rounded-lg bg-neutral-950 text-white font-bold flex items-center justify-center text-xs mb-3">
            360
          </div>
          <h3 className="text-xl font-bold tracking-tight text-neutral-950">
            Descargar Optimus360
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Disponible de forma gratuita para dispositivos Android y iOS.
          </p>
        </div>

        {/* Store Links */}
        <div className="space-y-2.5 mb-6">
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 border border-neutral-200 hover:border-neutral-950 rounded-xl transition-all group bg-white hover:bg-neutral-50"
          >
            <div>
              <div className="text-xs font-bold text-neutral-900">Google Play Store</div>
              <div className="text-[11px] text-neutral-500">Para dispositivos Android</div>
            </div>
            <span className="text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>

          <a
            href="https://apple.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between p-3.5 border border-neutral-200 hover:border-neutral-950 rounded-xl transition-all group bg-white hover:bg-neutral-50"
          >
            <div>
              <div className="text-xs font-bold text-neutral-900">Apple App Store</div>
              <div className="text-[11px] text-neutral-500">Para iPhone y iPad</div>
            </div>
            <span className="text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>

          <a
            href="#apk"
            onClick={(e) => { e.preventDefault(); alert("Descargando archivo APK Optimus360 v3.2.0..."); }}
            className="flex items-center justify-between p-3.5 border border-neutral-200 hover:border-neutral-950 rounded-xl transition-all group bg-white hover:bg-neutral-50"
          >
            <div>
              <div className="text-xs font-bold text-neutral-900">Descarga directa (.APK)</div>
              <div className="text-[11px] text-neutral-500">Terminales sin servicios de Google</div>
            </div>
            <span className="text-xs font-semibold text-neutral-900 group-hover:translate-x-0.5 transition-transform">&rarr;</span>
          </a>
        </div>

        {/* Send to mobile */}
        <div className="pt-4 border-t border-neutral-100">
          <div className="text-xs text-neutral-600 font-medium mb-2">
            O recibe el enlace directo en tu WhatsApp:
          </div>

          {sent ? (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Enlace enviado a tu teléfono.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="tel"
                placeholder="+52 / +57 Tu teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 bg-white border border-neutral-300 rounded-xl px-3 py-2 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-950"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-colors"
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
