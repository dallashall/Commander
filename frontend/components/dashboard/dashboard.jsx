import React from 'react';
import HeaderContainer from '../header/header_container';
import TeamsContainer from './sidebar/teams_container';

export default (props) => {
  return (
    <div className={"container full-height"}>
      <nav className={"sidebar"}>
        <div className={"logo"}>
          <h2>Task Commander</h2>
        </div>
        <TeamsContainer />
      </nav>
      <HeaderContainer />
    </div>
  );
}