import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    // Consumiendo datos estructurales reales desde el servidor API
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error al conectar con el servidor de catálogo.');
        }
        return res.json();
      })
      .then((data) => {
        // Diccionario actualizado con enlaces de alta disponibilidad activos
        const autosPremium = [
          { marca: "Porsche 911 Turbo S", cat: "Supercar", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=600&auto=format&fit=crop" },
          { marca: "Ferrari F8 Tributo", cat: "Exotic", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=600&auto=format&fit=crop" },
          { marca: "Lamborghini Huracán", cat: "Hypercar", img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?q=80&w=600&auto=format&fit=crop" },
          { marca: "Aston Martin Vantage", cat: "Grand Tourer", img: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?q=80&w=600&auto=format&fit=crop" },
          { marca: "McLaren 720S Spider", cat: "Exotic", img: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600&auto=format&fit=crop" }, // <-- URL Nueva y probada
          { marca: "Audi R8 V10 Performance", cat: "Supercar", img: "https://images.unsplash.com/photo-1603553329474-99f95f35394f?q=80&w=600&auto=format&fit=crop" },
          { marca: "Corvette Z06 Premium", cat: "Sports Coupe", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop" }, // <-- URL Nueva y probada
          { marca: "Maserati MC20 Cielo", cat: "Gourmet Edition", img: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=600&auto=format&fit=crop" }
        ]; 

        // Mapeamos los datos del fetch real inyectando el catálogo multimedia de alta definición
        const productosTransformados = data.results.slice(0, 8).map((item, index) => ({
          id: item.id,
          title: autosPremium[index].marca,
          category: autosPremium[index].cat,
          image: autosPremium[index].img,
          price: `$${(245000 + (item.id * 12500)).toLocaleString()}` // Cálculo de precio dinámico por id
        }));

        setProducts(productosTransformados);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="centro-estado">
        <p className="txt-loading">✨ Inicializando showroom automotriz premium...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="centro-estado">
        <p className="txt-error">❌ Error de conexión: {error}</p>
      </div>
    );
  }

  return (
    <main className="laboratorio-layout">
      <header className="lab-header">
        <h1>🏎️ Veloce Femme • Luxury Showroom</h1>
        <p>Catálogo exclusivo de ingeniería automotriz de alta gama — Datos dinámicos en tiempo real</p>
      </header>

      <section className="product-grid">
        {products.map((auto) => (
          <ProductCard 
            key={auto.id} 
            title={auto.title} 
            price={auto.price} 
            category={auto.category}
            image={auto.image} 
          />
        ))}
      </section>
    </main>
  );
} 