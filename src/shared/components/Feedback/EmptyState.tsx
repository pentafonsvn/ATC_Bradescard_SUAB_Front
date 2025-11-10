import { Result } from 'antd';

export const EmptyState = ({ title = 'Sin datos', subTitle }: { title?: string; subTitle?: string }) => (
  <Result status="info" title={title} subTitle={subTitle} />
);
export default EmptyState;
