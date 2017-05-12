import React from 'react';
import HeaderContainer from '../header/header_container';
import TeamsContainer from './sidebar/teams_container';
import MyTeamsContainer from './sidebar/my_teams_container';
import TeamMemberContainer from './sidebar/team_members_container';
import ProjectsContainer from './projects/projects_container';
import { hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

export default ({children}) => {
  return (
    <div className={"container full-height"}>
      <nav className={"sidebar"}>
        <div className={"logo"}>
          <h2 className="pointer" onClick={() => hashHistory.push('/dashboard')}><small>task</small>Commander</h2>
        </div>
        <MyTeamsContainer />
        <TeamsContainer />
        <TeamMemberContainer />
        <ProjectsContainer />
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
