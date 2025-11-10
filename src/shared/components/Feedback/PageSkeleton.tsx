import { Card, Skeleton } from 'antd';

export const PageSkeleton = () => (
  <div className="page-container">
    <Card>
      <Skeleton active paragraph={{ rows: 6 }} />
    </Card>
  </div>
);
export default PageSkeleton;
