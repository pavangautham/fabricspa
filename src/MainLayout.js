import React from 'react';
import { Layout } from 'antd';
import SidebarContent from './components/sidebar/SidebarContent';
import Routes from './Routes';

const { Content, Header, Footer } = Layout;

const MainLayout = ({ match }) => {
    return (
        <Layout>
            <SidebarContent />
            <Layout className="site-layout" style={{ backgroundColor: '#FFF', marginLeft: 200 }}>
                <Header className="site-layout-background" style={{ padding: 0, background: '#F7F6F7' }} />
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Routes match={match} />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;