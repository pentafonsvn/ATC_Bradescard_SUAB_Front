import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppQueryProvider } from '@/app/providers/QueryClientProvider';
import { AntdConfigProvider } from '@/app/providers/AntdConfigProvider';
import { AppRouter } from '@/app/router';
import '@/shared/assets/styles/global.css';
import '@/shared/assets/styles/theme-overrides.less';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <AppQueryProvider>
      <AntdConfigProvider>
        <AppRouter />
      </AntdConfigProvider>
    </AppQueryProvider>
  </React.StrictMode>
);
