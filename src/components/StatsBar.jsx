import React from 'react';
import { Store, WifiOff, Calculator, Star } from 'lucide-react';

export default function StatsBar() {
  const metrics = [
    {
      icon: Store,
      iconColor: 'bg-blue-50 text-blue-600 border border-blue-100',
      value: '+15,000',
      label: 'Bodegas y comercios',
      desc: 'Emprendedores activos en Latinoamérica',
    },
    {
      icon: WifiOff,
      iconColor: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      value: '100%',
      label: 'Operatividad offline',
      desc: 'Sigue vendiendo aunque se caiga el internet',
    },
    {
      icon: Calculator,
      iconColor: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      value: '2 seg',
      label: 'Cálculo de cambio multitasas',
      desc: 'Vueltos en $, Bs o mixto sin equivocaciones',
    },
    {
      icon: Star,
      iconColor: 'bg-amber-50 text-amber-500 border border-amber-100',
      value: '4.9 / 5',
      label: 'Calificación de usuarios',
      desc: 'Respaldado por dueños de negocios reales',
    },
  ];

  return (
    <section className="py-12 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="p-4 sm:p-5 rounded-2xl bg-slate-50/50 hover:bg-slate-50 border border-slate-200/70 hover:border-blue-200 transition-all hover:shadow-sm group"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 group-hover:scale-105 transition-transform ${item.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-800 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
