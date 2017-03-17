import React from 'react';

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

  toggleMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  }

  render() {
    let {teams} = this.props;
    let selectedTeam = this.state.team;
    let menuVisibility;
    let menuArrow;
    if (this.state.menuVisible) {
      menuVisibility = ""; 
      menuArrow = "fa-caret-down";
    } else {
      menuVisibility = "hidden";
      menuArrow = "fa-caret-right";
    }
    return (
      <div
      onClick={this.toggleMenu}
      className={"teams pointer"}>
        <div
        className={"selected"}>
          <strong><i className={`fa ${menuArrow} fa-fw fa-lg`}></i>
          {selectedTeam.name}</strong> <span>{selectedTeam.owner.username}</span>
        </div>
        <ul
        className={`${menuVisibility}`}>
          <li><i className="fa fa-plus fa-fw"></i> <strong>New Team</strong></li>
          {teams.map((team, idx) => (
            <li
            onClick={this.handleClick(team.id, idx)}
            key={idx}>
              <strong>{team.name}</strong><span>{team.owner.username}</span>
            </li>
            )
          )}
        </ul>
      </div>
    )
  }
}

export default Teams;
