import { Space, Button, Typography, Divider, Card, Switch, Popconfirm } from 'antd';
import {
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
          
          <Space size={6} style={{ 
            padding: '2px 8px', 
            borderRadius: 4, 
            background: statusInfo.color === 'success' ? '#f6ffed' : statusInfo.color === 'error' ? '#fff2f0' : statusInfo.color === 'warning' ? '#fffbe6' : '#fafafa',
            border: `1px solid ${statusInfo.color === 'success' ? '#b7eb8f' : statusInfo.color === 'error' ? '#ffccc7' : statusInfo.color === 'warning' ? '#ffe58f' : '#d9d9d9'}`
          }}>
            <Text style={{ fontSize: 12, fontWeight: 500 }}>{statusInfo.label}</Text>
          </Space>
          <Popconfirm
            title={status === 'activa' ? '¿Desactivar cuenta?' : '¿Activar cuenta?'}
            description={status === 'activa' 
              ? 'La cuenta quedará inactiva y no podrá realizar operaciones.' 
              : '¿Está seguro de activar esta cuenta?'}
            onConfirm={toggleStatus}
            okText="Sí"
            cancelText="Cancelar"
            placement="bottomLeft"
          >
            <Switch 
              size="small" 
              checked={status === 'activa'}
              checkedChildren="ON"
              unCheckedChildren="OFF"
            />
          </Popconfirm>
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
        <Button
          size="small"
          type="primary"
          icon={<FolderOutlined />}
          onClick={() => navigate('/business-cases')}
        >
          Casos de Negocio
        </Button>
      </div>
    </Card>
  );
};

export default ContextualHeader;
