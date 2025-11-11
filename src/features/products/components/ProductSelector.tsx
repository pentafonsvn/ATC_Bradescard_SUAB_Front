import { Radio, Select, Space, Tag } from 'antd';
import {
  CreditCardOutlined,
  WalletOutlined,
  BankOutlined,
  RiseOutlined,
  DollarCircleFilled,
} from '@ant-design/icons';
import { useProductStore } from '@/app/store/product.store';
import type { ProductType } from '@/app/store/product.store';

const productIcons: Record<ProductType, React.ReactNode> = {
  credito: <CreditCardOutlined />,
  debito: <WalletOutlined />,
  ahorro: <BankOutlined />,
  inversion: <RiseOutlined />,
  prestamo: <DollarCircleFilled />,
};

const productColors: Record<ProductType, string> = {
  credito: '#3f2a01ff',
  debito: '#3f2a01ff',
  ahorro: '#3f2a01ff',
  inversion: '#3f2a01ff',
  prestamo: '#3f2a01ff',
};

const ProductSelector = () => {
  const { products, selectedProduct, selectProduct } = useProductStore();

  if (products.length === 0) return null;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
      <span style={{ fontSize: 12, color: '#ffffffff', marginRight: 4 }}>Producto(s):</span>
      <Radio.Group
        value={selectedProduct?.id}
        onChange={(e) => selectProduct(e.target.value)}
        optionType="button"
        buttonStyle="solid"
        size="small"
      >
        {products.map((product) => (
          <Radio.Button key={product.id} value={product.id}>
            <Space size={4}>
              <span style={{ color: productColors[product.tipo] }}>
                {productIcons[product.tipo]}
              </span>
              <span>{product.nombre}</span>
            </Space>
          </Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};

export default ProductSelector;
