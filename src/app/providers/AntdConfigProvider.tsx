import { ConfigProvider, theme as antdTheme } from 'antd';
import esES from 'antd/locale/es_ES';
import { ReactNode } from 'react';

export const AntdConfigProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ConfigProvider
      locale={esES}
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#E60028',
          colorLink: '#E60028',
          colorSuccess: '#1BA548',
          colorWarning: '#FFC107',
          colorError: '#D32F2F',
          borderRadius: 6,
          fontFamily: 'Roboto, Open Sans, sans-serif'
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};
