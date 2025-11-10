import { PageHeaderProps } from 'antd/es/page-header';
import { Typography } from 'antd';

export const PageHeader = ({ title, extra }: PageHeaderProps & { title?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
    <Typography.Title level={4} style={{ margin: 0 }}>
      {title}
    </Typography.Title>
    <div>{extra}</div>
  </div>
);
export default PageHeader;
