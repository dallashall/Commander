import values from 'lodash/values';
import { connect } from 'react-redux';
import TeamMembers from './team_members';
import {
  fetchTeamMembers,
  fetchTeamMember,
  createTeamMember,
  destroyTeamMember
} from '../../../actions/team_members_actions';

const mapStateToProps = (state, ownProps) => ({
  teamMembers: values(state.teamMembers),
  team: state.team
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeamMembers: (teamId) => dispatch(fetchTeamMembers(teamId)),
  fetchTeamMember: (id) => dispatch(fetchTeamMember(id)),
  createTeamMember: (team) => dispatch(createTeamMember(team)),
  destroyTeamMember: (id) => dispatch(destroyTeamMember(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamMembers);