import React from 'react';

import s from './Main.module.scss'

export interface MainProps {
  
}
 
export interface MainState {
  
}
 
class Main extends React.Component<MainProps, MainState> {

  render() { 
    return (
      <div className={s.mainContainer}>
        Main
      </div>
    );
  }
}
 
export default Main;