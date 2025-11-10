import { Button, Space, Typography, Avatar } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useSessionStore } from '@/app/store/session.store';
import { useAuth } from '@/core/hooks/useAuth';

const { Text } = Typography;

const HeaderBar = () => {
  const user = useSessionStore((s) => s.user);
  const { login, logout } = useAuth();

  return (
    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
      <Text strong style={{ fontSize: 16 }}>Pantalla Única</Text>
      <Space size="middle">
        {user ? (
          <>
            <Space size="small">
              <Avatar size="small" icon={<UserOutlined />} />
              <Text style={{ fontSize: 13 }}>{user.name}</Text>
            </Space>
            <Button size="small" icon={<LogoutOutlined />} onClick={() => logout()}>Salir</Button>
          </>
        ) : (
          <Button size="small" type="primary" onClick={() => login('admin', 'admin')}>Entrar</Button>
        )}
      </Space>
    </Space>
  );
};

export default HeaderBar;
