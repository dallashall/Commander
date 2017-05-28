import React from 'react';
import { connect } from 'react-redux';
import values from 'lodash/values';
import TeamMemberForm from './team_member_form';
import {
  createTeamMember,
  destroyTeamMember
} from '../../../actions/team_members_actions';
import { inviteNewMember } from '../../../util/team_members_api_utils';

const _initial_state = [];

const mapStateToProps = (state = _initial_state, ownProps) => {
  return {
    associates: state.session.currentUser.associates,
    teamMembers: state.teamMembers.teamMembers,
    teamMemberIds: values(state.teamMembers.teamMembers).map(member => member.user_id),
    teamId: state.teams.selected_team.id,
    currentUserId: state.session.currentUser.id
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addTeamMember: (memberId, teamId) => dispatch(createTeamMember({ user_id: memberId, team_id: teamId })),
  dropTeamMember: (memberId, teamId) => dispatch(destroyTeamMember(memberId, teamId)),
  inviteNewMember: (new_team_member) => inviteNewMember(new_team_member)
})

export default connect (mapStateToProps, mapDispatchToProps)(TeamMemberForm);