import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { BrowserRouter } from 'react-router-dom';

import s from './Layout.module.scss';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';

export interface LayoutProps {
}
 
export interface LayoutState {
  isSidebarOpen: boolean
}
 
class Layout extends React.Component<LayoutProps, LayoutState> {
  state = { isSidebarOpen: false  }
  render() { 
    return (
      <BrowserRouter>
        <div className={s.layout}>
          <div className={s.header}>
            <Header />
          </div>
          <div className={s.main}>
            <div className={s.sidebarContainer}>
              <div className={s.sidebar}><Sidebar/></div>
            </div>
            <Main />
          </div>
          <div className={s.footer}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
 
export default Layout;