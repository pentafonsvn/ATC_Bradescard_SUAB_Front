import { Card, Typography } from 'antd';
import PageContainer from '@/shared/components/Layout/PageContainer';

const Info = () => (
  <PageContainer>
    <Card>
      <Typography.Title level={4}>Información general</Typography.Title>
      <Typography.Paragraph>
        Usa el menú lateral para navegar a los módulos.
      </Typography.Paragraph>
    </Card>
  </PageContainer>
);

export default Info;
