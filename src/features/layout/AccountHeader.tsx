import { Space, Tag, Button, Typography, Divider } from 'antd';
import { 
  LockOutlined, 
  UnlockOutlined, 
  FolderOutlined,
  PhoneOutlined,
  ClockCircleOutlined 
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

const AccountHeader = () => {
  const { currentAccount, updateStatus } = useAccountStore();
  const navigate = useNavigate();

  if (!currentAccount) {
    return (
      <div style={{ padding: '8px 16px', background: '#fff' }}>
        <Text type="secondary">No hay cuenta seleccionada</Text>
      </div>
    );
  }

  const { accountNumber, status, clientName, lastContact, phone } = currentAccount;
  const statusInfo = statusConfig[status];

  const toggleStatus = () => {
    const newStatus: AccountStatus = status === 'activa' ? 'inactiva' : 'activa';
    updateStatus(newStatus);
  };

  return (
    <div style={{ 
      padding: '8px 16px', 
      background: '#fff', 
      borderBottom: '1px solid #f0f0f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 48
    }}>
      {/* Información crítica de la cuenta */}
      <Space size="middle" split={<Divider type="vertical" />}>
        <Space size="small">
          <Text strong style={{ fontSize: 14 }}>Cuenta:</Text>
          <Text code style={{ fontSize: 14 }}>{accountNumber}</Text>
          <Tag color={statusInfo.color} style={{ margin: 0 }}>
            {statusInfo.label}
          </Tag>
        </Space>

        <Space size="small">
          <Text type="secondary" style={{ fontSize: 13 }}>{clientName}</Text>
        </Space>

        {phone && (
          <Space size={4}>
            <PhoneOutlined style={{ fontSize: 12, color: '#666' }} />
            <Text type="secondary" style={{ fontSize: 12 }}>{phone}</Text>
          </Space>
        )}

        {lastContact && (
          <Space size={4}>
            <ClockCircleOutlined style={{ fontSize: 12, color: '#666' }} />
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
  );
};

export default AccountHeader;
