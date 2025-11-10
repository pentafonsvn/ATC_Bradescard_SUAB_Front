import { Card, Table } from 'antd';
import type { Adicional } from '../api/generalInfo.api';

type AdicionalesTableProps = {
  data: Adicional[];
};

const AdicionalesTable = ({ data }: AdicionalesTableProps) => {
  const columns = [
    {
      title: 'Nombre del adicional',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'No. de cuenta adicional',
      dataIndex: 'numeroCuenta',
      key: 'numeroCuenta',
    },
  ];

  return (
    <Card title="Listado de Adicionales" bordered={false} size="small" style={{ flex: 1 }}>
      <Table
        dataSource={data}
        columns={columns}
        rowKey="id"
        pagination={false}
        size="small"
        showHeader={false}
      />
    </Card>
  );
};

export default AdicionalesTable;
