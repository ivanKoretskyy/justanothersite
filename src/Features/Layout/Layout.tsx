import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import s from './Layout.module.scss';

export interface LayoutProps {
}
 
export interface LayoutState {
  isSidebarOpen: boolean
}
 
class Layout extends React.Component<LayoutProps, LayoutState> {
  state = { isSidebarOpen: false  }
  render() { 
    return (
      <div className={s.layout}>
        <Header />
        layout
        <Footer />
      </div>
    );
  }
}
 
export default Layout;