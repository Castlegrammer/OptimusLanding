import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2, TrendingUp, WifiOff, X } from 'lucide-react';

export default function LiveNotificationToast() {
  const notifications = [
    {
      icon: ShoppingBag,
      title: 'Venta registrada con éxito',
      desc: 'Bodega La Bendición cobró $24.50 (Efectivo + Pago Móvil)',
      time: 'Hace 1 min',
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
    },
    {
      icon: CheckCircle2,
      title: 'Abono registrado en Libreta de Fiado',
      desc: 'Doña Carmen abonó $15.00 con comprobante WhatsApp',
      time: 'Hace 3 min',
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-100',
    },
    {
      icon: TrendingUp,
      title: 'Tasas BCV sincronizadas',
      desc: 'Calculadora de vuelto al día con tasa oficial',
      time: 'Hace 5 min',
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-100',
    },
    {
      icon: WifiOff,
      title: 'Ventas Offline sincronizadas',
      desc: '18 tickets locales sincronizados sin perder conexión',
      time: 'Hace 8 min',
      iconBg: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [closed]);

  if (closed) return null;

  const current = notifications[currentIndex];
  const Icon = current.icon;

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      <div className="bg-white/95 border border-slate-200/90 rounded-2xl p-3.5 shadow-xl shadow-slate-900/5 backdrop-blur-md flex items-center justify-between gap-3 text-left ring-1 ring-slate-100">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${current.iconBg}`}>
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
              <span>{current.title}</span>
              <span className="text-[10px] text-slate-400 font-normal">• {current.time}</span>
            </div>
            <div className="text-[11px] text-slate-500 line-clamp-1">
              {current.desc}
            </div>
          </div>
        </div>

        <button
          onClick={() => setClosed(true)}
          className="p-1 text-slate-400 hover:text-slate-600 rounded-lg shrink-0 transition-colors"
          aria-label="Cerrar notificación"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
