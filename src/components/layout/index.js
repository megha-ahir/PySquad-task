/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from 'react';
import { Breadcrumb, Button, Layout, Menu } from 'antd';
import Header from './header';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BeatLibrary, BreadcrumbIcon, Dashboard, DemoImage, Events, FreeCourses, InviteFriend, MyActivity, MyOrder, Placements, ReleaseMusic, Resources, Services, Settings, SiderTrigger, SiderTriggerflip, } from '../../svg';
import './layout.css'

const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const Menuitems = [
    getItem('DashBoard', '1', <Link to="/dashboard"> <Dashboard /> </Link>),
    getItem('Beat Library', '2', <Link to="/beat-library"><BeatLibrary /></Link>),
    getItem('Release Music', '3', <Link to="/release-music"><ReleaseMusic /></Link>),
    getItem('Services', '4', <Link to="/services"><Services /></Link>),
    getItem('Events', '5', <Link to="/events"><Events /></Link>),
    getItem('Resources', '6', <Link to="/resources"><Resources /></Link>),
    getItem('Placements', '7', <Link to="/placements"><Placements /></Link>),
    getItem('Invite Friend', '8', <Link to="/invite-friend"><InviteFriend /></Link>),
    getItem('Free Courses', '9', <Link to="/free-courses"><FreeCourses /></Link>),
    getItem('Settings', '9', <Link to="/Settings"><Settings /></Link>),
];
const App = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [items, setitmes] = useState()
    const [menukey, setmenukey] = useState(null)


    const location = useLocation();
    console.log(location.pathname);
    console.log(menukey);


    useEffect(() => {
        setitmes(Menuitems)
        if (location.pathname === '/dashboard') {
            setmenukey('1')
        }
        if (location.pathname === '/beat-library') {
            setmenukey('2')
        }
        if (location.pathname === '/release-music') {
            setmenukey('3')
        }
        if (location.pathname === '/services') {
            setmenukey('4')
        }
        if (location.pathname === '/events') {
            setmenukey('5')
        }
        if (location.pathname === '/resources') {
            setmenukey('6')
        }
        if (location.pathname === '/placements') {
            setmenukey('7')
        }
        if (location.pathname === '/invite-friend') {
            setmenukey('8')
        }
        if (location.pathname === '/free-courses') {
            setmenukey('9')
        }
        if (location.pathname === '/settings') {
            setmenukey('10')
        }
    }, [location])

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{
                    background: "#ffffff",
                    minWidth: "260px !important",
                    overflow: 'auto',
                    scrollbarWidth: 'none'
                }} >
                <div className="header-logo">
                    <Link to="">
                        <img
                            src={collapsed ? "images/PY SQUAD1.png" : "images/Logo.png"}
                            alt="dme-logo-black"
                        />
                    </Link>
                </div>
                <div className='sider-content'>
                    <div className='profile' >
                        <img
                            style={{ width: '60px' }}
                            src='images/profile.png'
                            alt='profile'
                        />
                        <label>John Deo</label>
                    </div>

                    <div
                        className={!collapsed ? 'sider-btn' : 'slider-ver'}
                    >
                        <button><MyOrder />{!collapsed ? 'My Order' : ""}</button>
                        <button><MyActivity />{!collapsed ? 'My Activity' : ""}</button>
                    </div>
                    <Menu
                        theme="light"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
                    <div className='sider-bottom' >
                        {!collapsed ? <Button className='change-plan'

                        >Change Plan</Button> : ""}
                        <Button
                            className='trigger-btn'
                            style={{}}
                            type="text"
                            icon={collapsed ? <SiderTriggerflip /> : <SiderTrigger />}
                            onClick={() => setCollapsed(!collapsed)}
                        >
                        </Button>
                    </div>
                </div>
            </Sider>
            <Layout>
                <Header />
                <Content style={{
                    background: '#F0EFF1',
                    padding: '26px',
                    overflow: 'auto',
                    height: 'calc(100vh - 65px)',
                    scrollbarWidth: 'none'
                }}>
                    <Breadcrumb
                        items={[
                            {
                                title: (
                                    <>
                                        <BreadcrumbIcon />
                                        <span style={{ padding: '2px' }}>
                                            {location.pathname === "/dashboard" ? "DashBoard" : " DashBoard" + " / " + location.pathname.slice(1)}
                                        </span>
                                    </>
                                ),
                            },
                        ]}
                    />
                    <div className='message-icon'>
                        <button>
                            <DemoImage />
                        </button>
                    </div>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;