import React, { useState } from 'react';
import { Store, Hammer, Shirt, Truck, Coffee, ShoppingBag, Check } from 'lucide-react';

export default function TargetAudience() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const industries = [
    {
      id: 'retail',
      icon: Store,
      name: 'Minimarkets & Abarrotes',
      title: 'Ventas a alta velocidad sin que se forme fila',
      description: 'Lector de códigos de barra veloz, control de fechas de vencimiento, alertas de reposición inmediata de refrescos y abarrotes, y cobro rápido en efectivo y billeteras electrónicas.',
      benefits: [
        'Registro de ventas en menos de 4 segundos',
        'Impresión de tickets térmicos Bluetooth',
        'Control estricto de caja por turno de cajero',
        'Módulo de fiado para vecinos habituales',
      ],
      tag: 'Alta Rotación'
    },
    {
      id: 'hardware',
      icon: Hammer,
      name: 'Ferreterías & Materiales',
      title: 'Miles de ítems organizados sin enredos',
      description: 'Maneja catálogo con miles de códigos (tornillería, herramientas, tubos), compras a proveedores, listas de precios diferenciadas por volumen y presupuestos/cotizaciones en PDF.',
      benefits: [
        'Búsqueda instantánea por nombre o código interno',
        'Descuentos por compras por mayor o cliente frecuente',
        'Emisión de presupuestos directos por WhatsApp',
        'Control de compras y pagos a proveedores',
      ],
      tag: 'Catálogo Extenso'
    },
    {
      id: 'fashion',
      icon: Shirt,
      name: 'Tiendas de Ropa & Calzado',
      title: 'Control por tallas, colores y variantes',
      description: 'Controla qué tallas o colores se agotan primero, calcula tus márgenes de ganancia reales en temporadas y liquidaciones, y fideliza clientes con su historial de compras.',
      benefits: [
        'Variantes de productos (Talla S/M/L, Colores)',
        'Catálogo digital fotográfico para mostrar al cliente',
        'Historial de compras y preferencias por cliente',
        'Control de devoluciones y cambios de prenda',
      ],
      tag: 'Tallas & Colores'
    },
    {
      id: 'distributors',
      icon: Truck,
      name: 'Distribuidoras & Preventa',
      title: 'Rutas de venta y despacho en calle',
      description: 'Tus vendedores toman pedidos directamente desde su celular en la ruta o bodega de los clientes, incluso en zonas sin señal de internet.',
      benefits: [
        'Toma de pedidos offline en ruta',
        'Sincronización central con almacén',
        'Control de cobranzas pendientes en calle',
        'Múltiples listas de precios (Mayorista, Minorista)',
      ],
      tag: 'Ventas en Calle'
    },
    {
      id: 'gastro',
      icon: Coffee,
      name: 'Cafeterías & Panaderías',
      title: 'Agilidad en pedidos de mostrador y mesa',
      description: 'Agiliza los pedidos para llevar, controla las materias primas (harina, café, azúcar) y cuadra caja con propinas y diversos métodos de pago.',
      benefits: [
        'Venta directa con combos y modificadores',
        'Impresión de comandas en cocina o barra',
        'Cuadres con desglose de métodos de pago',
        'Monitoreo de horas con mayor afluencia',
      ],
      tag: 'Mostrador Rápido'
    },
    {
      id: 'entrepreneurs',
      icon: ShoppingBag,
      name: 'Emprendedores & E-commerce',
      title: 'Profesionaliza tus ventas desde el día 1',
      description: 'Si vendes por Instagram, WhatsApp o ferias de fin de semana, emite notas de venta profesionales, lleva control del stock que te queda y tus números claros.',
      benefits: [
        'Notas de venta en PDF con el logo de tu marca',
        'Cálculo automático de costo y ganancia neta',
        'Envíos y estado de pedidos por despachar',
        'Comienza completamente gratis en 2 minutos',
      ],
      tag: 'Emprendimiento'
    },
  ];

  const current = industries[selectedIndustry];
  const CurrentIcon = current.icon;

  return (
    <section id="sectores" className="py-20 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>Versatilidad Comprobada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Diseñado a la medida de tu sector
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Optimus360 se adapta de forma flexible a la dinámica particular de cada tipo de negocio.
          </p>
        </div>

        {/* Industry Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            const isSelected = selectedIndustry === index;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustry(index)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30 scale-105'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Spotlight Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-500/20 text-brand-400 flex items-center justify-center">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand-400 px-2.5 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20">
                    {current.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {current.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.description}
              </p>

              <div className="pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Beneficios clave incluidos:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {current.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-slate-950 p-6 rounded-2xl border border-slate-800/80 text-center flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-white mb-1">100%</div>
              <div className="text-xs font-bold text-slate-300">Adaptable a tu negocio</div>
              <div className="text-[11px] text-slate-400 mt-2 mb-4">
                Configura tus impuestos locales, moneda y categorías en menos de 3 minutos.
              </div>
              <a
                href="#simulador"
                className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition-all border border-slate-700 block text-center"
              >
                Probar en el Simulador
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
