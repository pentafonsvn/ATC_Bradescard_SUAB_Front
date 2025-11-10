import { Space, Tag, Button, Typography, Divider, Card } from 'antd';
import {
  LockOutlined,
  UnlockOutlined,
  FolderOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useAccountStore, type AccountStatus } from '@/app/store/account.store';
import { useNavigate } from 'react-router-dom';

const { Text } = Typography;

const statusConfig: Record<AccountStatus, { color: string; label: string }> = {
  activa: { color: 'success', label: 'Activa' },
  inactiva: { color: 'default', label: 'Inactiva' },
  bloqueada: { color: 'error', label: 'Bloqueada' },
  suspendida: { color: 'warning', label: 'Suspendida' },
};

const ContextualHeader = () => {
  const { currentAccount, updateStatus } = useAccountStore();
  const navigate = useNavigate();

  if (!currentAccount) {
    return (
      <Card 
        size="small" 
        style={{ 
          margin: '8px 16px',
          borderRadius: 4,
          background: '#fafafa'
        }}
      >
        <Text type="secondary">No hay cuenta seleccionada</Text>
      </Card>
    );
  }

  const { accountNumber, status, clientName, lastContact, phone, clientSince } = currentAccount;
  const statusInfo = statusConfig[status];

  const toggleStatus = () => {
    const newStatus: AccountStatus = status === 'activa' ? 'inactiva' : 'activa';
    updateStatus(newStatus);
  };

  return (
    <Card
      size="small"
      style={{
        margin: '8px 16px',
        borderRadius: 4,
        background: '#fafafa',
      }}
      bodyStyle={{ padding: '12px 16px' }}
    >
      {/* Primera línea: Info crítica */}
      <Space size="middle" split={<Divider type="vertical" />} style={{ width: '100%', marginBottom: 8 }}>
        <Space size="small">
          <Text strong style={{ fontSize: 13 }}>Cuenta:</Text>
          <Text code style={{ fontSize: 13 }}>{accountNumber}</Text>
          <Tag color={statusInfo.color} style={{ margin: 0, fontSize: 12 }}>
            {statusInfo.label}
          </Tag>
        </Space>

        <Space size={4}>
          <UserOutlined style={{ fontSize: 12, color: '#666' }} />
          <Text strong style={{ fontSize: 13 }}>{clientName}</Text>
        </Space>

        {phone && (
          <Space size={4}>
            <PhoneOutlined style={{ fontSize: 12, color: '#666' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>{phone}</Text>
          </Space>
        )}
      </Space>

      {/* Segunda línea: Contexto adicional + Acciones */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Space size="middle" split={<Divider type="vertical" />}>
          {clientSince && (
            <Text type="secondary" style={{ fontSize: 12 }}>
              Cliente desde: {clientSince}
            </Text>
          )}
          
          {lastContact && (
            <Space size={4}>
              <ClockCircleOutlined style={{ fontSize: 12, color: '#999' }} />
              <Text type="secondary" style={{ fontSize: 12 }}>
                Último contacto: {lastContact}
              </Text>
            </Space>
          )}
        </Space>

        {/* Acciones críticas */}
        <Space size="small">
          <Button
            size="small"
            icon={status === 'activa' ? <LockOutlined /> : <UnlockOutlined />}
            onClick={toggleStatus}
          >
            {status === 'activa' ? 'Desactivar' : 'Activar'}
          </Button>
          <Button
            size="small"
            type="primary"
            icon={<FolderOutlined />}
            onClick={() => navigate('/business-cases')}
          >
            Casos de Negocio
          </Button>
        </Space>
      </div>
    </Card>
  );
};

export default ContextualHeader;
