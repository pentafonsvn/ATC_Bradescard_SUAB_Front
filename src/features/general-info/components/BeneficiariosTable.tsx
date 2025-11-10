import { Card, Table, Tag } from 'antd';
import type { Beneficiario } from '../api/generalInfo.api';

type BeneficiariosTableProps = {
  data: Beneficiario[];
};

const BeneficiariosTable = ({ data }: BeneficiariosTableProps) => {
  const columns = [
    {
      title: 'Nombre del beneficiario',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Porcentaje de beneficio',
      dataIndex: 'porcentaje',
      key: 'porcentaje',
      render: (porcentaje: number) => (
        <Tag color={porcentaje >= 50 ? 'green' : porcentaje >= 30 ? 'blue' : 'default'}>
          {porcentaje}%
        </Tag>
      ),
    },
  ];

  return (
    <Card title="Listado de Beneficiarios" bordered={false} size="small" style={{ flex: 1 }}>
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

export default BeneficiariosTable;
