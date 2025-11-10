import { useEffect } from 'react';
import { Space } from 'antd';
import PageContainer from '@/shared/components/Layout/PageContainer';
import PageSkeleton from '@/shared/components/Feedback/PageSkeleton';
import ErrorState from '@/shared/components/Feedback/ErrorState';
import { useGeneralInfo } from '../hooks/useGeneralInfo';
import { useAccountStore } from '@/app/store/account.store';
import { formatDate } from '@/core/utils/dateFormat';
import PersonalInfoCard from '../components/PersonalInfoCard';
import AdicionalesTable from '../components/AdicionalesTable';
import BeneficiariosTable from '../components/BeneficiariosTable';

const GeneralInfoPage = () => {
  const { data, isLoading, error, refetch } = useGeneralInfo();
  const { setAccount } = useAccountStore();

  // Inicializar contexto de cuenta cuando se carga la data
  useEffect(() => {
    if (data) {
      setAccount({
        accountNumber: data.numeroCuenta,
        status: data.estatusCuenta,
        clientName: data.nombreCompleto,
        lastContact: formatDate(data.fechaUltimoContacto, 'dateTime'),
        phone: data.telefonoCelular,
        clientSince: formatDate(data.clienteDesde, 'short'),
      });
    }
  }, [data, setAccount]);

  if (isLoading) {
    return <PageSkeleton />;
  }

  if (error) {
    return <ErrorState title="Error al cargar la información general" onRetry={() => refetch()} />;
  }

  if (!data) {
    return <ErrorState title="No hay información disponible" />;
  }

  return (
    <PageContainer>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <PersonalInfoCard data={data} />
        <Space direction="horizontal" size="small" style={{ display: 'flex' }}>
          <AdicionalesTable data={data.adicionales} />
          <BeneficiariosTable data={data.beneficiarios} />
        </Space>
      </Space>
    </PageContainer>
  );
};

export default GeneralInfoPage;
