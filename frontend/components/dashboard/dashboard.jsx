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
      animationCSS: ""
    }
    this.animateEnter = this.animateEnter.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let { children } = this.props;
    let nextChildren = nextProps.children;
    if (children.props.route.component.displayName !== nextChildren.props.route.component.displayName) {
      console.log("Different.");
      this.animateEnter();
    }
  }

  shouldComponentUpdate() {
    return setTimeout(function() {
      return true;
    }, 300);
  }

  animateEnter() {
    this.setState({ animationCSS: "main-slide-leave" });
    this.setState({ animationCSS: "main-slide-leave main-slide-leave-active" });
    setTimeout(() => {
      this.setState({ animationCSS: "main-slide-enter" });
      this.setState({ animationCSS: "main-slide-enter main-slide-enter-active" });
      setTimeout(() => {
        this.setState({ animationCSS: "" });
      }, 300);
    }, 300);
  }

  render() {
    let { children } = this.props;
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
            <p>{this.state.animationCSS}</p> 
              {
                children
              }
          </main>
        </div>
      </div>
    );
  }
}

export default Dashboard;
