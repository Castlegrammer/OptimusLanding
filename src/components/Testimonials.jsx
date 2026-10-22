import React from 'react';
import { Star, Quote, CheckCircle2, Building2 } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'Dueño de Abarrotes "La Esperanza"',
      city: 'Monterrey, México',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      impact: 'Ahorro 2.5 horas diarias al cerrar caja',
      quote: 'Antes el cierre de caja era una pesadilla. Siempre faltaba dinero o no cuadraba con las notas de papel. Desde que uso Optimus360 en mi celular, sé al centavo cuánto vendí en efectivo y tarjetas en menos de un minuto.',
    },
    {
      name: 'Valeria Restrepo',
      role: 'Fundadora de "Boutique Índigo"',
      city: 'Medellín, Colombia',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      impact: 'Cero pérdidas por prendas sin registrar',
      quote: 'El control por tallas y colores es genial. Además, cuando salgo a ferias de diseño de fin de semana, cobro directamente desde mi teléfono y le mando el ticket al cliente por WhatsApp con el logo de mi tienda.',
    },
    {
      name: 'Jorge Quispe',
      role: 'Gerente en Ferretería "El Tornillo Dorado"',
      city: 'Arequipa, Perú',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      impact: 'Recuperé $1,400 USD en fiados atrasados',
      quote: 'El módulo de cobranzas por WhatsApp es una maravilla. La gente no se ofende porque es un mensaje formal y ordenado. He recuperado deudas que daba por perdidas hace meses.',
    },
    {
      name: 'Matías Silva',
      role: 'Distribuidora de Bebidas y Snacks del Sur',
      city: 'Santiago, Chile',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80',
      rating: 5,
      impact: '100% de efectividad en rutas sin cobertura',
      quote: 'Mis preventistas van a almacenes en zonas rurales sin señal. La app nunca se traba, guarda todos los pedidos y cuando regresan a la base con wifi todo se sincroniza al inventario central de inmediato.',
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span>Historias de Éxito Reales</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Negocios que crecieron con Optimus360
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Descubre cómo miles de comerciantes transformaron su rutina diaria y aumentaron sus utilidades.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-brand-500/40 transition-all group"
            >
              <div>
                {/* Rating & Quantified Impact Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {t.impact}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Card */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-500/30"
                />
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-brand-300">{t.role}</div>
                  <div className="text-[11px] text-slate-500">{t.city}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
