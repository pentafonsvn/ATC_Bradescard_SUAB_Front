import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
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

const items = [
  { 
    key: '/general-info', 
    icon: <IdcardOutlined />,
    label: <Link to="/general-info">Información General</Link> 
  },
  { 
    key: '/balances', 
    icon: <WalletOutlined />,
    label: <Link to="/balances">Balances</Link> 
  },
  { 
    key: '/transactions', 
    icon: <SwapOutlined />,
    label: <Link to="/transactions">Transacciones</Link> 
  },
  { 
    key: '/statements', 
    icon: <FileTextOutlined />,
    label: <Link to="/statements">Estados de cuenta</Link> 
  },
  { 
    key: '/clarifications/new', 
    icon: <ExclamationCircleOutlined />,
    label: <Link to="/clarifications/new">Aclaraciones (Nueva)</Link> 
  },
  { 
    key: '/clarifications/history', 
    icon: <HistoryOutlined />,
    label: <Link to="/clarifications/history">Aclaraciones (Historial)</Link> 
  },
  { 
    key: '/cards/block-replace', 
    icon: <CreditCardOutlined />,
    label: <Link to="/cards/block-replace">Tarjetas (Bloqueo/Reemplazo)</Link> 
  },
  { 
    key: '/nip', 
    icon: <LockOutlined />,
    label: <Link to="/nip">NIP</Link> 
  },
  { 
    key: '/business-cases', 
    icon: <FolderOutlined />,
    label: <Link to="/business-cases">Casos de negocio</Link> 
  },
  { 
    key: '/business-cases/history', 
    icon: <DatabaseOutlined />,
    label: <Link to="/business-cases/history">Casos de negocio (Historial)</Link> 
  },
];

const SidebarMenu = () => {
  const location = useLocation();
  return <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]} items={items} />;
};

export default SidebarMenu;
