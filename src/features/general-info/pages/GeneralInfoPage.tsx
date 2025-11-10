import { Space } from 'antd';
import PageContainer from '@/shared/components/Layout/PageContainer';
import PageHeader from '@/shared/components/Layout/PageHeader';
import PageSkeleton from '@/shared/components/Feedback/PageSkeleton';
import ErrorState from '@/shared/components/Feedback/ErrorState';
import { useGeneralInfo } from '../hooks/useGeneralInfo';
import PersonalInfoCard from '../components/PersonalInfoCard';
import AdicionalesTable from '../components/AdicionalesTable';
import BeneficiariosTable from '../components/BeneficiariosTable';

const GeneralInfoPage = () => {
  const { data, isLoading, error, refetch } = useGeneralInfo();

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
      <PageHeader title="Información General" />
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <PersonalInfoCard data={data} />
        <Space direction="horizontal" size="middle" style={{ display: 'flex' }}>
          <AdicionalesTable data={data.adicionales} />
          <BeneficiariosTable data={data.beneficiarios} />
        </Space>
      </Space>
    </PageContainer>
  );
};

export default GeneralInfoPage;
