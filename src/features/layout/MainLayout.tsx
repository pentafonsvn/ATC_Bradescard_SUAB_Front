import { Layout } from 'antd';
import SidebarMenu from './SidebarMenu';
import HeaderBar from './HeaderBar';
import { Outlet } from 'react-router-dom';
import { useUIStore } from '@/app/store/ui.store';

const { Sider, Header, Content } = Layout;

const MainLayout = () => {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={sidebarCollapsed} onCollapse={toggleSidebar}>
        <div style={{ height: 48, margin: 16, background: 'rgba(255,255,255,0.2)', borderRadius: 6 }} />
        <SidebarMenu />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}>
          <HeaderBar />
        </Header>
        <Content style={{ margin: 8 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
