import React from 'react';

export default function StatsBar() {
  const metrics = [
    {
      value: '+15,000',
      label: 'Comercios activos',
      desc: 'En México, Colombia, Perú y Chile',
    },
    {
      value: '100%',
      label: 'Funcionalidad offline',
      desc: 'Opera sin conexión a internet',
    },
    {
      value: '3.5 hrs',
      label: 'Ahorro diario promedio',
      desc: 'En cuadres de caja e inventario',
    },
    {
      value: '4.9 / 5',
      label: 'Calificación en tiendas',
      desc: 'Basado en +2,800 opiniones reales',
    },
  ];

  return (
    <section className="py-12 border-b border-neutral-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((item, index) => (
            <div key={index} className="text-left">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1">
                {item.label}
              </div>
              <div className="text-xs text-neutral-500 mt-0.5">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
