import { Table } from 'antd';
import { Balance } from '../api/balances.api';
import { currency, dateTime } from '@/core/utils/formatters';

const BalancesTable = ({ data }: { data: Balance[] }) => {
  return (
    <Table rowKey={(r) => r.id} dataSource={data} pagination={false} columns={[
      { title: 'Cuenta', dataIndex: 'account' },
      { title: 'Saldo', dataIndex: 'amount', render: (v: number) => currency(v) },
      { title: 'Actualizado', dataIndex: 'updatedAt', render: (v: string) => dateTime(v) }
    ]} />
  );
};

export default BalancesTable;
