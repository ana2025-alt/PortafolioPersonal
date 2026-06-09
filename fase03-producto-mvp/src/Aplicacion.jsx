import React, { useState, useEffect } from 'react';
import FormularioComida from './components/FormularioComida';
import DetallePlato from './components/DetallePlato';
import TarjetaComida from './components/TarjetaComida';

export default function Aplicacion() {
  // LISTA POR DEFECTO PARA LA PRIMERA VEZ
  const listaInicial = [
    { id: 1, plato: 'Arepas con pollo mechado y queso', tipo: 'Desayuno', calorias: 350, listo: false, imagen: 'https://images.unsplash.com/photo-1628102476695-8a4a5bc9e09d?w=500&auto=format&fit=crop&q=60', ingredientes: ['Pollo desmechado', 'Harina de maíz', 'Queso'] },
    { id: 2, plato: 'Pollo a la plancha con arroz integral', tipo: 'Almuerzo', calorias: 550, listo: true, imagen: 'https://images.unsplash.com/photo-1376424354279-dcd5c0f1620a?w=500&auto=format&fit=crop&q=60', ingredientes: ['Pechuga de pollo', 'Arroz integral', 'Ensalada'] },
    { id: 3, plato: 'Yogurt griego con un puñado de almendras', tipo: 'Merienda', calorias: 180, listo: true, imagen: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60', ingredientes: ['Yogurt griego', 'Almendras', 'Miel'] }
  ];

  // LEER DE LOCALSTORAGE
  const [comidas, setComidas] = useState(() => {
    const guardadas = localStorage.getItem('nutri_comidas');
    return guardadas ? JSON.parse(guardadas) : listaInicial;
  });
  
  const [busqueda, setBusqueda] = useState('');

  // GUARDAR EN LOCALSTORAGE AUTOMÁTICAMENTE
  useEffect(() => {
    localStorage.setItem('nutri_comidas', JSON.stringify(comidas));
  }, [comidas]);

  // 🔍 ASIGNADOR INTELIGENTE DE IMÁGENES CORREGIDO
  const asignarImagenAutomatica = (nombre) => {
    const n = nombre.toLowerCase();
    
    if (n.includes('arepa')) {
      return 'https://images.unsplash.com/photo-1628102476695-8a4a5bc9e09d?w=500&auto=format&fit=crop&q=60';
    }
    if (n.includes('fresa') || n.includes('fruta') || n.includes('manzana') || n.includes('berry')) {
      return 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60'; // Imagen de fresas frescas premium
    }
    if (n.includes('pollo') || n.includes('carne') || n.includes('arroz') || n.includes('bistec') || n.includes('almuerzo')) {
      return 'https://images.unsplash.com/photo-1376424354279-dcd5c0f1620a?w=500&auto=format&fit=crop&q=60';
    }
    if (n.includes('yogurt') || n.includes('leche') || n.includes('merienda') || n.includes('almendras')) {
      return 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&auto=format&fit=crop&q=60';
    }
    if (n.includes('huevo') || n.includes('perico') || n.includes('cena')) {
      return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60';
    }
    
    // Si no coincide, deja el bowl de ensalada saludable por defecto
    return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60';
  };

  const manejarAgregarComida = (plato, tipo, calorias) => {
    const palabras = plato.split(' ');
    
    const nueva = {
      id: Date.now(),
      plato,
      tipo,
      calorias: parseInt(calorias),
      listo: false,
      imagen: asignarImagenAutomatica(plato), // Llamamos a la función inteligente aquí
      ingredientes: [palabras[0] || 'Ingrediente 1', palabras[1] || 'Carbohidratos', 'Macro Nutrientes']
    };
    
    setComidas([...comidas, nueva]);
  };

  const manejarAlternarListo = (id) => setComidas(comidas.map(c => c.id === id ? { ...c, listo: !c.listo } : c));
  const manejarEliminarComida = (id) => setComidas(comidas.filter(c => c.id !== id));

  const comidasFiltradas = comidas.filter(c => 
    c.plato.toLowerCase().includes(busqueda.toLowerCase()) || c.tipo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="nutri-dashboard-layout">
      <header className="nutri-top-bar">
        <div className="logo-section">
          <span className="logo-icon">🥗</span>
          <h2>NutriTrack Premium</h2>
        </div>
        <input 
          type="search" 
          placeholder="🔍 Buscar en el menú..." 
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
          className="input-buscador-top"
        />
      </header>

      <div className="nutri-main-grid">
        <aside className="panel-detalle-izquierdo">
          <DetallePlato platoDestacado={comidasFiltradas[0] || comidas[0]} />
          <FormularioComida onAgregar={manejarAgregarComida} />
        </aside>

        <main className="seccion-lista-derecha">
          {comidasFiltradas.length === 0 ? (
            <div className="caja-vacia-pro"><p>✨ Menú limpio o sin coincidencias.</p></div>
          ) : (
            comidasFiltradas.map(c => (
              <TarjetaComida 
                key={c.id} 
                comida={c} 
                onAlternar={manejarAlternarListo} 
                onEliminar={manejarEliminarComida} 
              />
            ))
          )}
        </main>
      </div>
    </div>
  );
} 