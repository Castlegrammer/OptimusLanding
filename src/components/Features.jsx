import React from 'react';
import { 
  Zap, 
  Package, 
  WifiOff, 
  Users, 
  Printer, 
  BarChart3, 
  ShieldCheck, 
  QrCode 
} from 'lucide-react';

export default function Features() {
  const items = [
    {
      icon: Zap,
      title: 'Punto de venta express (POS)',
      desc: 'Cobra en pocos toques, calcula cambios exactos y entrega recibos digitales por WhatsApp o impresos por Bluetooth.',
    },
    {
      icon: WifiOff,
      title: 'Operatividad 100% offline',
      desc: 'No detengas tus ventas si no hay señal o se corta la red. La app almacena todo en tu teléfono y sincroniza al volver la conexión.',
    },
    {
      icon: Package,
      title: 'Control de inventario y quiebre de stock',
      desc: 'Actualización en tiempo real con cada ticket. Configura umbrales mínimos y recibe avisos antes de quedarte sin existencias.',
    },
    {
      icon: Users,
      title: 'Cuentas por cobrar y control de crédito',
      desc: 'Registra los saldos pendientes de clientes de confianza. Envía recordatorios de cobro claros y formales sin perder clientes.',
    },
    {
      icon: BarChart3,
      title: 'Cuadre de caja y utilidad neta',
      desc: 'Diferencia cobros en efectivo, tarjetas y transferencias. Conoce tus ganancias reales diarias descontando el costo de mercadería.',
    },
    {
      icon: ShieldCheck,
      title: 'Roles de usuario y auditoría',
      desc: 'Crea cuentas para tus cajeros o encargados sin revelarles costos de compra, márgenes globales o balances confidenciales.',
    },
  ];

  return (
    <section id="funcionalidades" className="py-20 border-b border-neutral-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Capacidades del sistema
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
            Diseñado para la operativa diaria de tu mostrador
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            Herramientas directas, sin menús sobrecargados ni configuraciones innecesarias.
          </p>
        </div>

        {/* Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl border border-neutral-200/90 bg-neutral-50/50 hover:bg-neutral-50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 mb-4 shadow-2xs">
                    <Icon className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
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
