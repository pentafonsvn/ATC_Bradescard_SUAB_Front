import { Row, Col, Card, Statistic, Typography } from 'antd';
import {
  DollarOutlined,
  CalendarOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from '@ant-design/icons';
import { formatDate } from '@/core/utils/dateFormat';

const { Text } = Typography;

type BalanceSummaryCardsProps = {
  saldoTotal: number;
  fechaUltimoCorte: string;
  depositosDesdeCorte: number;
  gastosDesdeCorte: number;
};

const BalanceSummaryCards = ({
  saldoTotal,
  fechaUltimoCorte,
  depositosDesdeCorte,
  gastosDesdeCorte,
}: BalanceSummaryCardsProps) => {
  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 16 }}>
      {/* Saldo Total */}
      <Col xs={24} sm={12} lg={6}>
        <Card size="small" bordered={false} style={{ background: '#f0f5ff' }}>
          <Statistic
            title={
              <Text strong style={{ fontSize: 12 }}>
                <DollarOutlined style={{ marginRight: 4 }} />
                Saldo Total
              </Text>
            }
            value={saldoTotal}
            precision={2}
            prefix="$"
            valueStyle={{ color: '#1890ff', fontSize: 22, fontWeight: 600 }}
          />
          <Text type="secondary" style={{ fontSize: 11 }}>
            Actualizado en tiempo real
          </Text>
        </Card>
      </Col>

      {/* Fecha Último Corte */}
      <Col xs={24} sm={12} lg={6}>
        <Card size="small" bordered={false} style={{ background: '#f6ffed' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
            <CalendarOutlined style={{ fontSize: 20, color: '#52c41a', marginRight: 8 }} />
            <Text strong style={{ fontSize: 12 }}>
              Último Corte
            </Text>
          </div>
          <Text style={{ fontSize: 20, fontWeight: 600, color: '#52c41a', display: 'block' }}>
            {formatDate(fechaUltimoCorte, 'short')}
          </Text>
          <Text type="secondary" style={{ fontSize: 11 }}>
            Periodo de facturación
          </Text>
        </Card>
      </Col>

      {/* Depósitos desde Corte */}
      <Col xs={24} sm={12} lg={6}>
        <Card size="small" bordered={false} style={{ background: '#f6ffed' }}>
          <Statistic
            title={
              <Text strong style={{ fontSize: 12 }}>
                <ArrowUpOutlined style={{ marginRight: 4, color: '#52c41a' }} />
                Depósitos
              </Text>
            }
            value={depositosDesdeCorte}
            precision={2}
            prefix="$"
            valueStyle={{ color: '#52c41a', fontSize: 22, fontWeight: 600 }}
          />
          <Text type="secondary" style={{ fontSize: 11 }}>
            Desde último corte a hoy
          </Text>
        </Card>
      </Col>

      {/* Gastos desde Corte */}
      <Col xs={24} sm={12} lg={6}>
        <Card size="small" bordered={false} style={{ background: '#fff2f0' }}>
          <Statistic
            title={
              <Text strong style={{ fontSize: 12 }}>
                <ArrowDownOutlined style={{ marginRight: 4, color: '#ff4d4f' }} />
                Gastos
              </Text>
            }
            value={gastosDesdeCorte}
            precision={2}
            prefix="$"
            valueStyle={{ color: '#ff4d4f', fontSize: 22, fontWeight: 600 }}
          />
          <Text type="secondary" style={{ fontSize: 11 }}>
            Desde último corte a hoy
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default BalanceSummaryCards;
