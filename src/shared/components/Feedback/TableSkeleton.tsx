import { Card, Skeleton } from 'antd';

export const TableSkeleton = () => (
  <Card>
    <Skeleton.Input active style={{ width: 200, marginBottom: 16 }} />
    <Skeleton active paragraph={{ rows: 8 }} />
  </Card>
);
export default TableSkeleton;
