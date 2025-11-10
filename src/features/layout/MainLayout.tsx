import { Layout, Tabs } from 'antd';
import HeaderBar from './HeaderBar';
import ContextualHeader from './ContextualHeader';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  WalletOutlined,
  SwapOutlined,
  FileTextOutlined,
  ExclamationCircleOutlined,
  HistoryOutlined,
  CreditCardOutlined,
  LockOutlined,
  FolderOutlined,
  DatabaseOutlined,
  IdcardOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Items de navegación en tabs
  const tabItems = [
    { key: '/general-info', label: 'Info General', icon: <IdcardOutlined /> },
    { key: '/balances', label: 'Balances', icon: <WalletOutlined /> },
    { key: '/transactions', label: 'Transacciones', icon: <SwapOutlined /> },
    { key: '/statements', label: 'Estados de Cuenta', icon: <FileTextOutlined /> },
    { key: '/clarifications/new', label: 'Aclaraciones', icon: <ExclamationCircleOutlined /> },
    { key: '/clarifications/history', label: 'Historial', icon: <HistoryOutlined /> },
    { key: '/cards/block-replace', label: 'Tarjetas', icon: <CreditCardOutlined /> },
    { key: '/nip', label: 'NIP', icon: <LockOutlined /> },
    { key: '/business-cases', label: 'Casos', icon: <FolderOutlined /> },
    { key: '/business-cases/history', label: 'Hist. Casos', icon: <DatabaseOutlined /> },
  ];

  const activeKey = tabItems.find((item) => location.pathname.startsWith(item.key))?.key || '/general-info';

  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      {/* Header principal: Logo + Usuario */}
      <Header style={{ 
        background: '#fff', 
        padding: '0 16px', 
        height: 48, 
        lineHeight: '48px', 
        borderBottom: '1px solid #f0f0f0',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <HeaderBar />
      </Header>

      {/* Header contextual: Info crítica de cuenta */}
      <div style={{ background: '#f5f5f5', position: 'sticky', top: 48, zIndex: 9 }}>
        <ContextualHeader />
      </div>

      {/* Tabs de navegación */}
      <div style={{ background: '#fff', position: 'sticky', top: 126, zIndex: 9 }}>
        <Tabs
          activeKey={activeKey}
          onChange={(key) => navigate(key)}
          items={tabItems}
          size="small"
          style={{
            padding: '0 16px',
            margin: 0,
          }}
        />
      </div>

      {/* Contenido dinámico */}
      <Content style={{ padding: '8px 16px', minHeight: 'calc(100vh - 200px)' }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default MainLayout;
