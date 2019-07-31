import React from 'react';

import s from './Main.module.scss'
import { Switch, Route, Redirect } from 'react-router-dom';
import Board from '../Board/Board';
import { Map } from '../Map/Map';

export interface MainProps {
  
}
 
export interface MainState {
  
}
 
class Main extends React.Component<MainProps, MainState> {

  render() { 
    return (
      <div className={s.mainContainer}>
        Main
        <Switch>
          <Route exact path="/board" component={Board} />
          <Route
            path="/map"
            render={props => <Map />}
          />
          <Redirect from='/' to='board' />
        </Switch>
      </div>
    );
  }
}
 
export default Main;