import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';
import TeamMemberForm from './team_member_form';
import {
  createTeamMember,
  destroyTeamMember
} from '../../../actions/team_members_actions';

const _initial_state = [];

const mapStateToProps = (state = _initial_state, ownProps) => {
  return {
    associates: state.session.currentUser.associates,
    teamMembers: state.teamMembers.teamMembers,
    teamMemberIds: values(state.teamMembers.teamMembers).map(member => member.user_id),
    teamId: state.team.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTeamMember: (memberId, teamId) => dispatch(createTeamMember({ user_id: memberId, team_id: teamId })),
  dropTeamMember: (memberId, teamId) => dispatch(destroyTeamMember(memberId, teamId))
})

export default connect (mapStateToProps, mapDispatchToProps)(TeamMemberForm);