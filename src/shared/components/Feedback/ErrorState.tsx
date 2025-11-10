import { Result, Button } from 'antd';

export const ErrorState = ({ title = 'Ocurrió un error', subTitle, onRetry }: { title?: string; subTitle?: string; onRetry?: () => void }) => (
  <Result status="error" title={title} subTitle={subTitle} extra={onRetry && <Button onClick={onRetry}>Reintentar</Button>} />
);
export default ErrorState;
