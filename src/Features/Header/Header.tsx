import React from 'react';

import s from './Header.module.scss';

export interface HeaderProps {
  
}
 
export interface HeaderState {
  
}
 
class Header extends React.Component<HeaderProps, HeaderState> {

  render() { 
    return (
      <div className={s.header}>
        <div>menu</div>
        <div className={s.headerTitle}>just another site</div>
        <div>enough</div>
      </div>
    );
  }
}
 
export default Header;