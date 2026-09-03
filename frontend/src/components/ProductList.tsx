import { useEffect, useState } from 'react';

import { getProducts } from '../services/productService';
import type { Product } from '../types';

export function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true);

        const response = await getProducts({
          page: 0,
          size: 12,
        });

        setProducts(response.content);
      } catch (err) {
        setError('Erro ao carregar produtos.');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p>Carregando produtos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.imageUrl}
            alt={product.name}
            className="rounded-xl"
          />

          <h2>{product.name}</h2>

          <p>{product.description}</p>

          <strong>
            R$ {product.price.toFixed(2)}
          </strong>
        </div>
      ))}
    </div>
  );
}