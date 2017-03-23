import React from 'react';
import {hashHistory} from 'react-router';

class Header extends React.Component{
  constructor(props){
    super(props)
  }

  componentWillUpdate(nextProps, nextState){
    if (!nextProps.currentUser) {
      hashHistory.push('/login');
    }
  }
  
  handleLogout () {
    this.props.logout();
  }
  
  render() {
    let { owner } = this.props.team;
    let {currentUser} = this.props;
    let username = currentUser ? currentUser.username : "";
    let editVisibility = currentUser.id === this.props.team.owner.id ? "" : "hidden";
    let teamCaptain = owner.username ? `TEAM CAPTAIN: ${owner.username}` : "";
    return (
      <nav className={"top-bar"}>
        <span><h3>{this.props.team.name} <small>{teamCaptain}</small></h3>
          <button onClick={() => hashHistory.push('/dashboard/teams/edit')} className={`btn btn-text btn-bars ${editVisibility}`}>
            Edit Team</button>
          <button onClick={() => hashHistory.push('/dashboard/team_members/edit')} className={`btn btn-text btn-bars ${editVisibility}`}>
            Edit Team Members</button>
        
        </span>
        <span>
          <button className="btn-text btn-bars" onClick={this.handleLogout.bind(this)}>Log Out</button>
          <h3>{username}</h3>
        </span>
      </nav>
    );
  }
}

export default Header;