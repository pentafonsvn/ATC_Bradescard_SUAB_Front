import { Segmented, Space } from 'antd';
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

  const options = products.map((product) => ({
    label: (
      <Space size={4}>
        <span style={{ color: productColors[product.tipo] }}>
          {productIcons[product.tipo]}
        </span>
        <span>{product.nombre}</span>
      </Space>
    ),
    value: product.id,
  }));

  return (
    <Segmented
      value={selectedProduct?.id}
      onChange={(value) => selectProduct(value as string)}
      options={options}
      block
      size="middle"
    />
  );
};

export default ProductSelector;
