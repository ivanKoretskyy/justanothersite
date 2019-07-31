import React from 'react';

import classes from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';

export interface SidebarProps {
  isOpen?: boolean;
}
 
export interface SidebarState {
  
}
 
class Sidebar extends React.Component<SidebarProps, SidebarState> {

  render() { 
    return (
      <div className={classes.SidebarContainer}>
        <ul className={classes.NavigationItems}>
          <li className={classes.NavigationItem}>
            <NavLink to='/board' activeClassName={classes.active}>
              Board
            </NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to='/map' activeClassName={classes.active}>
              Contacts
            </NavLink>
          </li>
          <li className={classes.NavigationItem}>
            <NavLink to='/user' activeClassName={classes.active}>
              User
            </NavLink>
          </li>
        </ul>

      </div>
    );
  }
}
 
export default Sidebar;