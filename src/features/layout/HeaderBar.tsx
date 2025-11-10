import { Button, Space, Typography } from 'antd';
import { useSessionStore } from '@/app/store/session.store';
import { useAuth } from '@/core/hooks/useAuth';

const HeaderBar = () => {
  const user = useSessionStore((s) => s.user);
  const { login, logout } = useAuth();

  return (
    <Space style={{ width: '100%', justifyContent: 'space-between' }}>
      <Typography.Text strong>Pantalla Unica</Typography.Text>
      <Space>
        {user ? (
          <>
            <Typography.Text>Hola, {user.name}</Typography.Text>
            <Button onClick={() => logout()}>Salir</Button>
          </>
        ) : (
          <Button type="primary" onClick={() => login('admin', 'admin')}>Entrar como Admin</Button>
        )}
      </Space>
    </Space>
  );
};

export default HeaderBar;
