import React from 'react';
import HeaderContainer from '../header/header_container';
import TeamsContainer from './sidebar/teams_container';
import MyTeamsContainer from './sidebar/my_teams_container';
import TeamMemberContainer from './sidebar/team_members_container';
import ProjectsContainer from './projects/projects_container';
import { hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationCSS: "main-slide-leave",
      children: this.props.children
    }
    this.animateEnter = this.animateEnter.bind(this);
    this.animateLeave = this.animateLeave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let { children } = this.props;
    let nextChildren = nextProps.children;
    console.log(this.props);
    console.log(nextProps);
    if (children.props.route.component.displayName !== nextChildren.props.route.component.displayName) {
      this.animateLeave();
      setTimeout(() => {
        this.setState({ children: this.props.children });
        this.animateEnter();
      }, 400);
    }
  }

  animateLeave() {
    this.setState({ animationCSS: "main-slide-leave" });
    this.setState({ animationCSS: "main-slide-leave main-slide-leave-active" });
  }
  
  animateEnter() {
    this.setState({ animationCSS: "main-slide-enter" });
    this.setState({ animationCSS: "main-slide-enter main-slide-enter-active" });
  }

  render() {
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
          <main className={this.state.animationCSS}>
              {
                this.state.children
              }
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
