import React from 'react';

class TeamMember extends React.Component {
  constructor(props) {
    super(props);
  }

  removeTeamMember(id) {
    return (e) => {
      this.props.destroyTeamMember(id)
    }
  }

  componentWillReceiveProps(nextProps) {
  }
  
  render() {
    const { teamMembers, destroyTeamMember } = this.props;
    return (
      <div className="team-members">
        <span><h3>Team Members</h3><i className="fa fa-plus pointer" /></span>
        <ul>
          {teamMembers.map((teamMember, idx) => (
          <li key={idx}>{teamMember.username}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMember;