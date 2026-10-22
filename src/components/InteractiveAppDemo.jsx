import React, { useState } from 'react';
import { ShoppingCart, Package, CreditCard, BarChart2, Check, QrCode, Send, Plus, Minus, ArrowRight } from 'lucide-react';

export default function InteractiveAppDemo({ onOpenDownloadModal }) {
  const [activeTab, setActiveTab] = useState('pos');

  // POS State
  const [products] = useState([
    { id: 1, name: 'Café Grano Especial 250g', sku: 'CAF-250', price: 4.50, stock: 24 },
    { id: 2, name: 'Aceite de Oliva Extra 500ml', sku: 'ACE-500', price: 8.20, stock: 12 },
    { id: 3, name: 'Arroz Superior 1kg', sku: 'ARR-001', price: 2.10, stock: 45 },
    { id: 4, name: 'Bebida Mineral 500ml', sku: 'BEB-500', price: 1.80, stock: 30 },
    { id: 5, name: 'Detergente Concentrado 1L', sku: 'DET-100', price: 5.90, stock: 15 },
    { id: 6, name: 'Avena en Hojuelas 500g', sku: 'AVE-500', price: 1.75, stock: 28 },
  ]);

  const [cart, setCart] = useState([
    { id: 1, name: 'Café Grano Especial 250g', price: 4.50, qty: 1 },
    { id: 4, name: 'Bebida Mineral 500ml', price: 1.80, qty: 2 },
  ]);

  const [saleCompleted, setSaleCompleted] = useState(false);

  // Inventory State
  const [inventory, setInventory] = useState([
    { id: 101, name: 'Harina de Trigo 1kg', sku: 'HAR-01', stock: 4, min: 10, cost: 1.10, price: 1.80 },
    { id: 102, name: 'Leche Entera 1L', sku: 'LEC-02', stock: 28, min: 15, cost: 0.90, price: 1.45 },
    { id: 103, name: 'Atún en Trozos 170g', sku: 'ATU-03', stock: 7, min: 12, cost: 1.30, price: 2.20 },
    { id: 104, name: 'Jabón Neutro Barra', sku: 'JAB-04', stock: 35, min: 20, cost: 0.70, price: 1.20 },
  ]);

  // Debt State
  const [debtors, setDebtors] = useState([
    { id: 201, name: 'Roberto Gómez', balance: 145.00, due: 'Hace 3 días', phone: '+52 55 9876 5432' },
    { id: 202, name: 'Carmen Silva', balance: 48.50, due: 'Ayer', phone: '+52 55 1234 5678' },
    { id: 203, name: 'Taller Mecánico Central', balance: 320.00, due: 'Hace 6 días', phone: '+52 55 8765 4321' },
  ]);

  const [whatsappSent, setWhatsappSent] = useState(null);

  const addToCart = (product) => {
    setSaleCompleted(false);
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setSaleCompleted(true);
    setTimeout(() => setCart([]), 2500);
  };

  const handleSendReminder = (name) => {
    setWhatsappSent(name);
    setTimeout(() => setWhatsappSent(null), 3000);
  };

  const handlePayDebt = (id) => {
    setDebtors(debtors.map(d => d.id === id ? { ...d, balance: 0 } : d));
  };

  const handleReplenish = (id) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, stock: item.stock + 10 } : item));
  };

  return (
    <section id="simulador" className="py-20 bg-neutral-50/60 border-b border-neutral-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Demostración interactiva
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-950">
            Experimenta el flujo de trabajo en vivo
          </h2>
          <p className="text-neutral-600 text-sm mt-2">
            Comprueba la rapidez de la interfaz. Sin registro ni instalaciones previas.
          </p>
        </div>

        {/* Minimal Segmented Control */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 rounded-xl bg-white border border-neutral-200 shadow-sm max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('pos')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === 'pos' ? 'bg-neutral-950 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              1. Punto de venta
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === 'inventory' ? 'bg-neutral-950 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              2. Inventario y stock
            </button>
            <button
              onClick={() => setActiveTab('debts')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === 'debts' ? 'bg-neutral-950 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              3. Cuentas por cobrar
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                activeTab === 'reports' ? 'bg-neutral-950 text-white shadow-sm' : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              4. Cierre y finanzas
            </button>
          </div>
        </div>

        {/* Simulator Box */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
          
          {/* TAB 1: POS */}
          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Product catalog */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-neutral-100">
                  <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Catálogo rápido</span>
                  <span className="text-xs text-neutral-500">Toca para agregar al ticket</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => addToCart(p)}
                      className="p-3 text-left border border-neutral-200 hover:border-neutral-900 rounded-xl transition-all bg-white hover:bg-neutral-50 flex flex-col justify-between h-24 group"
                    >
                      <div>
                        <div className="text-xs font-semibold text-neutral-900 line-clamp-1">{p.name}</div>
                        <div className="text-[10px] text-neutral-400 font-mono mt-0.5">{p.sku}</div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-bold text-neutral-950">${p.price.toFixed(2)}</span>
                        <span className="text-[10px] text-neutral-500 bg-neutral-100 px-1.5 py-0.5 rounded">Stock: {p.stock}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticket / Cart */}
              <div className="md:col-span-5 bg-neutral-50 p-5 rounded-xl border border-neutral-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                    <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Ticket actual</span>
                    <span className="text-xs text-neutral-500 font-mono">{cart.length} líneas</span>
                  </div>

                  {saleCompleted ? (
                    <div className="py-12 text-center space-y-2">
                      <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                        <Check className="w-5 h-5" />
                      </div>
                      <div className="text-sm font-bold text-neutral-900">Venta procesada con éxito</div>
                      <div className="text-xs text-neutral-500">Inventario actualizado automáticamente.</div>
                    </div>
                  ) : (
                    <div className="py-3 space-y-2 max-h-52 overflow-y-auto">
                      {cart.length === 0 ? (
                        <div className="py-8 text-center text-xs text-neutral-400">
                          El carrito está vacío. Haz clic en un producto a la izquierda.
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-xs bg-white p-2.5 rounded-lg border border-neutral-200">
                            <div>
                              <div className="font-medium text-neutral-900">{item.name}</div>
                              <div className="text-[10px] text-neutral-400">${item.price.toFixed(2)} c/u</div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => updateQty(item.id, -1)}
                                className="w-5 h-5 rounded bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700"
                              >
                                -
                              </button>
                              <span className="font-bold text-neutral-900 w-4 text-center">{item.qty}</span>
                              <button
                                onClick={() => updateQty(item.id, 1)}
                                className="w-5 h-5 rounded bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>

                {!saleCompleted && (
                  <div className="pt-4 border-t border-neutral-200 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-neutral-500">Total a pagar</span>
                      <span className="text-xl font-bold text-neutral-950">${cartTotal.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={handleCheckout}
                      disabled={cart.length === 0}
                      className="w-full py-2.5 bg-neutral-950 hover:bg-neutral-800 disabled:opacity-40 text-white font-semibold rounded-lg text-xs transition-colors"
                    >
                      Cobrar y emitir ticket
                    </button>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: INVENTORY */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                <div>
                  <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Kardex y control de existencias</h3>
                  <p className="text-xs text-neutral-500">Alertas automáticas cuando el inventario cruza el mínimo.</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-neutral-50 border-y border-neutral-200 text-neutral-500 text-[11px] font-semibold">
                    <tr>
                      <th className="py-2.5 px-3">Producto</th>
                      <th className="py-2.5 px-3">SKU</th>
                      <th className="py-2.5 px-3">Stock actual</th>
                      <th className="py-2.5 px-3">Mínimo</th>
                      <th className="py-2.5 px-3">Costo / Venta</th>
                      <th className="py-2.5 px-3">Estado</th>
                      <th className="py-2.5 px-3 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-100">
                    {inventory.map((item) => (
                      <tr key={item.id} className="hover:bg-neutral-50">
                        <td className="py-3 px-3 font-medium text-neutral-900">{item.name}</td>
                        <td className="py-3 px-3 text-neutral-400 font-mono text-[11px]">{item.sku}</td>
                        <td className="py-3 px-3 font-bold text-neutral-950">{item.stock} uds</td>
                        <td className="py-3 px-3 text-neutral-500">{item.min} uds</td>
                        <td className="py-3 px-3 text-neutral-600">${item.cost.toFixed(2)} / ${item.price.toFixed(2)}</td>
                        <td className="py-3 px-3">
                          {item.stock <= item.min ? (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-rose-50 text-rose-700 border border-rose-200">
                              Stock bajo
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Normal
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => handleReplenish(item.id)}
                            className="text-[11px] font-medium text-neutral-900 hover:text-black underline underline-offset-2"
                          >
                            +10 Reponer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: DEBTS */}
          {activeTab === 'debts' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-neutral-100">
                <div>
                  <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Cuentas por cobrar a clientes</h3>
                  <p className="text-xs text-neutral-500">Registro claro del fiado con recordatorios educados por WhatsApp.</p>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-neutral-400">Total adeudado</div>
                  <div className="text-base font-bold text-neutral-950">
                    ${debtors.reduce((sum, d) => sum + d.balance, 0).toFixed(2)}
                  </div>
                </div>
              </div>

              {whatsappSent && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Mensaje de recordatorio formal enviado a <strong>{whatsappSent}</strong>.</span>
                </div>
              )}

              <div className="space-y-2">
                {debtors.map((d) => (
                  <div key={d.id} className="p-3.5 bg-neutral-50 rounded-xl border border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div>
                      <div className="font-semibold text-neutral-900">{d.name}</div>
                      <div className="text-[11px] text-neutral-500 mt-0.5 font-mono">{d.phone} • Vencimiento: {d.due}</div>
                    </div>
                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <div className="text-right">
                        <span className="text-[10px] text-neutral-400 block">Saldo</span>
                        <span className={`font-bold ${d.balance > 0 ? 'text-neutral-950 text-sm' : 'text-neutral-400'}`}>
                          ${d.balance.toFixed(2)}
                        </span>
                      </div>
                      {d.balance > 0 ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSendReminder(d.name)}
                            className="px-2.5 py-1.5 rounded-lg border border-neutral-300 hover:bg-white text-neutral-700 font-medium transition-colors"
                          >
                            WhatsApp
                          </button>
                          <button
                            onClick={() => handlePayDebt(d.id)}
                            className="px-2.5 py-1.5 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white font-medium transition-colors"
                          >
                            Liquidar
                          </button>
                        </div>
                      ) : (
                        <span className="text-emerald-700 font-medium flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Al día
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REPORTS */}
          {activeTab === 'reports' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Resumen de utilidades y caja</h3>
                <p className="text-xs text-neutral-500">Cifras reales descontando el costo de compra de mercadería.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-[11px] text-neutral-500 font-medium">Ventas brutas del mes</div>
                  <div className="text-xl font-bold text-neutral-950 mt-1">$14,890.00</div>
                  <div className="text-[10px] text-neutral-500 mt-1">+18% vs mes previo</div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50">
                  <div className="text-[11px] text-neutral-500 font-medium">Costo de reposición</div>
                  <div className="text-xl font-bold text-neutral-950 mt-1">$8,920.00</div>
                  <div className="text-[10px] text-neutral-500 mt-1">Margen promedio 40.1%</div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-950 bg-neutral-950 text-white">
                  <div className="text-[11px] text-neutral-400 font-medium">Utilidad neta líquida</div>
                  <div className="text-xl font-bold text-white mt-1">$5,970.00</div>
                  <div className="text-[10px] text-emerald-400 mt-1">Dinero real en cuenta</div>
                </div>
              </div>
            </div>
          )}

          {/* Simulator Footer */}
          <div className="mt-8 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              Optimus360 incluye además sincronización multi-caja, impresión bluetooth y modo offline.
            </span>
            <button
              onClick={onOpenDownloadModal}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-neutral-950 hover:bg-neutral-800 text-white transition-colors shrink-0"
            >
              Descargar aplicación completa
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
