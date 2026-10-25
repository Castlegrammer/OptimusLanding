import React from 'react';
import { 
  Zap, 
  Package, 
  WifiOff, 
  BookOpen, 
  Calculator, 
  Printer, 
  BarChart3, 
  ShieldCheck 
} from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Calculator,
      color: 'bg-blue-50 text-blue-600 border border-blue-100',
      title: 'POS Express & Calculadora de vuelto',
      desc: 'Calcula cambios exactos al instante en Dólares y Bolívares con tasas en tiempo real (BCV, USDT, Euro). Despacha más rápido sin equivocaciones en mostrador.',
    },
    {
      icon: WifiOff,
      color: 'bg-emerald-50 text-emerald-600 border border-emerald-100',
      title: 'Operatividad 100% offline sin internet',
      desc: 'No detengas tus cobros si se corta la señal o la energía. Tu base de datos SQLite vive en tu teléfono y se sincroniza automáticamente al restablecer la red.',
    },
    {
      icon: BookOpen,
      color: 'bg-amber-50 text-amber-600 border border-amber-100',
      title: 'Libreta de Fiado con control de abonos',
      desc: 'Registra deudas y lleva el historial de cuánto ha ido pagando cada cliente (+ Fió / - Abonó). Comparte estados de cuenta amigables y formales por WhatsApp.',
    },
    {
      icon: Package,
      color: 'bg-indigo-50 text-indigo-600 border border-indigo-100',
      title: 'Inventario inteligente y quiebre de stock',
      desc: 'El inventario se descuenta automáticamente con cada venta. Recibe alertas visuales cuando un producto alcance su nivel mínimo para reponer a tiempo.',
    },
    {
      icon: BarChart3,
      color: 'bg-teal-50 text-teal-600 border border-teal-100',
      title: 'Cuadre de caja multi-moneda y ganancias',
      desc: 'Desglose exacto de efectivo en $, bolívares en efectivo y Pago Móvil. Conoce tu utilidad líquida diaria descontando el costo real de reposición.',
    },
    {
      icon: Printer,
      color: 'bg-violet-50 text-violet-600 border border-violet-100',
      title: 'Tickets térmicos Bluetooth & Roles',
      desc: 'Imprime comandas y recibos en impresoras térmicas portátiles (58mm y 80mm). Asigna roles a tus ayudantes para que cobren sin ver tus utilidades confidenciales.',
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 border-b border-slate-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Diseñado para tu mostrador</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Todo lo que tu bodega o negocio necesita para crecer
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
            Sin configuraciones complicadas de sistemas corporativos. Herramientas ágiles y directas que cualquier persona domina en 5 minutos.
          </p>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl border border-slate-200/90 bg-white hover:bg-slate-50/50 transition-all hover:border-blue-300 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 shadow-2xs ${feat.color}`}>
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
