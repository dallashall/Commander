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
    console.log(nextProps);
    if (this.props.team.id !== "" && this.props.team.id !== nextprops.team.id){
      this.props.fetchTeamMembers(this.props.team.id);
    }
  }
  
  render() {
    let { teamMembers, destroyTeamMember } = this.props
    return (
      <ul>
        {teamMembers.map((teamMember, idx) => (
        <li key={idx}>{teamMember.username}</li>
        ))}
      </ul>
    )
  }
}

export default TeamMember;