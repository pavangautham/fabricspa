import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import {
    UserOutlined,
    ShoppingCartOutlined,
    CreditCardOutlined,
    TagOutlined,
    ClockCircleOutlined,
    InfoCircleOutlined,
    MessageOutlined,
    LogoutOutlined,
    HeatMapOutlined,
    UnorderedListOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';

const { Sider, Header } = Layout;
const { SubMenu } = Menu;

const SidebarContent = () => {

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ backgroundColor: '#F7F6F7', overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
            <div className="logo" style={{ flex: 1, color: '#000', textAlign: 'center', padding: 19 }}>Fabricspa</div>
            <Menu style={{ backgroundColor: '#F7F6F7' }} theme="dark" defaultSelectedKeys={['1']} mode="inline">
          
                <Menu.Item style={{ color: '#000' }} key="1" icon={<ClockCircleOutlined />}>
                    <Link to="/wash" style={{ color: '#000' }}>Schedule Wash</Link>              
                </Menu.Item>
            
                <Menu.Item style={{ color: '#000' }} key="2" icon={<UserOutlined />}>
                    <Link to="/profile" style={{ color: '#000' }}>Profile</Link>
                </Menu.Item>
                <Menu.Item style={{ color: '#000' }} key="3" icon={<ShoppingCartOutlined />}>
                    <Link to="/orders" style={{ color: '#000' }}>Orders</Link>
                </Menu.Item>
                <Menu.Item style={{ color: '#000' }} key="4" icon={<CreditCardOutlined />}>
                    <Link to="/payment" style={{ color: '#000' }}>Payment</Link>
                </Menu.Item>
                <Menu.Item style={{ color: '#000' }} key="5" icon={<TagOutlined />}>
                    <Link to="/offers" style={{ color: '#000' }}>Offers</Link>
                </Menu.Item>            
                <SubMenu style={{ color: '#000' }} key="sub1" icon={<InfoCircleOutlined />} title="Our Info">
                    <Menu.Item style={{ color: '#000' }} key="8" icon={<InfoCircleOutlined />} >About Us</Menu.Item>
                    <Menu.Item style={{ color: '#000' }} key="9" icon={<HeatMapOutlined />} >Locate Us</Menu.Item>
                    <Menu.Item style={{ color: '#000' }} key="10" icon={<UnorderedListOutlined />} ><Link to="/tnc">Terms & Conditions</Link></Menu.Item>
                    <Menu.Item style={{ color: '#000' }} key="11" icon={<ExclamationCircleOutlined />} ><Link to="/Privacy">Privacy Policy</Link></Menu.Item>
                </SubMenu>
                <Menu.Item style={{ color: '#000' }} key="6" icon={<MessageOutlined />}>
                    <Link to="/feedback" style={{ color: '#000' }}>Feedback</Link>
                </Menu.Item>
                <Menu.Item style={{ color: '#000' }} key="7" icon={<LogoutOutlined />}>
                    <Link to="/" style={{ color: '#000' }}>Logout</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
};

export default SidebarContent;