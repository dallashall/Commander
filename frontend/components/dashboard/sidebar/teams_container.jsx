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

const mapStateToProps = (state, ownProps) => ({
  teams: values(state.teams)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTeams: () => dispatch(fetchTeams()),
  fetchTeam: (id) => dispatch(fetchTeam(id)),
  makeTeam: (team) => dispatch(makeTeam(team)),
  modifyTeam: (team) => dispatch(modifyTeam(team)),
  destroyTeam: (id) => dispatch(destroyTeam(team))
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
