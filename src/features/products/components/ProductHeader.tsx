import { useEffect } from 'react';
import { Spin } from 'antd';
import { useProducts } from '../hooks/useProducts';
import { useProductStore } from '@/app/store/product.store';
import ProductSelector from './ProductSelector';

const ProductHeader = () => {
  const clienteId = 'CLI-001'; // TODO: Obtener del contexto/store
  const { data: products, isLoading } = useProducts(clienteId);
  const { setProducts } = useProductStore();

  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  return (
    <div
      style={{
        background: '#fafafa',
        borderBottom: '1px solid #e8e8e8',
        borderRadius: 4,
        padding: '8px 16px',
        margin: '12px 0',
        minHeight: 40,
      }}
    >
      {isLoading ? (
        <div style={{ textAlign: 'center' }}>
          <Spin size="small" />
        </div>
      ) : (
        <ProductSelector />
      )}
    </div>
  );
};

export default ProductHeader;
