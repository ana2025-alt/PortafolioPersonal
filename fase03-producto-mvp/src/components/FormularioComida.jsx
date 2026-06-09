import './FormularioComida.css';
import React, { useState } from 'react';

export default function FormularioComida({ onAgregar }) {
  const [plato, setPlato] = useState('');
  const [tipo, setTipo] = useState('Desayuno');
  const [calorias, setCalorias] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!plato || !calorias) return;
    
    onAgregar(plato, tipo, calorias);
    setPlato('');
    setCalorias('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-inferior-izq">
      <fieldset style={{ border: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <legend style={{ visibility: 'hidden', height: 0 }}>Nueva Receta Fitness</legend>
        
        <input 
          type="text" 
          placeholder="Nombre del plato (Ej: Arepa)..." 
          value={plato} 
          onChange={e => setPlato(e.target.value)} 
          className="input-mvp-pro" 
          required 
        />
        
        <div className="row-inputs-pro">
          <select value={tipo} onChange={e => setTipo(e.target.value)} className="input-mvp-pro">
            <option value="Desayuno">🍳 Desayuno</option>
            <option value="Almuerzo">🍗 Almuerzo</option>
            <option value="Merienda">🍎 Merienda</option>
            <option value="Cena">🫓 Cena</option>
          </select>
          
          <input 
            type="number" 
            placeholder="kcal" 
            value={calorias} 
            onChange={e => setCalorias(e.target.value)} 
            className="input-mvp-pro" 
            required 
          />
        </div>
        
        <button type="submit" className="btn-agregar-pro">Agregar al Plan Diario</button>
      </fieldset>
    </form>
  );
} 