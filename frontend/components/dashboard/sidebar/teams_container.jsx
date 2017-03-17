import {connect} from 'react-redux';
import React from 'react';
import values from 'lodash/values';
import Teams from './teams';
import {
  fetchTeam,
  fetchTeams,
  makeTeam,
  destroyTeam,
  modifyTeam
} from '../../../actions/teams_actions';
import { fetchSelectedTeam } from '../../../actions/team_actions';

const mapStateToProps = (state, ownProps) => ({
  teams: values(state.teams),
  team: state.team
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  makeTeam: (team) => dispatch(makeTeam(team)),
  modifyTeam: (team) => dispatch(modifyTeam(team)),
  destroyTeam: (id) => dispatch(destroyTeam(team)),
  fetchSelectedTeam: (id) => dispatch(fetchSelectedTeam(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
