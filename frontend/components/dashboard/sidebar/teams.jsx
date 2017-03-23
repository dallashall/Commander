import React from 'react';
import { hashHistory } from 'react-router';

class Teams extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: {
        name: "Select a Team",
        owner: {
          username: ""
        }
      },
      menuVisible: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.editClick = this.editClick.bind(this);
    this.newClick = this.newClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchTeams().then(
      () => this.setState(this.props.teams[0])
    );
  }

  handleClick(teamId, idx) {
    return (e) => {
      let team = this.state.team;
      this.props.fetchSelectedTeam(teamId).then(
        () => this.setState({team: this.props.teams[idx]})
      ).then(
        () => this.props.fetchTeamMembers(teamId)
      );
      this.setState({
        menuVisible: false
      });
    };
  }

  editClick() {
    hashHistory.push('/dashboard/teams/edit')
  }

  newClick() {
    hashHistory.push('/dashboard/teams/new');
    this.toggleMenu();
  }

  toggleMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  }

  render() {
    let {teams} = this.props;
    let selectedTeam = this.props.team;
    let menuVisibility, menuArrow, newVisibility, menuTitle;
    if (this.props.mine) {
      newVisibility = "";
      menuTitle = "My Teams";
    } else {
      newVisibility = "hidden";
      menuTitle = "Teams I Belong To";
    }
    if (this.state.menuVisible) {
      menuVisibility = ""; 
      menuArrow = "fa-caret-down";
    } else {
      menuVisibility = "hidden";
      menuArrow = "fa-caret-right";
    }
    return (
      <div
      className={"teams"}>
        <div className="selected-container pointer">
          <div onClick={this.toggleMenu} className="selected btn-dropdown">
            <strong><i className={`fa ${menuArrow} fa-fw fa-lg`}></i>
              {menuTitle}</strong>
          </div>
        </div>
        <ul
        className={`${menuVisibility}`}>
          <li
            onClick={this.newClick}
            className={newVisibility}>
            <button className="btn-dropdown"><i className="fa fa-plus fa-fw"></i> New Team</button>
          </li>

          {teams.map((team, idx) => (
            <li
            onClick={this.handleClick(team.id, idx)}
            key={idx}>
              <button className="btn btn-dropdown">
                <strong>{team.name}</strong> <span>{team.owner.username}</span>
              </button>
            </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default Teams;
