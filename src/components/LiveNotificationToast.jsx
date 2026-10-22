import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle2, Star, X } from 'lucide-react';

export default function LiveNotificationToast() {
  const notifications = [
    {
      icon: ShoppingBag,
      title: 'Venta registrada con éxito',
      desc: 'Minimarket Los Pinos (Guadalajara) cobró $92.50',
      time: 'Hace 1 min',
      color: 'text-emerald-400',
    },
    {
      icon: CheckCircle2,
      title: 'Cuenta saldada por WhatsApp',
      desc: 'Ferretería El Roble (Bogotá) recuperó $140.00',
      time: 'Hace 3 min',
      color: 'text-brand-400',
    },
    {
      icon: Star,
      title: 'Nueva reseña 5 estrellas',
      desc: 'Valeria R. en App Store: "Me salvó los cuadres"',
      time: 'Hace 5 min',
      color: 'text-amber-400',
    },
    {
      icon: ShoppingBag,
      title: 'Modo Offline sincronizado',
      desc: 'Distribuidora del Valle (Santiago) sincronizó 34 pedidos',
      time: 'Hace 8 min',
      color: 'text-cyan-400',
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
      className={`fixed bottom-4 left-4 z-40 max-w-xs sm:max-w-sm transition-all duration-500 transform ${
        visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
      }`}
    >
      <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 text-left">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
            <Icon className={`w-4 h-4 ${current.color}`} />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{current.title}</span>
              <span className="text-[10px] text-slate-400 font-normal">• {current.time}</span>
            </div>
            <div className="text-[11px] text-slate-300 line-clamp-1">
              {current.desc}
            </div>
          </div>
        </div>

        <button
          onClick={() => setClosed(true)}
          className="p-1 text-slate-500 hover:text-slate-300 rounded-lg shrink-0"
          aria-label="Cerrar notificación"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
