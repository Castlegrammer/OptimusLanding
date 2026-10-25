import React, { useState } from 'react';
import { ShoppingCart, Package, Users, BarChart3, Check, Send, Plus, Minus, ArrowRight, Calculator, MessageSquareText, Sparkles } from 'lucide-react';

export default function InteractiveAppDemo({ onOpenDownloadModal }) {
  const [activeTab, setActiveTab] = useState('pos');

  // Multi-rate reference for Venezuelan bodegas & entrepreneurs
  const bcvRate = 42.10;

  // POS State
  const [products] = useState([
    { id: 1, name: 'Harina de Maíz Blanco 1kg', sku: 'HAR-001', price: 1.20, stock: 45 },
    { id: 2, name: 'Queso Llanero Blanco 500g', sku: 'QUE-500', price: 3.50, stock: 18 },
    { id: 3, name: 'Café Molido Gourmet 250g', sku: 'CAF-250', price: 2.80, stock: 24 },
    { id: 4, name: 'Arroz Superior 1kg', sku: 'ARR-101', price: 1.10, stock: 35 },
    { id: 5, name: 'Aceite Vegetal 1L', sku: 'ACE-100', price: 2.40, stock: 12 },
    { id: 6, name: 'Refresco Familiar 1.5L', sku: 'REF-150', price: 1.50, stock: 20 },
  ]);

  const [cart, setCart] = useState([
    { id: 1, name: 'Harina de Maíz Blanco 1kg', price: 1.20, qty: 2 },
    { id: 2, name: 'Queso Llanero Blanco 500g', price: 3.50, qty: 1 },
  ]);

  const [saleCompleted, setSaleCompleted] = useState(false);

  // Inventory State
  const [inventory, setInventory] = useState([
    { id: 101, name: 'Harina de Maíz Blanco 1kg', sku: 'HAR-001', stock: 6, min: 15, cost: 0.85, price: 1.20 },
    { id: 102, name: 'Leche Líquida 1L', sku: 'LEC-002', stock: 28, min: 10, cost: 1.10, price: 1.60 },
    { id: 103, name: 'Atún en Lata 140g', sku: 'ATU-003', stock: 4, min: 12, cost: 0.90, price: 1.45 },
    { id: 104, name: 'Jabón Multiuso Barra', sku: 'JAB-004', stock: 32, min: 15, cost: 0.50, price: 0.90 },
  ]);

  // Debt State (Libreta de Fiado con abonos)
  const [debtors, setDebtors] = useState([
    { 
      id: 201, 
      name: 'Doña Carmen Silva', 
      totalFiado: 35.00, 
      totalAbonado: 15.00, 
      balance: 20.00, 
      due: 'Ayer', 
      phone: '+58 412 123 4567',
      lastAbono: 'Abonó $15.00 ayer en efectivo'
    },
    { 
      id: 202, 
      name: 'Carlos Mendoza (Taller)', 
      totalFiado: 55.00, 
      totalAbonado: 25.00, 
      balance: 30.00, 
      due: 'Hace 3 días', 
      phone: '+58 414 987 6543',
      lastAbono: 'Abonó $25.00 por Pago Móvil'
    },
    { 
      id: 203, 
      name: 'Profesor Roberto Gómez', 
      totalFiado: 12.50, 
      totalAbonado: 0.00, 
      balance: 12.50, 
      due: 'Hoy', 
      phone: '+58 424 555 1234',
      lastAbono: 'Sin abonos previos'
    },
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

  const cartTotalUSD = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const cartTotalVES = cartTotalUSD * bcvRate;

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setSaleCompleted(true);
    setTimeout(() => {
      setCart([]);
      setSaleCompleted(false);
    }, 3000);
  };

  const handleSendReminder = (name) => {
    setWhatsappSent(name);
    setTimeout(() => setWhatsappSent(null), 3500);
  };

  const handleAbonar = (id, amount) => {
    setDebtors(debtors.map(d => {
      if (d.id === id) {
        const newBal = Math.max(0, d.balance - amount);
        const newAbonado = d.totalAbonado + (d.balance - newBal);
        return {
          ...d,
          balance: newBal,
          totalAbonado: newAbonado,
          lastAbono: `Abonó $${amount.toFixed(2)} recién registrado`
        };
      }
      return d;
    }));
  };

  const handleReplenish = (id) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, stock: item.stock + 10 } : item));
  };

  return (
    <section id="simulador" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Simulador interactivo en vivo</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            Prueba cómo funciona en tu mostrador
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Haz clic en los productos, calcula el vuelto en Bs y Dólares o registra abonos en la libreta de fiado.
          </p>
        </div>

        {/* Minimal Segmented Control */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-white border border-slate-200/90 shadow-sm max-w-full overflow-x-auto gap-1">
            <button
              onClick={() => setActiveTab('pos')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'pos' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              1. Punto de Venta & Vueltos
            </button>
            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'inventory' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Package className="w-4 h-4" />
              2. Inventario & Stock
            </button>
            <button
              onClick={() => setActiveTab('debts')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'debts' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <Users className="w-4 h-4" />
              3. Clientes & Libreta de Fiado
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                activeTab === 'reports' 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              4. Cuadre de Caja & Ganancias
            </button>
          </div>
        </div>

        {/* Simulator Box */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-900/5 p-6 sm:p-8 max-w-4xl mx-auto">
          
          {/* TAB 1: POS */}
          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              
              {/* Product catalog */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div>
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Catálogo de productos</span>
                    <span className="text-xs text-slate-500 ml-2 hidden sm:inline">• Toca para agregar al ticket</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Tasa BCV: {bcvRate.toFixed(2)} Bs/$
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => addToCart(p)}
                      className="p-3 text-left border border-slate-200 hover:border-blue-400 rounded-2xl transition-all bg-white hover:bg-blue-50/20 flex flex-col justify-between h-24 group hover:shadow-sm"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-blue-600 transition-colors">{p.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono mt-0.5">{p.sku}</div>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-extrabold text-slate-900">${p.price.toFixed(2)}</span>
                        <span className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full font-medium">Stock: {p.stock}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Ticket / Cart */}
              <div className="md:col-span-5 bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Ticket en Mostrador</span>
                    <span className="text-xs text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                      {cart.reduce((s, i) => s + i.qty, 0)} artículos
                    </span>
                  </div>

                  {saleCompleted ? (
                    <div className="py-10 text-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-6 h-6 stroke-[3]" />
                      </div>
                      <div className="text-sm font-bold text-slate-900">¡Venta registrada con éxito!</div>
                      <div className="text-xs text-slate-500">Caja actualizada e inventario descontado.</div>
                    </div>
                  ) : (
                    <div className="py-3 space-y-2 max-h-52 overflow-y-auto">
                      {cart.length === 0 ? (
                        <div className="py-8 text-center text-xs text-slate-400">
                          El ticket está vacío. Toca un producto a la izquierda para cobrar.
                        </div>
                      ) : (
                        cart.map((item) => (
                          <div key={item.id} className="flex justify-between items-center text-xs bg-white p-2.5 rounded-xl border border-slate-200 shadow-2xs">
                            <div className="pr-2">
                              <div className="font-semibold text-slate-800 line-clamp-1">{item.name}</div>
                              <div className="text-[10px] text-slate-400 font-medium">${item.price.toFixed(2)} c/u</div>
                            </div>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <button
                                onClick={() => updateQty(item.id, -1)}
                                className="w-5 h-5 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold"
                              >
                                -
                              </button>
                              <span className="font-bold text-slate-800 w-5 text-center">{item.qty}</span>
                              <button
                                onClick={() => updateQty(item.id, 1)}
                                className="w-5 h-5 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 font-bold"
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
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="text-xs font-semibold text-slate-500">Total a pagar:</span>
                        <span className="text-xl font-black text-slate-900">${cartTotalUSD.toFixed(2)} USD</span>
                      </div>
                      <div className="flex justify-between items-center text-xs text-slate-500 bg-blue-50/70 px-2.5 py-1.5 rounded-lg border border-blue-100">
                        <span className="font-medium text-blue-800">Al cambio oficial BCV:</span>
                        <span className="font-bold text-blue-900">Bs {cartTotalVES.toFixed(2)}</span>
                      </div>
                    </div>

                    <button
                      onClick={handleCheckout}
                      disabled={cart.length === 0}
                      className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 disabled:opacity-40 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 flex items-center justify-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Cobrar y emitir recibo</span>
                    </button>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: INVENTORY */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Control de inventario y reposición</h3>
                  <p className="text-xs text-slate-500">Avisos automáticos cuando la existencia llega al stock mínimo.</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-y border-slate-200 text-slate-600 text-[11px] font-bold">
                    <tr>
                      <th className="py-2.5 px-3">Producto</th>
                      <th className="py-2.5 px-3">SKU</th>
                      <th className="py-2.5 px-3">Stock actual</th>
                      <th className="py-2.5 px-3">Mínimo</th>
                      <th className="py-2.5 px-3">Costo / Venta</th>
                      <th className="py-2.5 px-3">Estado</th>
                      <th className="py-2.5 px-3 text-right">Acción rápida</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {inventory.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-3 px-3 font-semibold text-slate-800">{item.name}</td>
                        <td className="py-3 px-3 text-slate-400 font-mono text-[11px]">{item.sku}</td>
                        <td className="py-3 px-3 font-extrabold text-slate-900">{item.stock} uds</td>
                        <td className="py-3 px-3 text-slate-500">{item.min} uds</td>
                        <td className="py-3 px-3 text-slate-600 font-medium">${item.cost.toFixed(2)} / ${item.price.toFixed(2)}</td>
                        <td className="py-3 px-3">
                          {item.stock <= item.min ? (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                              Stock bajo
                            </span>
                          ) : (
                            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Normal
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <button
                            onClick={() => handleReplenish(item.id)}
                            className="px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-[11px] transition-colors border border-blue-200"
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

          {/* TAB 3: DEBTS / LIBRETA DE FIADO */}
          {activeTab === 'debts' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 gap-2">
                <div>
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Libreta de Fiado & Control de Abonos</h3>
                  <p className="text-xs text-slate-500">Historial exacto de lo que debe el cliente y lo que ha ido abonando.</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-right">
                  <div className="text-[10px] text-amber-700 font-medium">Total pendiente por cobrar:</div>
                  <div className="text-base font-black text-amber-900">
                    ${debtors.reduce((sum, d) => sum + d.balance, 0).toFixed(2)} USD
                  </div>
                </div>
              </div>

              {whatsappSent && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 shadow-xs">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Comprobante y recordatorio formal enviado a <strong>{whatsappSent}</strong> por WhatsApp.</span>
                </div>
              )}

              <div className="space-y-2.5">
                {debtors.map((d) => (
                  <div key={d.id} className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs hover:border-amber-200 transition-colors">
                    <div>
                      <div className="font-bold text-slate-800 flex items-center gap-2">
                        <span>{d.name}</span>
                        <span className="text-[10px] text-slate-400 font-mono font-normal">{d.phone}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">
                        <span className="text-emerald-700 font-medium">Abonado: ${d.totalAbonado.toFixed(2)}</span>
                        <span className="mx-1.5">•</span>
                        <span>{d.lastAbono}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 justify-between sm:justify-end">
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block font-medium">Resta por pagar</span>
                        <span className={`font-black ${d.balance > 0 ? 'text-amber-800 text-sm' : 'text-emerald-600 text-sm'}`}>
                          ${d.balance.toFixed(2)}
                        </span>
                      </div>

                      {d.balance > 0 ? (
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleSendReminder(d.name)}
                            className="px-2.5 py-1.5 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold transition-colors flex items-center gap-1 text-[11px]"
                          >
                            <MessageSquareText className="w-3.5 h-3.5 text-emerald-600" />
                            WhatsApp
                          </button>
                          <button
                            onClick={() => handleAbonar(d.id, 10.00)}
                            className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold transition-all text-[11px] shadow-xs"
                          >
                            + Abonar $10
                          </button>
                        </div>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[11px] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> Cuenta al día
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: REPORTS / CAJA Y FINANZAS */}
          {activeTab === 'reports' && (
            <div className="space-y-5">
              <div>
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">Cierre de Caja & Utilidad Neta Real</h3>
                <p className="text-xs text-slate-500">Métricas transparentes descontando el costo exacto de tu mercadería.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70">
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Ventas brutas del mes</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">$2,850.00</div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-1">142 transacciones en mostrador</div>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70">
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Costo de reposición</div>
                  <div className="text-2xl font-black text-slate-900 mt-1">$1,710.00</div>
                  <div className="text-[10px] text-slate-500 font-medium mt-1">Margen promedio 40.0%</div>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20">
                  <div className="text-[11px] text-emerald-100 font-bold uppercase tracking-wider">Utilidad neta líquida</div>
                  <div className="text-2xl font-black text-white mt-1">$1,140.00</div>
                  <div className="text-[10px] text-emerald-100 font-medium mt-1">Ganancia limpia en tu bolsillo</div>
                </div>
              </div>
            </div>
          )}

          {/* Simulator Footer */}
          <div className="mt-8 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 text-center sm:text-left">
              Optimus360 incluye además sincronización multi-caja, impresión bluetooth térmica y calculadora multitasas.
            </span>
            <button
              onClick={onOpenDownloadModal}
              className="text-xs font-bold px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Descargar aplicación gratis</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
