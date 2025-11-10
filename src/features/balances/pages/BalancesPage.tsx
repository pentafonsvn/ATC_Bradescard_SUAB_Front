import PageContainer from '@/shared/components/Layout/PageContainer';
import PageHeader from '@/shared/components/Layout/PageHeader';
import TableSkeleton from '@/shared/components/Feedback/TableSkeleton';
import ErrorState from '@/shared/components/Feedback/ErrorState';
import BalancesTable from '../components/BalancesTable';
import useBalances from '../hooks/useBalances';

const BalancesPage = () => {
  const { data, isLoading, isError, refetch, error } = useBalances();

  return (
    <PageContainer>
      <PageHeader title="Balances" />
      {isLoading && <TableSkeleton />}
      {isError && <ErrorState subTitle={(error as any)?.message} onRetry={() => refetch()} />}
      {!isLoading && !isError && data && <BalancesTable data={data} />}
    </PageContainer>
  );
};

export default BalancesPage;
