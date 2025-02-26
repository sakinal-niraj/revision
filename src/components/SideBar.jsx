import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { Link, useLocation } from 'react-router-dom';
import Logout from './Logout';

const SideBar = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'columns', label: 'Dashboard' },
  ];

  return (
    <div className='sidebar'>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader 
        // prefix={<i className="fa fa-bars fa-large"></i>}
        >
          Sidebar
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? 'activeClicked' : ''}
              >
                <CDBSidebarMenuItem icon={item.icon}>
                  {item.label}
                </CDBSidebarMenuItem>
              </Link>
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            <Logout />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
