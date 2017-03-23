import React from 'react';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';

class TeamMemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: this.props.teamMembers,
      associates: this.props.associates,
      query: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.associates = this.associates.bind(this);
    this.add_or_drop = this.add_or_drop.bind(this);
  }

  handleChange(e) {
    this.setState({ query: e.target.value });
  }

  handleAddTeamMember(id) {
    return (e) => {
      this.props.addTeamMember(id, this.props.teamId);
    };
  }

  handleDropTeamMember(memberId) {
    return (e) => {
      this.props.dropTeamMember(memberId, this.props.teamId);
    }
  }

  add_or_drop(memberId) {
    if (this.props.teamMemberIds.includes(memberId)) {
      return (
        <button
          className="btn btn-float red"
          onClick={this.handleDropTeamMember(memberId)}>
          Drop
          </button>
      );
    } else {
      return (
        <button
          className="btn btn-float"
          onClick={this.handleAddTeamMember(memberId)}>
          add
          </button>
      );
    }
  }
  
  associates(members) {
    let memberItems = members.map((associate) => (
      <li key={associate.id}
      className="flex flex-between flex-v-center striped">
        <strong
          className="">
          {associate.username}
        </strong>
        {this.add_or_drop(associate.id)}
      </li>
    ));
    return memberItems;
  }

  render() {
    let associates = this.props.associates.sort((a, b) => a.username < b.username ? -1 : 1);
    associates = associates.filter(associate => associate.id !== this.props.currentUserId);
    let filteredMembers, joinedColor;
    if (this.state.query.length > 1) {
      filteredMembers = associates.filter(associate => {
        return associate.username.match(new RegExp(this.state.query, 'i'));
      });
    } else {
      filteredMembers = associates;
    }
    
    return (
      <div className="box white floating left-panel full-height flex col flex-half-single">
        <div className="edit-form col team-member-search">
          <div className="flex flex-between flex-v-center flex-0-1">
            <h3>Edit Team Members</h3>
            <button
              onClick={() => hashHistory.goBack()}
              className="btn-float btn-single center-flex-content">
              <i className="fa fa-times fa-fw fa-lg"></i>
            </button>
          </div>
          <form>
            <input
              type="text"
              placeholder="Search by Username"
              value={this.state.query}
              onChange={this.handleChange} />
          </form>
          <ul>
           { this.associates(filteredMembers) }
          </ul>  
        </div>
      </div>
    );
  }
}

export default TeamMemberForm;