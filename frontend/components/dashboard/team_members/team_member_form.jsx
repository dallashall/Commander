import React from 'react';
import merge from 'lodash/merge';
import { hashHistory } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class TeamMemberForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      teamMembers: this.props.teamMembers,
      associates: this.props.associates,
      query: "",
      newMemberEmail: "",
      message: "",
      loading: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.associates = this.associates.bind(this);
    this.add_or_drop = this.add_or_drop.bind(this);
    this.inviteNewMember = this.inviteNewMember.bind(this);
  }

  handleChange(param) {
    return (e) => {
      this.setState({ [param]: e.target.value });
    }
  }  

  inviteNewMember(e) {
    e.preventDefault();
    this.props.inviteNewMember({ email: this.state.newMemberEmail, team_id: this.props.teamId })
      .then(message => this.setState({ message: "Invitation sent!", loading: true }))
      .then(() => setTimeout(() => {
        this.setState({ message: "", loading: false, newMemberEmail: "" })
      }, 2000));
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
          <form onSubmit={this.inviteNewMember}>
            <div className="flex">
              <label className="flex-1" htmlFor="email">Invite via Email:
                <input value={this.state.newMemberEmail} classID="email" type="text" placeholder="Email Address" onChange={this.handleChange("newMemberEmail")} /> 
              </label>  
              <button disabled={this.state.loading} className="btn-float flex-1">Invite New Team Member</button>
            </div>
            <p className="message">{this.state.message}</p>
          </form>  
          <form>
            <input
              type="text"
              placeholder="Search by Username"
              value={this.state.query}
              onChange={this.handleChange("query")} />
          </form>
          <ul>
            <CSSTransitionGroup
              transitionName="slide"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
            { this.associates(filteredMembers) }
          </CSSTransitionGroup>
          </ul>  
        </div>
      </div>
    );
  }
}

export default TeamMemberForm;