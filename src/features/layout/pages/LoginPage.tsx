import { Button, Card, Space, Typography } from 'antd';
import PageContainer from '@/shared/components/Layout/PageContainer';
import { useAuth } from '@/core/hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation() as any;

  const handleLogin = async () => {
    const ok = await login('admin', 'admin');
    if (ok) {
      const to = location?.state?.from?.pathname || '/balances';
      navigate(to, { replace: true });
    }
  };
  return (
    <PageContainer>
      <Card>
        <Typography.Title level={4}>Login</Typography.Title>
        <Typography.Paragraph>
          Placeholder de login. Usa el botón "Entrar como Admin" en el header para simular sesión.
        </Typography.Paragraph>
        <Space>
          <Button type="primary" onClick={handleLogin}>
            Entrar como Admin
          </Button>
        </Space>
      </Card>
    </PageContainer>
  );
};

export default LoginPage;
