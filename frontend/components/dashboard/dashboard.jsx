import React from 'react';
import HeaderContainer from '../header/header_container';
import TeamsContainer from './sidebar/teams_container';
import TeamMemberContainer from './sidebar/team_members_container';

export default ({children}) => {
  return (
    <div className={"container full-height"}>
      <nav className={"sidebar"}>
        <div className={"logo"}>
          <h2>Task Commander</h2>
        </div>
        <TeamsContainer />
        <TeamMemberContainer />
        <h2>[ Projects ]</h2>
      </nav>
      <div className="main-area">
        <HeaderContainer />
        <main>
          <section className="flex flex-1">
            {
              children
            }
          </section>
        </main>
      </div>
    </div>
  );
}