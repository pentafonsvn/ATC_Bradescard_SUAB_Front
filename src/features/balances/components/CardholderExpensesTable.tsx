import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined, TeamOutlined } from '@ant-design/icons';
import type { CardholderExpense } from '../api/balances.api';

const { Text } = Typography;

type CardholderExpensesTableProps = {
  data: CardholderExpense[];
};

const CardholderExpensesTable = ({ data }: CardholderExpensesTableProps) => {
  const columns: ColumnsType<CardholderExpense> = [
    {
      title: 'Tarjetahabiente',
      dataIndex: 'tarjetahabiente',
      key: 'tarjetahabiente',
      render: (nombre: string, record) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {record.relacion === 'Titular' ? (
            <UserOutlined style={{ color: '#1890ff' }} />
          ) : (
            <TeamOutlined style={{ color: '#52c41a' }} />
          )}
          <Text strong={record.relacion === 'Titular'}>{nombre}</Text>
        </div>
      ),
    },
    {
      title: 'Relación',
      dataIndex: 'relacion',
      key: 'relacion',
      width: 120,
      render: (relacion: 'Titular' | 'Adicional') => (
        <Tag color={relacion === 'Titular' ? 'blue' : 'green'}>
          {relacion}
        </Tag>
      ),
    },
    {
      title: 'Cantidad de Transacciones',
      dataIndex: 'cantidadTransacciones',
      key: 'cantidadTransacciones',
      align: 'center',
      width: 180,
      render: (cantidad: number) => (
        <Text style={{ fontSize: 14, fontWeight: 500 }}>{cantidad}</Text>
      ),
    },
    {
      title: 'Total de Gastos',
      dataIndex: 'totalGastos',
      key: 'totalGastos',
      align: 'right',
      width: 150,
      render: (total: number) => (
        <Text strong style={{ fontSize: 14, color: '#ff4d4f' }}>
          ${total.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </Text>
      ),
    },
  ];

  // Calcular totales
  const totalTransacciones = data.reduce((sum, item) => sum + item.cantidadTransacciones, 0);
  const totalGastos = data.reduce((sum, item) => sum + item.totalGastos, 0);

  return (
    <Table
      rowKey="id"
      dataSource={data}
      columns={columns}
      pagination={false}
      size="small"
      bordered
      summary={() => (
        <Table.Summary fixed>
          <Table.Summary.Row style={{ background: '#fafafa' }}>
            <Table.Summary.Cell index={0} colSpan={2}>
              <Text strong>Total del Periodo</Text>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={2} align="center">
              <Text strong style={{ fontSize: 14 }}>{totalTransacciones}</Text>
            </Table.Summary.Cell>
            <Table.Summary.Cell index={3} align="right">
              <Text strong style={{ fontSize: 14, color: '#ff4d4f' }}>
                ${totalGastos.toLocaleString('es-MX', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>
            </Table.Summary.Cell>
          </Table.Summary.Row>
        </Table.Summary>
      )}
    />
  );
};

export default CardholderExpensesTable;
