import React from 'react';
import HeaderContainer from '../header/header_container';
import TeamsContainer from './sidebar/teams_container';
import TeamMemberContainer from './sidebar/team_members_container';

export default ({children}) => {
  return (
    <div className={"container full-height"}>
      <nav className={"sidebar"}>
        <div className={"logo"}>
          <h2><small>task</small>Commander</h2>
        </div>
        <TeamsContainer />
        <TeamMemberContainer />
        <h2>[ Projects ]</h2>
      </nav>
      <div className="main-area">
        <HeaderContainer />
        <main>
            {
              children
            }
        </main>
      </div>
    </div>
  );
}
