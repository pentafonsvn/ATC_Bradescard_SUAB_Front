import { ReactNode } from 'react';

export const PageContainer = ({ children }: { children: ReactNode }) => (
  <div className="page-container">{children}</div>
);
export default PageContainer;
