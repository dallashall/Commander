import { connect } from 'react-redux';
import merge from 'lodash/merge';
import TeamsForm from './teams_form';
import { 
  makeTeam,
  modifyTeam,
  destroyTeam,
  fetchTeam
} from '../../../actions/teams_actions';
import {
  fetchAssignedTasks
} from '../../../actions/tasks_actions';

const mapStateToProps = (state, ownProps) => {
  let team;
  if (ownProps.route.edit) {
    team = merge({}, state.teams.selected_team);
  } else {
    team = {
      name: "",
      description: ""
    };
  }
  return {
    team
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formAction = ownProps.route.edit ? modifyTeam : makeTeam;
  return {
    formAction: (team) => dispatch(formAction(team)),
    destroyTeam: (id) => dispatch(destroyTeam(id)),
    fetchTeam: (id) => dispatch(fetchTeam(id)),
    fetchAssignedTasks: () => dispatch(fetchAssignedTasks())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamsForm);
