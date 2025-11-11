import { Alert, Card, Typography, Spin } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import PageContainer from '@/shared/components/Layout/PageContainer';
import PageHeader from '@/shared/components/Layout/PageHeader';
import ErrorState from '@/shared/components/Feedback/ErrorState';
import BalanceSummaryCards from '../components/BalanceSummaryCards';
import CardholderExpensesTable from '../components/CardholderExpensesTable';
import ProductHeader from '@/features/products/components/ProductHeader';
import useBalances from '../hooks/useBalances';
import { useProductStore } from '@/app/store/product.store';

const { Title } = Typography;

const BalancesPage = () => {
  const { selectedProduct } = useProductStore();
  const clienteId = 'CLI-001'; // TODO: Obtener del contexto
  
  const { data, isLoading, isError, refetch, error } = useBalances(
    clienteId,
    selectedProduct?.id
  );

  return (
    <PageContainer>
      {/* Selector de producto */}
      <ProductHeader />

      <PageHeader title="Balances" />
      

      {!selectedProduct && (
        <Alert
          message="Seleccione un producto"
          description="Para ver los balances, por favor seleccione un producto del selector."
          type="info"
          icon={<InfoCircleOutlined />}
          showIcon
          style={{ marginTop: 16 }}
        />
      )}
      
      {selectedProduct && isLoading && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <Spin size="large" tip="Cargando balances..." />
        </div>
      )}
      
      {isError && <ErrorState subTitle={(error as any)?.message} onRetry={() => refetch()} />}
      
      {!isLoading && !isError && data && (
        <>
          {/* Resumen de métricas clave */}
          <BalanceSummaryCards
            saldoTotal={data.saldoTotal}
            fechaUltimoCorte={data.fechaUltimoCorte}
            depositosDesdeCorte={data.depositosDesdeCorte}
            gastosDesdeCorte={data.gastosDesdeCorte}
          />

          {/* Tabla de gastos por tarjetahabiente */}
          <Card
            size="small"
            title={
              <Title level={5} style={{ margin: 0 }}>
                Gastos por Tarjetahabiente
              </Title>
            }
            bordered={false}
            style={{ marginTop: 16 }}
          >
            <CardholderExpensesTable data={data.gastosPorTarjetahabiente} />
          </Card>
        </>
      )}
    </PageContainer>
  );
};

export default BalancesPage;
